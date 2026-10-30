import React from 'react';
import { Sparkles, Clock, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getSubjectById, getChapterById, getTopicById } from '../data/sampleHscSyllabus.js';
import { formatTimeRange, formatDurationHuman, timeToMinutes, getTodayDateString } from '../utils/timeUtils.js';

export default function UpcomingSessionCard({
  sessionsForDay,
  selectedDate,
  onOpenDetails,
  onQuickComplete,
  onOpenAddSession,
}) {
  const isToday = selectedDate === getTodayDateString();

  const incompleteSessions = sessionsForDay
    .filter((s) => s.status !== 'completed')
    .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

  // If all sessions for the day are completed
  if (sessionsForDay.length > 0 && incompleteSessions.length === 0) {
    return (
      <div className="bg-cream-surface border border-sage-200/90 rounded-3xl p-4 sm:p-5 shadow-soft flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-olive-light text-olive-deep flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-charcoal">All sessions completed</h3>
            <p className="text-[11px] text-charcoal-muted">All {sessionsForDay.length} planned study blocks done for today</p>
          </div>
        </div>
        <button
          onClick={onOpenAddSession}
          className="px-3 py-1.5 bg-sage-100 hover:bg-sage-200 text-charcoal text-xs font-bold rounded-full border border-sage-300 transition"
        >
          + Add block
        </button>
      </div>
    );
  }

  // If no sessions at all
  if (sessionsForDay.length === 0) {
    return null;
  }

  let upcomingSession = null;
  if (isToday) {
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    upcomingSession = incompleteSessions.find(
      (s) => s.status === 'in_progress' || timeToMinutes(s.startTime) + s.plannedDurationMinutes >= currentMins
    ) || incompleteSessions[0];
  } else {
    upcomingSession = incompleteSessions[0];
  }

  if (!upcomingSession) return null;

  const subject = getSubjectById(upcomingSession.subjectId);
  const chapter = getChapterById(upcomingSession.chapterId);
  const topic = getTopicById(upcomingSession.topicId);

  return (
    <div className="bg-mustard-card border border-mustard-hover/70 rounded-3xl sm:rounded-3.5xl p-4 sm:p-6 shadow-soft relative overflow-hidden transition-all">
      {/* Top row: Next Priority pill & duration */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal bg-white/80 px-2.5 py-1 rounded-full border border-black/5">
          <Sparkles className="w-3.5 h-3.5 text-olive-deep" />
          <span>Next Priority Block</span>
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-charcoal bg-white/80 px-2.5 py-1 rounded-full border border-black/5">
          <Clock className="w-3.5 h-3.5 text-charcoal-muted" />
          <span>{formatDurationHuman(upcomingSession.plannedDurationMinutes)}</span>
        </div>
      </div>

      {/* Subject and Topic info */}
      <div>
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-charcoal text-white">
            {subject?.name || 'Subject'}
          </span>
          <span className="text-xs text-charcoal font-semibold">
            {formatTimeRange(upcomingSession.startTime, upcomingSession.plannedDurationMinutes)}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-charcoal leading-snug">
          {chapter?.name || 'Chapter'}
        </h3>
        <p className="text-xs sm:text-sm text-charcoal/80 mt-1 flex items-center gap-1.5 font-medium">
          <BookOpen className="w-3.5 h-3.5 shrink-0 opacity-80" />
          <span className="line-clamp-1">{topic?.name || 'Topic'}</span>
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex items-center gap-2.5 pt-3 border-t border-black/10 mt-3.5">
        <button
          onClick={() => onQuickComplete(upcomingSession)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-charcoal hover:bg-black active:scale-[0.98] text-white text-xs sm:text-sm font-semibold rounded-full transition-all min-h-[42px] shadow-soft"
        >
          <CheckCircle2 className="w-4 h-4 text-mustard-card" />
          <span>Mark Completed</span>
        </button>

        <button
          onClick={() => onOpenDetails(upcomingSession)}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white/85 hover:bg-white active:bg-white/90 border border-black/10 text-charcoal text-xs sm:text-sm font-semibold rounded-full transition min-h-[42px]"
          aria-label="View session details"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
