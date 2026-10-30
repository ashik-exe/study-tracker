import { timeToMinutes, calculateEndTime, minutesToTime, getTodayDateString } from './timeUtils.js';

/**
 * Checks whether two time intervals overlap.
 * Strictly: startA < endB && startB < endA
 */
export function doIntervalsOverlap(startA, durationA, startB, durationB) {
  const a1 = timeToMinutes(startA);
  const a2 = a1 + Number(durationA || 0);
  const b1 = timeToMinutes(startB);
  const b2 = b1 + Number(durationB || 0);

  return a1 < b2 && b1 < a2;
}

/**
 * Checks if a proposed session has a time conflict with existing sessions.
 * 
 * @param {string} date - 'YYYY-MM-DD'
 * @param {string} startTime - 'HH:mm'
 * @param {number} durationMinutes
 * @param {Array} existingSessions
 * @param {string|null} excludeSessionId - ID to ignore (e.g. when editing the same session)
 * @returns {{ hasConflict: boolean, conflictingSession: object|null, message: string|null }}
 */
export function checkSessionConflict(date, startTime, durationMinutes, existingSessions, excludeSessionId = null) {
  if (!date || !startTime || !durationMinutes || !existingSessions) {
    return { hasConflict: false, conflictingSession: null, message: null };
  }

  // Filter sessions on the same date, excluding self
  const sameDaySessions = existingSessions.filter(
    (s) => s.date === date && s.id !== excludeSessionId
  );

  for (const session of sameDaySessions) {
    if (doIntervalsOverlap(startTime, durationMinutes, session.startTime, session.plannedDurationMinutes)) {
      const confEnd = calculateEndTime(session.startTime, session.plannedDurationMinutes);
      return {
        hasConflict: true,
        conflictingSession: session,
        message: `Overlaps with existing session (${session.startTime} – ${confEnd})`,
      };
    }
  }

  return { hasConflict: false, conflictingSession: null, message: null };
}

/**
 * Finds available non-overlapping time slots for a given day.
 * Respects configured buffer minutes between sessions and ensures
 * slots on today's date are strictly in the future.
 * 
 * @param {string} date - 'YYYY-MM-DD'
 * @param {number} durationMinutes
 * @param {Array} allSessions
 * @param {number} bufferMinutes - e.g. 15 mins
 * @param {number} maxSlots - maximum slots to return
 * @returns {Array<{ startTime: string, endTime: string, label: string }>}
 */
export function findAvailableTimeSlots(
  date,
  durationMinutes,
  allSessions,
  bufferMinutes = 15,
  maxSlots = 5
) {
  const dur = Number(durationMinutes) || 60;
  const buf = Number(bufferMinutes) || 15;
  const daySessions = allSessions.filter((s) => s.date === date);

  // Active study window: 08:00 AM to 11:00 PM (8 * 60 = 480 to 23 * 60 = 1380)
  const windowStart = 8 * 60; // 08:00
  const windowEnd = 23 * 60;  // 23:00

  // If the target date is today, only consider future time (current time + 15 min buffer)
  let earliestStart = windowStart;
  const todayStr = getTodayDateString();
  if (date === todayStr) {
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes() + 15;
    // Round up to nearest 15-minute mark
    const roundedMins = Math.ceil(currentMins / 15) * 15;
    earliestStart = Math.max(windowStart, roundedMins);
  }

  // Build list of blocked intervals [start - buf, end + buf]
  const blockedIntervals = daySessions.map((s) => {
    const sStart = timeToMinutes(s.startTime);
    const sEnd = sStart + Number(s.plannedDurationMinutes || 0);
    return {
      start: Math.max(0, sStart - buf),
      end: Math.min(24 * 60, sEnd + buf),
    };
  });

  const availableSlots = [];
  // Step through day in 30-minute intervals
  for (let candidateStart = earliestStart; candidateStart + dur <= windowEnd; candidateStart += 30) {
    const candidateEnd = candidateStart + dur;

    // Check collision with any blocked interval
    const hasCollision = blockedIntervals.some(
      (b) => candidateStart < b.end && b.start < candidateEnd
    );

    if (!hasCollision) {
      const startTimeStr = minutesToTime(candidateStart);
      const endTimeStr = minutesToTime(candidateEnd);
      availableSlots.push({
        startTime: startTimeStr,
        endTime: endTimeStr,
        label: `${startTimeStr} – ${endTimeStr} (${dur} min slot)`,
      });

      if (availableSlots.length >= maxSlots) break;
    }
  }

  return availableSlots;
}
