import React from 'react';
import { GraduationCap, Home, ArrowRight, ShieldCheck, BookOpen, Sparkles } from 'lucide-react';
import { STUDY_CONTEXTS } from '../services/storageService.js';

export default function InitialModeSelector({ onSelectMode }) {
  return (
    <div className="min-h-screen bg-sage-page text-charcoal font-sans flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 selection:bg-olive-light selection:text-olive-deep">
      <div className="max-w-lg sm:max-w-xl mx-auto w-full space-y-6">
        {/* Brand & Introduction Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-surface border border-sage-300 text-xs font-semibold text-charcoal-muted shadow-soft">
            <BookOpen className="w-3.5 h-3.5 text-olive-card" />
            <span>HSC Study Tracker · NCTB Curriculum</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
            Select Your Study Mode
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
            Choose how you want to track your syllabus. College and Home maintain completely separate progress over the same shared syllabus. You can switch between them at any time.
          </p>
        </div>

        {/* 2 Prominent Mode Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* 1. College Mode Card */}
          <div
            role="button"
            aria-label="Select College Mode Card"
            tabIndex={0}
            onClick={() => onSelectMode(STUDY_CONTEXTS.COLLEGE)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectMode(STUDY_CONTEXTS.COLLEGE);
              }
            }}
            className="group relative bg-cream-surface rounded-3xl sm:rounded-3.5xl border border-sage-200/90 hover:border-olive-card hover:shadow-card p-6 sm:p-7 transition-all cursor-pointer flex flex-col justify-between shadow-soft focus:outline-none focus:ring-2 focus:ring-olive-card"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-100 group-hover:bg-olive-card text-olive-card group-hover:text-cream-surface flex items-center justify-center transition-colors">
                  <GraduationCap className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sage-200/80 text-charcoal-muted">
                  কলেজ মোড
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-olive-deep transition-colors">
                College Mode
              </h2>
              <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                For topics studied and completed through college lectures, classes, and teachers.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-charcoal/80 border-t border-sage-200/80 pt-3">
                <li className="flex items-start gap-2">
                  <span className="text-olive-card font-bold">✓</span>
                  <span>Independent College syllabus completion %</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-card font-bold">✓</span>
                  <span>Log what teachers covered in class</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-card font-bold">✓</span>
                  <span>College-specific history and logs</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              aria-label="Select College Mode"
              onClick={(e) => {
                e.stopPropagation();
                onSelectMode(STUDY_CONTEXTS.COLLEGE);
              }}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-olive-card hover:bg-olive-deep text-cream-surface text-xs font-bold transition shadow-soft group-hover:shadow min-h-[46px]"
            >
              <span>Enter College Mode</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. Home Mode Card */}
          <div
            role="button"
            aria-label="Select Home Mode Card"
            tabIndex={0}
            onClick={() => onSelectMode(STUDY_CONTEXTS.HOME)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectMode(STUDY_CONTEXTS.HOME);
              }
            }}
            className="group relative bg-cream-surface rounded-3xl sm:rounded-3.5xl border border-sage-200/90 hover:border-olive-card hover:shadow-card p-6 sm:p-7 transition-all cursor-pointer flex flex-col justify-between shadow-soft focus:outline-none focus:ring-2 focus:ring-olive-card"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-100 group-hover:bg-olive-card text-olive-card group-hover:text-cream-surface flex items-center justify-center transition-colors">
                  <Home className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sage-200/80 text-charcoal-muted">
                  হোম / স্ব-অধ্যয়ন
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-olive-deep transition-colors">
                Home Mode
              </h2>
              <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                For independent self-study, textbook revision, math practice, and test preparation at home.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-charcoal/80 border-t border-sage-200/80 pt-3">
                <li className="flex items-start gap-2">
                  <span className="text-olive-card font-bold">✓</span>
                  <span>Independent Home self-study completion %</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-card font-bold">✓</span>
                  <span>Log your personal study & problem solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-card font-bold">✓</span>
                  <span>Home-specific history and logs</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              aria-label="Select Home Mode"
              onClick={(e) => {
                e.stopPropagation();
                onSelectMode(STUDY_CONTEXTS.HOME);
              }}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-charcoal hover:bg-stone-900 text-cream-surface text-xs font-bold transition shadow-soft group-hover:shadow min-h-[46px]"
            >
              <span>Enter Home Mode</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Reassurance Footer */}
        <div className="bg-cream-surface rounded-2xl border border-sage-200/90 p-4 flex items-center gap-3 shadow-soft">
          <ShieldCheck className="w-4 h-4 text-olive-card shrink-0" />
          <p className="text-xs text-charcoal-muted leading-relaxed">
            <span className="font-semibold text-charcoal">Shared Syllabus Architecture:</span> Both modes access the full NCTB syllabus for Physics, Chemistry, Math, Biology, ICT, and English with 100% separate progress.
          </p>
        </div>
      </div>
    </div>
  );
}
