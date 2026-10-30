import React, { useState, useMemo } from 'react';
import {
  HSC_SUBJECTS,
  SAMPLE_SUBJECTS,
  SAMPLE_CHAPTERS,
  SAMPLE_TOPICS,
  getSubjectById,
} from '../data/sampleHscSyllabus.js';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  Plus,
  SlidersHorizontal,
} from 'lucide-react';
import { formatDisplayDate, getTodayDateString, parseDateString } from '../utils/timeUtils.js';
import CircularProgress from './CircularProgress.jsx';
import WeeklyActivityPillBars from './WeeklyActivityPillBars.jsx';

export default function HomeOverview({
  currentMode = 'college',
  onModeChange,
  syllabusProgress,
  collegeProgress,
  homeProgress,
  combinedProgress,
  studyLogs = [],
  topicCompletions = {},
  modeCompletions = {},
  preferences,
  sessions = [],
  onNavigate,
  onSelectSubjectForLog,
}) {
  const isCollege = currentMode === 'college';
  const todayStr = getTodayDateString();
  const todayObj = parseDateString(todayStr);
  const weekdayName = todayObj.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedSubtitle = todayObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [paperFilter, setPaperFilter] = useState('all'); // 'all', '1st', '2nd', 'ict'

  const visibleSubjects = useMemo(() => {
    if (paperFilter === '1st') {
      return SAMPLE_SUBJECTS.filter((s) => s.id.endsWith('-1'));
    }
    if (paperFilter === '2nd') {
      return SAMPLE_SUBJECTS.filter((s) => s.id.endsWith('-2'));
    }
    if (paperFilter === 'ict') {
      return SAMPLE_SUBJECTS.filter((s) => s.id === 'sub-ict');
    }
    return SAMPLE_SUBJECTS;
  }, [paperFilter]);

  const overall = syllabusProgress?.overall || {
    total: SAMPLE_TOPICS.length,
    completed: 0,
    remaining: SAMPLE_TOPICS.length,
    percent: 0,
  };

  const combinedOverall = combinedProgress?.overall || {
    total: SAMPLE_TOPICS.length,
    completed: 0,
    remaining: SAMPLE_TOPICS.length,
    percent: 0,
  };

  // Next incomplete subject to study in the active mode
  const nextSubject = useMemo(() => {
    for (const sub of SAMPLE_SUBJECTS) {
      const prog = syllabusProgress?.subjects?.[sub.id];
      if (prog && prog.remaining > 0) return sub;
    }
    return SAMPLE_SUBJECTS[0];
  }, [syllabusProgress]);

  const handleOpenSubjectLogger = (subjectId) => {
    if (onSelectSubjectForLog) {
      onSelectSubjectForLog(subjectId);
    }
    onNavigate('syllabus');
  };

  return (
    <div className="space-y-4">
      {/* 1. Page Header: Title Case with clear hierarchy & generous breathing room */}
      <div className="flex items-center justify-between pt-1 pb-1">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight leading-tight">
            {weekdayName}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted font-medium mt-0.5">
            {formattedSubtitle} · HSC Study Tracker
          </p>
        </div>

        <button
          onClick={() => onNavigate('syllabus')}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-mustard-card hover:bg-mustard-hover active:scale-95 text-charcoal text-xs font-bold rounded-full shadow-soft transition-all min-h-[36px]"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Log Study</span>
        </button>
      </div>

      {/* Mode Banner: Clean capsule card indicating active mode */}
      <div className="bg-cream-surface rounded-2xl sm:rounded-3xl border border-sage-300/80 px-4 py-3 shadow-soft flex items-center justify-between gap-2 transition-all">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-olive-card shrink-0" />
          <span className="text-xs font-bold text-charcoal truncate">
            {isCollege ? 'College Mode Active' : 'Home Mode Active'}
          </span>
          <span className="hidden sm:inline text-xs text-charcoal-muted truncate">
            · {isCollege ? 'Tracking college lectures & class progress' : 'Tracking self-study & revision at home'}
          </span>
        </div>

        {onModeChange && (
          <button
            type="button"
            onClick={() => onModeChange(isCollege ? 'home' : 'college')}
            className="text-xs font-semibold text-olive-deep hover:text-black bg-sage-100 hover:bg-sage-200/80 px-3 py-1.5 rounded-full border border-sage-300/80 transition-all shrink-0 cursor-pointer shadow-xs"
          >
            {isCollege ? 'Switch to Home →' : 'Switch to College →'}
          </button>
        )}
      </div>

      {/* 2. Card 1: Syllabus Target Card (Inspired by Maarg stats layout with circular progress) */}
      <section
        aria-label="Overall Syllabus Progress"
        className="bg-cream-surface rounded-3xl border border-sage-300/80 p-5 sm:p-6 shadow-soft transition-all space-y-4"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span className="text-xs font-semibold text-charcoal-muted tracking-wide block uppercase">
              {isCollege ? 'College Syllabus Progress' : 'Home Syllabus Progress'}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mt-1">
              {overall.completed}{' '}
              <span className="text-xs sm:text-sm font-normal text-charcoal-muted">
                / {overall.total} topics completed ({overall.percent}%)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-charcoal-muted mt-1">
              <span>{overall.percent}% achieved in {isCollege ? 'College' : 'Home'}</span>
              <span>·</span>
              <span>{overall.completed} of {overall.total} topics done</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <CircularProgress
              percent={overall.percent}
              size={56}
              strokeWidth={5}
              color="#3D4739"
              trackColor="#E8EDE5"
            />
            <button
              onClick={() => onNavigate('progress')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-charcoal bg-sage-100/90 hover:bg-sage-200 rounded-full border border-sage-300/80 transition-all min-h-[34px] shadow-xs cursor-pointer"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-olive-subtle" />
            </button>
          </div>
        </div>

        {/* Progress Track */}
        <div>
          <div className="w-full bg-sage-200/80 h-2.5 rounded-full overflow-hidden p-0.5 border border-sage-300/60">
            <div
              className="bg-olive-card h-full rounded-full transition-all duration-500"
              style={{ width: `${overall.percent}%` }}
            />
          </div>
        </div>

        {/* Clean Cohesive Stats Row (Inspired by Maarg's clean 2-column or 3-column stats) */}
        <div className="pt-3 border-t border-sage-200/80 space-y-2.5">
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-sage-100/40">
              <span className="w-2.5 h-2.5 rounded-full bg-olive-card shrink-0" />
              <span className="font-normal text-charcoal-muted">{isCollege ? 'College Done:' : 'Home Done:'}</span>
              <span className="font-bold text-charcoal ml-auto">{overall.completed} topics</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-sage-100/40">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-300 shrink-0" />
              <span className="font-normal text-charcoal-muted">Remaining:</span>
              <span className="font-bold text-charcoal ml-auto">{overall.remaining} topics</span>
            </div>
          </div>

          {/* Explicit Combined Coverage label */}
          <div className="flex items-center justify-between text-xs font-medium text-charcoal-muted bg-sage-100/80 rounded-2xl px-3.5 py-2 border border-sage-200">
            <span>Combined Coverage (College + Home):</span>
            <span className="font-bold text-olive-deep">
              {combinedOverall.completed} unique topics ({combinedOverall.percent}%)
            </span>
          </div>
        </div>

        {/* Weekly Study Activity Visualization (Clean vertical pill bars inspired by Maarg stats) */}
        <div className="pt-3 border-t border-sage-200/80">
          <WeeklyActivityPillBars sessions={sessions} currentDate={todayStr} />
        </div>
      </section>

      {/* 3. Card 2: Next Priority Block (Streamlined without competing pills) */}
      <section className="bg-mustard-card border border-mustard-hover/70 rounded-3xl p-5 sm:p-6 shadow-soft relative overflow-hidden transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal bg-white/85 px-3 py-1 rounded-full border border-black/5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-olive-deep" />
            <span>Next Priority Study</span>
          </span>

          <span className="text-xs font-bold text-charcoal/90">
            {syllabusProgress?.subjects?.[nextSubject.id]?.percent || 0}% Completed
          </span>
        </div>

        <div className="mt-2">
          <h3 className="text-lg sm:text-xl font-bold text-charcoal leading-snug">
            {nextSubject.bengaliName ? `${nextSubject.bengaliName} (${nextSubject.bengaliPaperLabel || nextSubject.name})` : nextSubject.name}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/80 mt-1 font-medium">
            {syllabusProgress?.subjects?.[nextSubject.id]?.completed || 0} of {syllabusProgress?.subjects?.[nextSubject.id]?.total || 0} topics completed
          </p>
        </div>

        <div className="flex items-center gap-2.5 pt-3.5 border-t border-black/10 mt-3.5">
          <button
            onClick={() => handleOpenSubjectLogger(nextSubject.id)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-charcoal hover:bg-black active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-full transition-all min-h-[42px] shadow-soft cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-mustard-card" />
            <span>Record Study Log</span>
          </button>

          <button
            onClick={() => onNavigate('routine')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white/90 hover:bg-white active:bg-white/90 border border-black/10 text-charcoal text-xs sm:text-sm font-bold rounded-full transition min-h-[42px] cursor-pointer shadow-xs"
          >
            <span>Routine</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. Section 3: Subject Breakdown List (Clean cards with circular progress rings inspired by Maarg) */}
      <section aria-label="Subject Status" className="space-y-3.5">
        <div className="flex items-center justify-between px-0.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal">
            Syllabus by Subject
          </h2>

          <button
            onClick={() => onNavigate('syllabus')}
            className="text-xs font-bold text-olive-card hover:text-black flex items-center gap-1 transition px-3 py-1 rounded-full hover:bg-sage-200 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Open Syllabus</span>
          </button>
        </div>

        {/* Paper Filter Tabs (Rounded capsule pills) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
          {[
            { id: 'all', label: `All Subjects (${HSC_SUBJECTS.length})` },
            { id: '1st', label: '1st Paper' },
            { id: '2nd', label: '2nd Paper' },
            { id: 'ict', label: 'ICT' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setPaperFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer ${
                paperFilter === tab.id
                  ? 'bg-olive-card text-cream-surface shadow-xs'
                  : 'bg-sage-200/80 text-charcoal hover:bg-sage-300/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subject Cards List */}
        <div className="space-y-3">
          {paperFilter === 'all' ? (
            /* Parent Subjects with circular progress and dual paper chips */
            HSC_SUBJECTS.map((subGroup) => {
              const groupProg = syllabusProgress?.subjectGroups?.[subGroup.id] || {
                completed: 0,
                total: 0,
                percent: 0,
              };

              return (
                <div
                  key={subGroup.id}
                  className="bg-cream-surface rounded-2xl sm:rounded-3xl border border-sage-300/80 p-4 sm:p-5 shadow-soft transition-all hover:border-olive-subtle hover:shadow-card flex flex-col gap-3 group"
                >
                  <div
                    onClick={() => handleOpenSubjectLogger(subGroup.papers[0]?.id || subGroup.id)}
                    className="flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    {/* Left: Maarg-style Circular Progress Ring */}
                    <CircularProgress
                      percent={groupProg.percent}
                      size={48}
                      strokeWidth={4.5}
                      color="#3D4739"
                      trackColor="#E8EDE5"
                    />

                    {/* Middle: Subject Titles & Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sage-200/70 text-charcoal-muted">
                          {subGroup.papers.length > 1 ? '১ম ও ২য় পত্র' : 'একক পত্র'}
                        </span>
                        <span className="text-[11px] text-charcoal-muted font-normal">
                          {groupProg.completed}/{groupProg.total} topics ({groupProg.percent}%)
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-charcoal truncate group-hover:text-olive-deep transition-colors leading-snug">
                        {subGroup.bengaliName}
                      </h3>
                      <p className="text-xs font-normal text-charcoal-muted truncate mt-0.5">
                        {subGroup.name}
                      </p>
                    </div>

                    {/* Right: Round action button circle (like Maarg play/chevron circle) */}
                    <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center text-charcoal-muted group-hover:bg-olive-card group-hover:text-cream-surface transition-all shrink-0 shadow-xs">
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Dual Paper Chips: Allow quick direct jump to specific paper */}
                  <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-sage-200/70">
                    {subGroup.papers.map((paper) => {
                      const pProg = syllabusProgress?.papers?.[paper.id] || {
                        completed: 0,
                        total: 0,
                        percent: 0,
                      };

                      return (
                        <button
                          key={paper.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenSubjectLogger(paper.id);
                          }}
                          className="flex items-center justify-between px-3 py-2 rounded-xl bg-sage-100/80 hover:bg-olive-card hover:text-white border border-sage-300/60 text-charcoal text-xs font-medium transition-all group/chip cursor-pointer"
                        >
                          <span className="font-semibold">{paper.bengaliPaperLabel}</span>
                          <span className="text-[11px] opacity-80 font-mono font-bold">
                            {pProg.completed}/{pProg.total} ({pProg.percent}%)
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            /* Filtered individual papers view */
            visibleSubjects.map((sub) => {
              const progress = syllabusProgress?.papers?.[sub.id] || syllabusProgress?.subjects?.[sub.id] || {
                completed: 0,
                total: 0,
                percent: 0,
              };

              return (
                <div
                  key={sub.id}
                  onClick={() => handleOpenSubjectLogger(sub.id)}
                  className="bg-cream-surface rounded-2xl sm:rounded-3xl border border-sage-300/80 p-4 sm:p-5 shadow-soft transition-all hover:border-olive-subtle hover:shadow-card flex items-center justify-between gap-3 sm:gap-4 cursor-pointer group"
                >
                  {/* Left: Circular Progress */}
                  <CircularProgress
                    percent={progress.percent}
                    size={48}
                    strokeWidth={4.5}
                    color="#3D4739"
                    trackColor="#E8EDE5"
                  />

                  {/* Middle: Subject info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-sage-200/70 text-charcoal-muted">
                        {sub.code}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-charcoal truncate group-hover:text-olive-deep transition-colors">
                        {sub.bengaliName ? `${sub.bengaliName} (${sub.bengaliPaperLabel})` : sub.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-charcoal-muted">
                      <span>
                        {progress.completed}/{progress.total} topics ({progress.percent}%)
                      </span>
                    </div>
                  </div>

                  {/* Right: Round action button circle */}
                  <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center text-charcoal-muted group-hover:bg-olive-card group-hover:text-cream-surface transition-all shrink-0 shadow-xs">
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
