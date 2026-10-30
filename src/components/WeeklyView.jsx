import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Plus,
} from 'lucide-react';
import {
  getWeekDates,
  shiftWeek,
  formatShortDate,
  formatDisplayDate,
  getTodayDateString,
  timeToMinutes,
} from '../utils/timeUtils.js';
import SessionCard from './SessionCard.jsx';
import DailySummary from './DailySummary.jsx';

export default function WeeklyView({
  selectedDate,
  setSelectedDate,
  allSessions,
  preferences,
  onOpenAddSession,
  onOpenTemplateModal,
  onOpenDetails,
  onQuickComplete,
  onEdit,
  onReschedule,
  onDelete,
  onUndoComplete,
  onOpenTargetSettings,
}) {
  const weekDays = getWeekDates(selectedDate);
  const todayStr = getTodayDateString();

  const handlePrevWeek = () => setSelectedDate(shiftWeek(selectedDate, -1));
  const handleNextWeek = () => setSelectedDate(shiftWeek(selectedDate, 1));
  const handleJumpToCurrentWeek = () => setSelectedDate(todayStr);

  const firstDate = weekDays[0]?.dateStr;
  const lastDate = weekDays[6]?.dateStr;

  const getDayMeta = (dateStr) => {
    const daySessions = allSessions.filter((s) => s.date === dateStr);
    const count = daySessions.length;
    const completedCount = daySessions.filter((s) => s.status === 'completed').length;
    const hasNeedsAttention = daySessions.some((s) => s.status === 'needs_attention');

    return {
      count,
      completedCount,
      allDone: count > 0 && completedCount === count,
      hasNeedsAttention,
      sessions: daySessions.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)),
    };
  };

  return (
    <div className="space-y-4">
      {/* Week Navigator & Template Action */}
      <div className="bg-cream-surface rounded-3xl border border-sage-300 p-4 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">
              Weekly Routine
            </span>
            <p className="text-base font-bold text-charcoal tracking-tight">
              {formatShortDate(firstDate)} – {formatShortDate(lastDate)}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrevWeek}
              className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-100 rounded-full transition min-w-[34px] min-h-[34px] flex items-center justify-center border border-sage-300"
              aria-label="Previous week"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleJumpToCurrentWeek}
              className="px-3 py-1 text-[11px] font-bold text-charcoal bg-sage-200/90 hover:bg-sage-300 rounded-full transition min-h-[34px] border border-sage-300"
            >
              This Week
            </button>

            <button
              onClick={handleNextWeek}
              className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-100 rounded-full transition min-w-[34px] min-h-[34px] flex items-center justify-center border border-sage-300"
              aria-label="Next week"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 7-Day Quick Touch Row */}
        <div className="grid grid-cols-7 gap-1.5 pt-1 border-t border-sage-200">
          {weekDays.map((day) => {
            const isSelected = day.dateStr === selectedDate;
            const meta = getDayMeta(day.dateStr);

            return (
              <button
                key={day.dateStr}
                onClick={() => setSelectedDate(day.dateStr)}
                className={`py-2 px-1 rounded-2xl flex flex-col items-center justify-center transition-all min-h-[58px] border ${
                  isSelected
                    ? 'bg-charcoal text-cream-surface border-charcoal shadow-soft'
                    : day.isToday
                    ? 'bg-mustard-card/40 text-charcoal border-mustard-card hover:bg-mustard-card/60'
                    : 'bg-sage-100/70 text-charcoal-muted border-sage-200 hover:bg-sage-200'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  {day.dayName}
                </span>
                <span className={`text-xs font-bold my-0.5 ${isSelected ? 'text-white' : 'text-charcoal'}`}>
                  {day.dayNumber}
                </span>

                <div className="h-1.5 flex items-center justify-center">
                  {meta.count > 0 ? (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        meta.allDone
                          ? 'bg-olive-card'
                          : meta.hasNeedsAttention
                          ? 'bg-amber-500'
                          : isSelected
                          ? 'bg-mustard-card'
                          : 'bg-charcoal-muted'
                      }`}
                    />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full opacity-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Template Application Button */}
        <div className="mt-3 pt-3 border-t border-sage-200 flex items-center justify-between">
          <span className="text-xs text-charcoal-muted font-medium">
            Master Routine:
          </span>
          <button
            onClick={onOpenTemplateModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-olive-subtle hover:bg-olive-card text-white text-xs font-bold rounded-full transition shadow-soft min-h-[34px]"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Apply Routine Template</span>
          </button>
        </div>
      </div>

      {/* Vertically Stacked Daily Sections */}
      <div className="space-y-3">
        {weekDays.map((day) => {
          const isSelected = day.dateStr === selectedDate;
          const meta = getDayMeta(day.dateStr);

          if (!isSelected) {
            return (
              <button
                key={day.dateStr}
                onClick={() => setSelectedDate(day.dateStr)}
                className="w-full text-left p-4 rounded-2xl bg-cream-surface/70 hover:bg-cream-surface border border-sage-300/80 transition-all shadow-soft flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-olive-card tracking-tight">
                    {day.dayName === 'Sat' ? 'Saturday' :
                     day.dayName === 'Sun' ? 'Sunday' :
                     day.dayName === 'Mon' ? 'Monday' :
                     day.dayName === 'Tue' ? 'Tuesday' :
                     day.dayName === 'Wed' ? 'Wednesday' :
                     day.dayName === 'Thu' ? 'Thursday' : 'Friday'}
                  </h3>
                  <p className="text-[11px] font-medium text-charcoal-muted">
                    {day.monthShort} {day.dayNumber} {day.isToday ? '· Today' : ''}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-charcoal-muted bg-sage-200/70 px-2.5 py-1 rounded-full border border-sage-300/50">
                    {meta.count === 0
                      ? 'No blocks'
                      : `${meta.completedCount}/${meta.count} done`}
                  </span>
                  <ChevronRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          }

          return (
            <div
              key={day.dateStr}
              className="bg-cream-surface rounded-3xl border-2 border-charcoal/20 p-4 sm:p-5 shadow-card space-y-4 animate-in fade-in zoom-in-95 duration-150"
            >
              {/* Day Heading */}
              <div className="flex items-start justify-between border-b border-sage-200 pb-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight">
                    {day.dayName === 'Sat' ? 'Saturday' :
                     day.dayName === 'Sun' ? 'Sunday' :
                     day.dayName === 'Mon' ? 'Monday' :
                     day.dayName === 'Tue' ? 'Tuesday' :
                     day.dayName === 'Wed' ? 'Wednesday' :
                     day.dayName === 'Thu' ? 'Thursday' : 'Friday'}
                  </h3>
                  <p className="text-xs font-semibold text-charcoal-muted mt-0.5">
                    {formatDisplayDate(day.dateStr)} {day.isToday ? '· Today' : ''}
                  </p>
                </div>

                <button
                  onClick={onOpenAddSession}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-mustard-card hover:bg-mustard-hover text-charcoal text-xs font-bold rounded-full shadow-soft transition min-h-[34px]"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add Block</span>
                </button>
              </div>

              {/* Day's Summary */}
              <DailySummary
                sessionsForDay={meta.sessions}
                preferences={preferences}
                onOpenTargetSettings={onOpenTargetSettings}
              />

              {/* Day's Session Checklist */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-olive-card" />
                  <span>Study Checklist ({meta.sessions.length})</span>
                </div>

                {meta.sessions.length === 0 ? (
                  <div className="p-6 text-center border border-dashed border-sage-300 rounded-2xl bg-sage-50/50">
                    <p className="text-xs text-charcoal-muted font-semibold">
                      No study blocks planned for this day yet.
                    </p>
                    <button
                      onClick={onOpenAddSession}
                      className="mt-2.5 text-xs font-bold text-olive-card hover:underline"
                    >
                      + Schedule a block for {day.dayName}
                    </button>
                  </div>
                ) : (
                  meta.sessions.map((session) => (
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
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
