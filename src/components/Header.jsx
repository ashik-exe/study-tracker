import React from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { shiftDate, getTodayDateString, parseDateString } from '../utils/timeUtils.js';

export default function Header({
  viewMode,
  setViewMode,
  selectedDate,
  setSelectedDate,
  onOpenAddSession,
}) {
  const todayStr = getTodayDateString();
  const isSelectedToday = selectedDate === todayStr;

  const handlePrevDay = () => setSelectedDate(shiftDate(selectedDate, -1));
  const handleNextDay = () => setSelectedDate(shiftDate(selectedDate, 1));
  const handleJumpToToday = () => setSelectedDate(todayStr);

  const selectedDateObj = parseDateString(selectedDate);
  const weekdayName = selectedDateObj.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedSubtitle = selectedDateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-sage-page/90 px-4 sm:px-6 pt-3 pb-3 border-b border-sage-300/70">
      <div className="max-w-md sm:max-w-xl lg:max-w-3xl mx-auto">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between mb-2">
          {/* View switcher capsule */}
          <div
            role="tablist"
            aria-label="Routine views"
            className="flex p-0.5 bg-sage-200/80 rounded-full border border-sage-300"
          >
            <button
              role="tab"
              aria-selected={viewMode === 'today'}
              onClick={() => setViewMode('today')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all min-h-[32px] ${
                viewMode === 'today'
                  ? 'bg-charcoal text-cream-surface shadow-soft'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              Today
            </button>
            <button
              role="tab"
              aria-selected={viewMode === 'weekly'}
              onClick={() => setViewMode('weekly')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all min-h-[32px] ${
                viewMode === 'weekly'
                  ? 'bg-charcoal text-cream-surface shadow-soft'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              Weekly
            </button>
          </div>

          {/* Add Session Button */}
          <button
            onClick={onOpenAddSession}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-mustard-card hover:bg-mustard-hover active:scale-95 text-charcoal text-xs font-bold rounded-full shadow-soft transition-all min-h-[34px]"
            aria-label="Add study session"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Add Session</span>
          </button>
        </div>

        {/* Clear Heading: Weekday & Date */}
        <div className="flex items-end justify-between pt-1">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight leading-tight">
              {viewMode === 'today' ? weekdayName : 'Weekly Routine'}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-muted font-medium mt-0.5">
              {formattedSubtitle}
            </p>
          </div>

          {/* Date navigator for Today view */}
          {viewMode === 'today' && (
            <div className="flex items-center gap-1 bg-cream-surface/90 border border-sage-300 rounded-full px-1.5 py-1 shadow-soft">
              <button
                onClick={handlePrevDay}
                className="p-1 text-charcoal-muted hover:text-charcoal rounded-full hover:bg-sage-100 transition min-w-[28px] min-h-[28px] flex items-center justify-center"
                aria-label="Previous day"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {!isSelectedToday ? (
                <button
                  onClick={handleJumpToToday}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-olive-subtle text-white transition hover:bg-olive-card"
                >
                  Today
                </button>
              ) : (
                <span className="text-[11px] font-bold text-charcoal px-1.5">Today</span>
              )}

              <button
                onClick={handleNextDay}
                className="p-1 text-charcoal-muted hover:text-charcoal rounded-full hover:bg-sage-100 transition min-w-[28px] min-h-[28px] flex items-center justify-center"
                aria-label="Next day"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
