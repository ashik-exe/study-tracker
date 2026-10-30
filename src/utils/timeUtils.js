/**
 * TIME AND DATE UTILITIES FOR HSC STUDY TRACKER
 * Standard educational week in Bangladesh runs Saturday to Thursday (Friday/Sat weekend).
 * We support a 7-day week: Sat, Sun, Mon, Tue, Wed, Thu, Fri.
 */

export const WEEKDAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

/**
 * Returns today's date formatted as YYYY-MM-DD
 */
export function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formats a Date object as YYYY-MM-DD
 */
export function formatDateToString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Parses YYYY-MM-DD string to a Date object at local midnight
 */
export function parseDateString(dateStr) {
  if (!dateStr) return new Date();
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

/**
 * Gets 3-letter weekday abbreviation ('Sat', 'Sun', etc.) for a date string
 */
export function getWeekdayShort(dateStr) {
  const d = parseDateString(dateStr);
  const jsDay = d.getDay(); // 0 is Sun, 6 is Sat
  const mapping = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return mapping[jsDay];
}

/**
 * Converts "HH:mm" (24-hour) to total minutes from 00:00
 */
export function timeToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== 'string') return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

/**
 * Converts total minutes from 00:00 to "HH:mm" (24-hour)
 */
export function minutesToTime(totalMinutes) {
  const normalized = Math.max(0, Math.min(24 * 60 - 1, totalMinutes));
  const h = Math.floor(normalized / 60);
  const m = normalized % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Automatically calculates end time ("HH:mm") from startTime and duration in minutes
 */
export function calculateEndTime(startTime, durationMinutes) {
  if (!startTime) return '';
  const startMins = timeToMinutes(startTime);
  const endMins = startMins + Number(durationMinutes || 0);
  return minutesToTime(endMins);
}

/**
 * Formats 24h "HH:mm" to user-friendly "9:30 AM" or "02:15 PM"
 */
export function formatDisplayTime(timeStr) {
  if (!timeStr) return '';
  const [hStr, mStr] = timeStr.split(':');
  let h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10) || 0;
  if (isNaN(h)) return timeStr;
  const period = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${String(m).padStart(2, '0')} ${period}`;
}

/**
 * Formats time range e.g. "09:30 - 10:30 AM"
 */
export function formatTimeRange(startTime, plannedDurationMinutes) {
  if (!startTime) return '';
  const endTime = calculateEndTime(startTime, plannedDurationMinutes);
  return `${formatDisplayTime(startTime)} – ${formatDisplayTime(endTime)}`;
}

/**
 * Formats minutes into human-readable duration e.g. "2h 30m" or "45m"
 */
export function formatDurationHuman(minutes) {
  const mins = Math.max(0, Math.round(Number(minutes) || 0));
  if (mins === 0) return '0m';
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

/**
 * Formats date into readable string e.g. "Tuesday, 20 Oct 2026"
 */
export function formatDisplayDate(dateStr) {
  if (!dateStr) return '';
  const d = parseDateString(dateStr);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Formats a short date e.g. "20 Oct"
 */
export function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const d = parseDateString(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Returns an array of 7 Date strings for the week containing anchorDateStr.
 * Week starts on Saturday (BD standard) or can start on Sunday/Saturday.
 * Let's anchor on Saturday.
 */
export function getWeekDates(anchorDateStr) {
  const anchor = parseDateString(anchorDateStr);
  const jsDay = anchor.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
  
  // Calculate difference to previous Saturday:
  // Sat is day 6. If jsDay = 6, diff = 0.
  // If jsDay = 0 (Sun), diff = -1 (Sat is 1 day before).
  // If jsDay = 1 (Mon), diff = -2 (Sat is 2 days before).
  const diffToSaturday = jsDay === 6 ? 0 : -(jsDay + 1);
  
  const saturday = new Date(anchor);
  saturday.setDate(anchor.getDate() + diffToSaturday);
  
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const current = new Date(saturday);
    current.setDate(saturday.getDate() + i);
    weekDays.push({
      dateStr: formatDateToString(current),
      dayName: WEEKDAYS[i],
      dayNumber: current.getDate(),
      monthShort: current.toLocaleDateString('en-US', { month: 'short' }),
      isToday: formatDateToString(current) === getTodayDateString(),
    });
  }
  return weekDays;
}

/**
 * Shifts anchor date by N weeks (+1 or -1)
 */
export function shiftWeek(anchorDateStr, weekDelta) {
  const anchor = parseDateString(anchorDateStr);
  anchor.setDate(anchor.getDate() + weekDelta * 7);
  return formatDateToString(anchor);
}

/**
 * Shifts date by N days
 */
export function shiftDate(dateStr, daysDelta) {
  const d = parseDateString(dateStr);
  d.setDate(d.getDate() + daysDelta);
  return formatDateToString(d);
}

/**
 * Checks if a session has passed its scheduled end time
 */
export function isSessionOverdue(session, currentDateTime = new Date()) {
  if (!session || session.status === 'completed') return false;
  
  const todayStr = formatDateToString(currentDateTime);
  if (session.date < todayStr) return true; // past day
  
  if (session.date === todayStr) {
    const currentMins = currentDateTime.getHours() * 60 + currentDateTime.getMinutes();
    const sessionEndMins = timeToMinutes(session.startTime) + (session.plannedDurationMinutes || 0);
    return currentMins > sessionEndMins;
  }
  
  return false;
}
