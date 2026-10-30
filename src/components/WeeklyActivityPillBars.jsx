import React, { useMemo } from 'react';
import {
  getWeekDates,
  getTodayDateString,
  formatDurationHuman,
  parseDateString,
} from '../utils/timeUtils.js';

export default function WeeklyActivityPillBars({
  sessions = [],
  currentDate = getTodayDateString(),
  className = '',
}) {
  const weekDays = useMemo(() => getWeekDates(currentDate), [currentDate]);
  const todayStr = getTodayDateString();

  // Calculate study minutes per day from completed sessions
  const dayStats = useMemo(() => {
    return weekDays.map((day) => {
      const daySessions = sessions.filter(
        (s) => s.date === day.dateStr && s.status === 'completed'
      );
      const minutes = daySessions.reduce(
        (sum, s) => sum + (Number(s.actualDurationMinutes) || 0),
        0
      );
      return {
        ...day,
        minutes,
        hours: (minutes / 60).toFixed(1),
        isToday: day.dateStr === todayStr,
      };
    });
  }, [weekDays, sessions, todayStr]);

  const totalMinutes = useMemo(
    () => dayStats.reduce((sum, d) => sum + d.minutes, 0),
    [dayStats]
  );
  const avgDailyMinutes = Math.round(totalMinutes / 7);

  // Maximum value for scaling the bars (at least 180m / 3h scale for clean visual height)
  const maxMinutes = Math.max(180, ...dayStats.map((d) => d.minutes));

  // Date range formatted e.g. "Oct 25 – Oct 31"
  const dateRangeLabel = useMemo(() => {
    if (weekDays.length < 7) return '';
    const start = parseDateString(weekDays[0].dateStr);
    const end = parseDateString(weekDays[6].dateStr);
    const startStr = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const endStr = end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${startStr} – ${endStr}`;
  }, [weekDays]);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header Row */}
      <div className="flex items-center justify-between text-xs">
        <div>
          <span className="text-charcoal-muted font-medium">This Week's Avg.</span>
          <div className="text-base sm:text-lg font-bold text-charcoal tracking-tight mt-0.5">
            {formatDurationHuman(avgDailyMinutes)}
            <span className="text-xs font-normal text-charcoal-muted ml-1">/ day</span>
          </div>
        </div>
        <span className="text-[11px] font-semibold text-charcoal-muted bg-sage-100 px-2.5 py-1 rounded-full border border-sage-200">
          {dateRangeLabel}
        </span>
      </div>

      {/* 7 Vertical Pill Bars (Inspired by Maarg stats visualization) */}
      <div className="flex items-end justify-between gap-1 sm:gap-2 pt-2 pb-1">
        {dayStats.map((d) => {
          const heightPercent = Math.min(100, Math.round((d.minutes / maxMinutes) * 100));
          const hasTime = d.minutes > 0;

          return (
            <div
              key={d.dateStr}
              className="flex-1 flex flex-col items-center gap-1.5 group min-w-[28px]"
              title={`${d.dayLabel} (${d.dateStr}): ${formatDurationHuman(d.minutes)} studied`}
            >
              {/* Duration Text above bar */}
              <span className="text-[10px] font-mono font-medium text-charcoal-muted leading-none">
                {hasTime ? `${parseFloat(d.hours)}h` : '0h'}
              </span>

              {/* Vertical Pill Track */}
              <div className="w-3 sm:w-3.5 h-16 sm:h-20 bg-sage-200/70 rounded-full flex flex-col justify-end p-0.5 overflow-hidden transition-colors group-hover:bg-sage-300/80">
                <div
                  className={`w-full rounded-full transition-all duration-500 ${
                    d.isToday
                      ? 'bg-olive-card shadow-xs'
                      : hasTime
                      ? 'bg-olive-subtle'
                      : 'bg-transparent'
                  }`}
                  style={{
                    height: hasTime ? `${Math.max(14, heightPercent)}%` : '0%',
                  }}
                />
              </div>

              {/* Day Label Below */}
              <div className="flex flex-col items-center">
                <span
                  className={`text-[11px] leading-tight transition-colors ${
                    d.isToday
                      ? 'font-bold text-olive-deep underline underline-offset-2'
                      : 'font-medium text-charcoal-muted group-hover:text-charcoal'
                  }`}
                >
                  {d.dayLabel}
                </span>
                {d.isToday && (
                  <span className="w-1 h-1 rounded-full bg-olive-card mt-0.5" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
