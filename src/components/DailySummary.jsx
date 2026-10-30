import React from 'react';
import { Clock, CheckCircle2, Award, SlidersHorizontal } from 'lucide-react';
import { formatDurationHuman } from '../utils/timeUtils.js';
import CircularProgress from './CircularProgress.jsx';

export default function DailySummary({
  sessionsForDay,
  preferences,
  onOpenTargetSettings,
}) {
  const targetMinutes = preferences?.dailyStudyTargetMinutes || 240;

  // Actual recorded study time derived ONLY from completed sessions
  const actualMinutes = sessionsForDay
    .filter((s) => s.status === 'completed')
    .reduce((sum, s) => sum + (Number(s.actualDurationMinutes) || 0), 0);

  const remainingMinutes = Math.max(0, targetMinutes - actualMinutes);
  const extraMinutes = Math.max(0, actualMinutes - targetMinutes);

  // Capped at 100%
  const progressPercent = Math.min(
    100,
    targetMinutes > 0 ? Math.round((actualMinutes / targetMinutes) * 100) : 0
  );

  const totalPlannedCount = sessionsForDay.length;
  const completedCount = sessionsForDay.filter((s) => s.status === 'completed').length;

  return (
    <section
      aria-label="Daily Study Summary"
      className="bg-cream-surface rounded-3xl sm:rounded-3.5xl border border-sage-200/90 p-4 sm:p-6 shadow-soft transition-all"
    >
      {/* Top row: Target & Goal config with Circular Progress */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="shrink-0">
            <CircularProgress percent={progressPercent} size={64} strokeWidth={5.5} />
          </div>
          <div className="min-w-0">
            <span className="text-xs font-semibold text-charcoal-muted tracking-wide block">
              Daily Study Target
            </span>
            <div className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight mt-0.5">
              {formatDurationHuman(actualMinutes)}{' '}
              <span className="text-xs sm:text-sm font-normal text-charcoal-muted">
                / {formatDurationHuman(targetMinutes)} goal
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenTargetSettings}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-charcoal bg-sage-100 hover:bg-sage-200 rounded-full border border-sage-300 transition-all min-h-[34px] shrink-0"
          aria-label="Configure study target"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-olive-subtle" />
          <span>Set Target</span>
        </button>
      </div>

      {/* Progress Track */}
      <div className="mb-3.5">
        <div className="w-full bg-sage-200/80 h-2.5 rounded-full overflow-hidden p-0.5 border border-sage-300/60">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progressPercent >= 100 ? 'bg-olive-card' : 'bg-olive-subtle'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs font-medium text-charcoal-muted mt-1.5">
          <span>{progressPercent}% achieved</span>
          <span>{completedCount} of {totalPlannedCount} sessions done</span>
        </div>
      </div>

      {/* Clean Cohesive Stats Row (Eliminating nested card boxes) */}
      <div className="flex items-center justify-between pt-3 border-t border-sage-200/80 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-olive-subtle shrink-0" />
          <span className="font-normal text-charcoal-muted">{extraMinutes > 0 ? 'Surpassed:' : 'Remaining:'}</span>
          <span className="font-bold text-charcoal">
            {extraMinutes > 0 ? `+${formatDurationHuman(extraMinutes)} extra` : formatDurationHuman(remainingMinutes)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-olive-card shrink-0" />
          <span className="font-normal text-charcoal-muted">Completed:</span>
          <span className="font-bold text-charcoal">
            {completedCount} of {totalPlannedCount} sessions
          </span>
        </div>
      </div>
    </section>
  );
}
