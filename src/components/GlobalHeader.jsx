import React from 'react';
import { GraduationCap, Home, BookOpen, Sparkles } from 'lucide-react';
import { STUDY_CONTEXTS } from '../services/storageService.js';

export default function GlobalHeader({
  currentMode,
  onModeChange,
  activeNav,
}) {
  return (
    <header className="sticky top-0 z-30 bg-sage-page/95 backdrop-blur-md px-4 sm:px-6 py-2.5 border-b border-sage-300/80 transition-all">
      <div className="max-w-md sm:max-w-xl lg:max-w-3xl mx-auto flex items-center justify-between gap-2">
        {/* Brand / Context Label */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-olive-card text-cream-surface flex items-center justify-center shadow-xs">
            {currentMode === STUDY_CONTEXTS.COLLEGE ? (
              <GraduationCap className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <Home className="w-4 h-4 stroke-[2.5]" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extrabold tracking-tight text-charcoal">
                HSC Tracker
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-olive-card" />
              <span className="text-[11px] font-bold text-olive-deep">
                {currentMode === STUDY_CONTEXTS.COLLEGE ? 'College Mode' : 'Home Mode'}
              </span>
            </div>
          </div>
        </div>

        {/* Global Mode Segmented Switcher Capsule */}
        <div
          role="tablist"
          aria-label="Global Study Mode"
          className="flex p-0.5 bg-sage-200/90 rounded-full border border-sage-300 shadow-xs shrink-0"
        >
          <button
            type="button"
            role="tab"
            aria-label="Switch to College Mode"
            aria-selected={currentMode === STUDY_CONTEXTS.COLLEGE}
            onClick={() => onModeChange(STUDY_CONTEXTS.COLLEGE)}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all min-h-[30px] cursor-pointer ${
              currentMode === STUDY_CONTEXTS.COLLEGE
                ? 'bg-olive-card text-cream-surface shadow-soft'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="Switch application to College Mode"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>College</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-label="Switch to Home Mode"
            aria-selected={currentMode === STUDY_CONTEXTS.HOME}
            onClick={() => onModeChange(STUDY_CONTEXTS.HOME)}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all min-h-[30px] cursor-pointer ${
              currentMode === STUDY_CONTEXTS.HOME
                ? 'bg-charcoal text-cream-surface shadow-soft'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
            title="Switch application to Home Mode"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </div>
      </div>
    </header>
  );
}
