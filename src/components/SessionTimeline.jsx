import React from 'react';
import { Plus, Calendar } from 'lucide-react';
import SessionCard from './SessionCard.jsx';
import { timeToMinutes } from '../utils/timeUtils.js';

export default function SessionTimeline({
  sessionsForDay,
  selectedDate,
  onOpenDetails,
  onQuickComplete,
  onEdit,
  onReschedule,
  onDelete,
  onUndoComplete,
  onOpenAddSession,
}) {
  const sortedSessions = [...sessionsForDay].sort(
    (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
  );

  return (
    <section aria-label="Session Timeline" className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between px-0.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal">
          Daily Study Checklist ({sortedSessions.length})
        </h2>

        <button
          onClick={onOpenAddSession}
          className="text-xs font-bold text-olive-card hover:text-black flex items-center gap-1 transition px-2.5 py-1 rounded-full hover:bg-sage-200"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Add Block</span>
        </button>
      </div>

      {sortedSessions.length === 0 ? (
        <div className="bg-cream-surface rounded-3xl border border-dashed border-sage-300 p-8 text-center shadow-soft">
          <div className="w-11 h-11 rounded-full bg-sage-100 text-charcoal flex items-center justify-center mx-auto mb-3 border border-sage-200">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
            No study blocks scheduled
          </h3>
          <p className="text-xs text-charcoal-muted mt-1 max-w-xs mx-auto font-medium">
            Plan your chapters and topics for this day to keep your HSC preparation on track.
          </p>
          <button
            onClick={onOpenAddSession}
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal hover:bg-black text-white text-xs font-bold rounded-full shadow-soft transition min-h-[42px]"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule a Study Block</span>
          </button>
        </div>
      ) : (
        <div className="space-y-2.5">
          {sortedSessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onOpenDetails={onOpenDetails}
              onQuickComplete={onQuickComplete}
              onEdit={onEdit}
              onReschedule={onReschedule}
              onDelete={onDelete}
              onUndoComplete={onUndoComplete}
            />
          ))}

          {/* Quick inline button */}
          <button
            onClick={onOpenAddSession}
            className="w-full py-3 px-4 rounded-2xl border border-dashed border-sage-300/80 bg-cream-surface/40 hover:bg-cream-surface text-charcoal-muted hover:text-charcoal text-xs font-bold transition flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add another study block to this checklist...</span>
          </button>
        </div>
      )}
    </section>
  );
}
