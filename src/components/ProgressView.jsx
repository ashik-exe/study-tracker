import React, { useState, useEffect, useMemo } from 'react';
import {
  HSC_SUBJECTS,
  SAMPLE_SUBJECTS,
  SAMPLE_CHAPTERS,
  SAMPLE_TOPICS,
  getSubjectById,
  getChapterById,
  getTopicById,
  getChaptersByPaperId,
} from '../data/sampleHscSyllabus.js';
import {
  BarChart3,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  BookOpen,
  FileText,
  Plus,
  GraduationCap,
  Home,
} from 'lucide-react';
import { formatDisplayDate, formatDisplayTime, getTodayDateString, shiftDate, parseDateString } from '../utils/timeUtils.js';
import { STUDY_CONTEXTS, STUDY_CONTEXT_LABELS } from '../services/storageService.js';
import CircularProgress from './CircularProgress.jsx';
import { parseChapterTitle } from './SyllabusStudyLogger.jsx';

export default function ProgressView({
  currentMode = 'college',
  onModeChange,
  syllabusProgress,
  collegeProgress,
  homeProgress,
  combinedProgress,
  studyLogs = [],
  topicCompletions = {},
  modeCompletions = {},
  onSelectSubjectForLog,
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState('breakdown'); // 'breakdown' | 'history'
  const [paperFilter, setPaperFilter] = useState('all'); // 'all', '1st', '2nd', 'ict'
  const [expandedSubjectId, setExpandedSubjectId] = useState(HSC_SUBJECTS[0]?.id || null);

  // Mode Lens in Breakdown: 'college' | 'home' | 'combined' (defaults to active global mode)
  const [inspectMode, setInspectMode] = useState(currentMode);

  // Sync inspectMode when global currentMode changes
  useEffect(() => {
    setInspectMode(currentMode);
  }, [currentMode]);

  const activeProgress = useMemo(() => {
    if (inspectMode === 'college') return collegeProgress || syllabusProgress;
    if (inspectMode === 'home') return homeProgress || syllabusProgress;
    return combinedProgress || syllabusProgress;
  }, [inspectMode, collegeProgress, homeProgress, combinedProgress, syllabusProgress]);

  const activeCompletions = useMemo(() => {
    if (inspectMode === 'college') return modeCompletions?.college || topicCompletions;
    if (inspectMode === 'home') return modeCompletions?.home || topicCompletions;
    return {
      ...(modeCompletions?.home || {}),
      ...(modeCompletions?.college || {}),
    };
  }, [inspectMode, modeCompletions, topicCompletions]);

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

  const todayStr = getTodayDateString();
  const yesterdayStr = shiftDate(todayStr, -1);
  const todayObj = parseDateString(todayStr);
  const formattedSubtitle = todayObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const overall = activeProgress?.overall || {
    total: SAMPLE_TOPICS.length,
    completed: 0,
    remaining: SAMPLE_TOPICS.length,
    percent: 0,
  };

  // History tab filter defaults to the active global mode
  const [contextFilter, setContextFilter] = useState(currentMode);

  useEffect(() => {
    setContextFilter(currentMode);
  }, [currentMode]);

  const filteredStudyLogs = useMemo(() => {
    if (contextFilter === 'all') return studyLogs;
    return studyLogs.filter((l) => l.context === contextFilter);
  }, [studyLogs, contextFilter]);

  const groupedLogs = useMemo(() => {
    const groups = {};
    filteredStudyLogs.forEach((log) => {
      const d = log.date || 'Unknown Date';
      if (!groups[d]) {
        groups[d] = [];
      }
      groups[d].push(log);
    });

    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [filteredStudyLogs]);

  const toggleSubjectExpand = (subId) => {
    setExpandedSubjectId((prev) => (prev === subId ? null : subId));
  };

  return (
    <div className="space-y-4">
      {/* Top Header bar */}
      <div className="flex items-center justify-between pt-1 pb-1">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight leading-tight">
            Progress & History
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted font-medium mt-0.5">
            {formattedSubtitle} · Detailed syllabus completion
          </p>
        </div>

        {/* Capsule Switcher */}
        <div
          role="tablist"
          aria-label="Progress views"
          className="flex p-0.5 bg-sage-200/80 rounded-full border border-sage-300 shadow-soft"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'breakdown'}
            onClick={() => setActiveTab('breakdown')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all min-h-[32px] ${
              activeTab === 'breakdown'
                ? 'bg-charcoal text-cream-surface shadow-soft'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            Breakdown
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all min-h-[32px] ${
              activeTab === 'history'
                ? 'bg-charcoal text-cream-surface shadow-soft'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            History ({studyLogs.length})
          </button>
        </div>
      </div>

      {/* Mode Lens Selector: Toggle inspecting College vs Home vs Combined */}
      <div
        role="tablist"
        aria-label="Progress Mode Lens"
        className="flex p-1 bg-sage-200/90 rounded-full border border-sage-300 gap-1 shadow-xs"
      >
        <button
          type="button"
          role="tab"
          aria-selected={inspectMode === 'college'}
          onClick={() => setInspectMode('college')}
          className={`flex-1 py-1.5 px-2 rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer min-h-[32px] ${
            inspectMode === 'college'
              ? 'bg-olive-card text-white shadow-soft'
              : 'text-charcoal-muted hover:text-charcoal'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>College ({collegeProgress?.overall?.percent || 0}%)</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={inspectMode === 'home'}
          onClick={() => setInspectMode('home')}
          className={`flex-1 py-1.5 px-2 rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer min-h-[32px] ${
            inspectMode === 'home'
              ? 'bg-charcoal text-white shadow-soft'
              : 'text-charcoal-muted hover:text-charcoal'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home ({homeProgress?.overall?.percent || 0}%)</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={inspectMode === 'combined'}
          onClick={() => setInspectMode('combined')}
          className={`flex-1 py-1.5 px-2 rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer min-h-[32px] ${
            inspectMode === 'combined'
              ? 'bg-stone-700 text-white shadow-soft'
              : 'text-charcoal-muted hover:text-charcoal'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Combined ({combinedProgress?.overall?.percent || 0}%)</span>
        </button>
      </div>

      {/* Overall Progress Banner */}
      <section
        aria-label="Overall Progress Summary"
        className="bg-cream-surface rounded-3xl sm:rounded-3.5xl border border-sage-200/90 p-4 sm:p-6 shadow-soft transition-all"
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="shrink-0">
              <CircularProgress percent={overall.percent} size={64} strokeWidth={5.5} />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-charcoal-muted tracking-wide block truncate">
                {inspectMode === 'college'
                  ? 'College Syllabus Progress'
                  : inspectMode === 'home'
                  ? 'Home Self-Study Progress'
                  : 'Combined Syllabus Coverage (College + Home)'}
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight mt-0.5">
                {overall.percent}%{' '}
                <span className="text-xs sm:text-sm font-normal text-charcoal-muted">
                  Completed ({overall.completed}/{overall.total} topics)
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('syllabus')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-mustard-card hover:bg-mustard-hover active:scale-95 text-charcoal text-xs font-bold rounded-full shadow-soft transition-all min-h-[34px] shrink-0"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Log Study</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-3.5">
          <div className="w-full bg-sage-200/80 h-2 rounded-full overflow-hidden border border-sage-300/40">
            <div
              className="bg-olive-card h-full rounded-full transition-all duration-500"
              style={{ width: `${overall.percent}%` }}
            />
          </div>
        </div>

        {/* Clean Cohesive 3-Metric Row (Eliminating nested card boxes) */}
        <div className="grid grid-cols-3 divide-x divide-sage-200/80 pt-3 border-t border-sage-200/80 text-center">
          <div className="px-2">
            <span className="text-xs font-medium text-charcoal-muted block">
              Completed
            </span>
            <span className="text-lg sm:text-xl font-bold text-olive-card">
              {overall.completed}
            </span>
            <span className="text-xs text-charcoal-muted font-normal block">topics</span>
          </div>

          <div className="px-2">
            <span className="text-xs font-medium text-charcoal-muted block">
              Remaining
            </span>
            <span className="text-lg sm:text-xl font-bold text-charcoal">
              {overall.remaining}
            </span>
            <span className="text-xs text-charcoal-muted font-normal block">topics</span>
          </div>

          <div className="px-2">
            <span className="text-xs font-medium text-charcoal-muted block">
              Total Topics
            </span>
            <span className="text-lg sm:text-xl font-bold text-charcoal">
              {overall.total}
            </span>
            <span className="text-xs text-charcoal-muted font-normal block">in syllabus</span>
          </div>
        </div>
      </section>

      {/* TAB 1: SYLLABUS BREAKDOWN */}
      {activeTab === 'breakdown' && (
        <section aria-label="Subject Breakdown" className="space-y-3">
          <div className="flex items-center justify-between px-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal">
              Subject & Chapter Breakdown {paperFilter === 'all' ? `(${HSC_SUBJECTS.length} Subjects)` : `(${visibleSubjects.length} Papers)`}
            </h2>
          </div>

          {/* Paper Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
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
                className={`px-3 py-1 rounded-full text-xs font-bold transition shrink-0 ${
                  paperFilter === tab.id
                    ? 'bg-olive-card text-cream-surface shadow-xs'
                    : 'bg-sage-200/80 text-charcoal hover:bg-sage-300/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {paperFilter === 'all' ? (
            /* Level 1: Subject Groups -> Level 2: Papers -> Level 3: Chapters -> Level 4: Topics */
            HSC_SUBJECTS.map((subGroup) => {
              const isExpanded = expandedSubjectId === subGroup.id;
              const groupProg = activeProgress?.subjectGroups?.[subGroup.id] || {
                completed: 0,
                total: 0,
                percent: 0,
              };

              return (
                <div
                  key={subGroup.id}
                  className="bg-cream-surface rounded-3xl border border-sage-200/90 shadow-soft overflow-hidden transition-all"
                >
                  {/* Level 1: Subject Header with Maarg-style Circular Progress */}
                  <button
                    type="button"
                    onClick={() => toggleSubjectExpand(subGroup.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-sage-100/40 transition gap-3.5"
                  >
                    {/* Left: Circular Progress */}
                    <div className="shrink-0">
                      <CircularProgress percent={groupProg.percent} size={48} strokeWidth={4.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sage-200/80 text-charcoal-muted">
                          {subGroup.papers.length > 1 ? '১ম ও ২য় পত্র' : 'একক পত্র'}
                        </span>
                        <span className="text-xs font-semibold text-charcoal-muted">
                          {groupProg.completed}/{groupProg.total} topics
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-charcoal truncate">
                        {subGroup.bengaliName}{' '}
                        <span className="text-xs font-normal text-charcoal-muted">
                          ({subGroup.name})
                        </span>
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-charcoal-muted shrink-0 transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Level 2: Inside Expanded Subject -> Papers */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-sage-200/80 space-y-4 bg-sage-100/30">
                      {subGroup.papers.map((paper) => {
                        const paperProg = activeProgress?.papers?.[paper.id] || {
                          completed: 0,
                          total: 0,
                          percent: 0,
                        };
                        const chapters = getChaptersByPaperId(paper.id);

                        return (
                          <div
                            key={paper.id}
                            className="p-4 bg-cream-surface rounded-2.5xl border border-sage-200/80 shadow-soft space-y-3"
                          >
                            {/* Paper Banner */}
                            <div className="flex items-center justify-between pb-2 border-b border-sage-200/80">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span
                                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-black/5"
                                    style={{
                                      backgroundColor: paper.tagBg || '#EAEFE6',
                                      color: paper.tagText || '#2B3728',
                                    }}
                                  >
                                    Code {paper.code}
                                  </span>
                                  <h4 className="text-xs sm:text-sm font-black text-charcoal">
                                    {paper.bengaliPaperLabel} ({paper.paperLabel})
                                  </h4>
                                </div>
                                <span className="text-[10px] font-semibold text-charcoal-muted mt-0.5 block">
                                  {chapters.length} Chapters · {paperProg.completed}/{paperProg.total} Topics Completed ({paperProg.percent}%)
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => {
                                  if (onSelectSubjectForLog) onSelectSubjectForLog(paper.id);
                                  onNavigate('syllabus');
                                }}
                                className="px-3 py-1 bg-mustard-card hover:bg-mustard-hover text-charcoal text-[11px] font-bold rounded-full shadow-soft transition shrink-0"
                              >
                                Study Paper
                              </button>
                            </div>

                            {/* Paper Progress Bar */}
                            <div className="w-full bg-sage-200/80 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-olive-card h-full rounded-full transition-all duration-300"
                                style={{ width: `${paperProg.percent}%` }}
                              />
                            </div>

                            {/* Level 3: Chapters under Paper */}
                            <div className="space-y-2.5 pt-1">
                                {chapters.map((ch) => {
                                 const chProg = activeProgress?.chapters?.[ch.id] || {
                                   completed: 0,
                                   total: 0,
                                   percent: 0,
                                 };
                                 const topics = SAMPLE_TOPICS.filter((t) => t.chapterId === ch.id);
                                 const titleInfo = parseChapterTitle(ch.name, ch.chapterNumber);

                                 return (
                                   <div
                                     key={ch.id}
                                     className="p-3.5 bg-sage-100/40 rounded-2xl border border-sage-200/70 space-y-2"
                                   >
                                     <div className="flex items-start justify-between gap-2">
                                       <div className="flex-1 min-w-0">
                                         <button
                                           type="button"
                                           onClick={() => {
                                             if (onSelectSubjectForLog) onSelectSubjectForLog(paper.id, ch.id);
                                             onNavigate('syllabus');
                                           }}
                                           className="hover:underline text-left block"
                                         >
                                           <span className="text-xs font-medium text-charcoal leading-snug block">
                                             {titleInfo.primary}
                                           </span>
                                           <span className="text-[11px] text-charcoal-muted font-normal block mt-0.5">
                                             {titleInfo.secondary}{ch.periods ? ` · ${ch.periods} periods` : ''}
                                           </span>
                                         </button>
                                       </div>
                                       <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white text-charcoal-muted border border-sage-200 shrink-0">
                                         {chProg.completed}/{chProg.total} ({chProg.percent}%)
                                       </span>
                                     </div>

                                     <div className="w-full bg-sage-200/80 h-1.5 rounded-full overflow-hidden">
                                       <div
                                         className="bg-olive-card h-full rounded-full"
                                         style={{ width: `${chProg.percent}%` }}
                                       />
                                     </div>

                                     {/* Level 4: Topic List with Circular Indicators */}
                                     <div className="pt-1 space-y-1">
                                       {topics.map((top) => {
                                         const isCompleted = Boolean(activeCompletions[top.id]?.completed);
                                         return (
                                           <div
                                             key={top.id}
                                             className="flex items-center gap-2 text-xs py-1"
                                           >
                                             {isCompleted ? (
                                               <CheckCircle2 className="w-4 h-4 text-olive-card shrink-0 stroke-[2.5]" />
                                             ) : (
                                               <div className="w-4 h-4 rounded-full border-2 border-sage-400 shrink-0" />
                                             )}
                                             <span
                                               className={`text-[11px] leading-tight ${
                                                 isCompleted
                                                   ? 'text-charcoal font-medium'
                                                   : 'text-charcoal-muted font-normal'
                                               }`}
                                             >
                                               {top.name}
                                             </span>
                                           </div>
                                         );
                                       })}
                                     </div>
                                   </div>
                                 );
                               })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            /* Filtered individual papers view */
            visibleSubjects.map((sub) => {
              const isExpanded = expandedSubjectId === sub.id;
              const subProg = activeProgress?.papers?.[sub.id] || activeProgress?.subjects?.[sub.id] || {
                completed: 0,
                total: 0,
                percent: 0,
              };
              const chapters = SAMPLE_CHAPTERS.filter((c) => c.subjectId === sub.id);

              return (
                <div
                  key={sub.id}
                  className="bg-cream-surface rounded-3xl border border-sage-200/90 shadow-soft overflow-hidden transition-all"
                >
                  {/* Subject Header with Circular Progress */}
                  <button
                    type="button"
                    onClick={() => toggleSubjectExpand(sub.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-sage-100/40 transition gap-3.5"
                  >
                    {/* Left: Circular Progress */}
                    <div className="shrink-0">
                      <CircularProgress percent={subProg.percent} size={48} strokeWidth={4.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-sage-200/80 text-charcoal-muted">
                          Code {sub.code}
                        </span>
                        <span className="text-xs font-semibold text-charcoal-muted">
                          {subProg.completed}/{subProg.total} topics
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-charcoal truncate">
                        {sub.bengaliName ? `${sub.bengaliName} (${sub.bengaliPaperLabel})` : sub.name}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-charcoal-muted shrink-0 transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Chapter Details */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-sage-200 space-y-3 bg-sage-100/30">
                      {chapters.map((ch) => {
                        const chProg = activeProgress?.chapters?.[ch.id] || {
                          completed: 0,
                          total: 0,
                          percent: 0,
                        };
                        const topics = SAMPLE_TOPICS.filter((t) => t.chapterId === ch.id);
                        const titleInfo = parseChapterTitle(ch.name, ch.chapterNumber);

                        return (
                          <div
                            key={ch.id}
                            className="p-3 bg-cream-surface rounded-xl border border-sage-300/80 space-y-2 shadow-soft"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (onSelectSubjectForLog) onSelectSubjectForLog(sub.id, ch.id);
                                    onNavigate('syllabus');
                                  }}
                                  className="hover:underline text-left block"
                                >
                                  <span className="text-xs font-medium text-charcoal leading-snug block">
                                    {titleInfo.primary}
                                  </span>
                                  <span className="text-[11px] text-charcoal-muted font-normal block mt-0.5">
                                    {titleInfo.secondary}{ch.periods ? ` · ${ch.periods} periods` : ''}
                                  </span>
                                </button>
                              </div>
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sage-100 text-charcoal-muted border border-sage-200 shrink-0">
                                {chProg.completed}/{chProg.total} ({chProg.percent}%)
                              </span>
                            </div>

                            <div className="w-full bg-sage-200/80 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-olive-card h-full rounded-full"
                                style={{ width: `${chProg.percent}%` }}
                              />
                            </div>

                            {/* Topic List */}
                            <div className="pt-1 space-y-1">
                              {topics.map((top) => {
                                const isCompleted = Boolean(activeCompletions[top.id]?.completed);
                                return (
                                  <div
                                    key={top.id}
                                    className="flex items-center gap-2 text-xs py-1"
                                  >
                                    {isCompleted ? (
                                      <CheckCircle2 className="w-4 h-4 text-olive-card shrink-0 stroke-[2.5]" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full border-2 border-sage-400 shrink-0" />
                                    )}
                                    <span
                                      className={`text-[11px] leading-tight ${
                                        isCompleted
                                          ? 'text-charcoal font-medium'
                                          : 'text-charcoal-muted font-normal'
                                      }`}
                                    >
                                      {top.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}

                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectSubjectForLog) onSelectSubjectForLog(sub.id);
                          onNavigate('syllabus');
                        }}
                        className="w-full py-2.5 bg-mustard-card hover:bg-mustard-hover text-charcoal rounded-full font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-soft min-h-[40px]"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Log Topics for this Subject</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </section>
      )}

      {/* TAB 2: STUDY HISTORY */}
      {activeTab === 'history' && (
        <section aria-label="Study History" className="space-y-3">
          <div className="flex items-center justify-between px-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal">
              Study History ({filteredStudyLogs.length} Sessions)
            </h2>
          </div>

          {/* Context Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: `All (${studyLogs.length})` },
              { id: STUDY_CONTEXTS.COLLEGE, label: 'College', icon: GraduationCap },
              { id: STUDY_CONTEXTS.HOME, label: 'Home', icon: Home },
            ].map((tab) => {
              const count = tab.id === 'all'
                ? studyLogs.length
                : studyLogs.filter((l) => l.context === tab.id).length;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setContextFilter(tab.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
                    contextFilter === tab.id
                      ? 'bg-olive-card text-cream-surface shadow-xs'
                      : 'bg-sage-200/80 text-charcoal hover:bg-sage-300/70'
                  }`}
                >
                  {tab.icon && <tab.icon className="w-3 h-3" />}
                  <span>{tab.label}</span>
                  {tab.id !== 'all' && <span className="opacity-75 font-mono">({count})</span>}
                </button>
              );
            })}
          </div>

          {groupedLogs.length === 0 ? (
            <div className="bg-cream-surface rounded-3xl sm:rounded-3.5xl p-8 text-center border border-sage-200/90 shadow-soft">
              <Calendar className="w-8 h-8 text-charcoal-muted mx-auto mb-2 opacity-50" />
              <p className="text-xs text-charcoal-muted font-medium">No study activity logged yet for this filter.</p>
              <button
                onClick={() => onNavigate('syllabus')}
                className="mt-3 px-4 py-2 bg-charcoal text-white text-xs font-bold rounded-full shadow-soft"
              >
                Log a Session
              </button>
            </div>
          ) : (
            groupedLogs.map(([dateStr, logs]) => {
              const isToday = dateStr === todayStr;
              const isYesterday = dateStr === yesterdayStr;
              const displayDateLabel = isToday
                ? 'Today'
                : isYesterday
                ? 'Yesterday'
                : formatDisplayDate(dateStr);

              return (
                <div key={dateStr} className="space-y-2">
                  <div className="flex items-center gap-2 px-0.5">
                    <span className="text-xs font-bold text-charcoal uppercase tracking-wider">
                      {displayDateLabel}
                    </span>
                    <span className="text-xs text-charcoal-muted font-medium">
                      ({formatDisplayDate(dateStr)})
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {logs.map((log) => {
                      const sub = getSubjectById(log.subjectId);
                      const ch = getChapterById(log.chapterId);

                      return (
                        <div
                          key={log.id}
                          className="bg-cream-surface rounded-3xl p-4 sm:p-5 border border-sage-200/90 shadow-soft space-y-2.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-xs font-bold text-charcoal block">
                                {sub?.name || 'Subject'}
                              </span>
                              <span className="text-[11px] text-charcoal-muted font-medium block leading-tight">
                                {ch?.name || 'Chapter'}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              {log.context === STUDY_CONTEXTS.COLLEGE ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-olive-light text-olive-deep border border-olive-subtle/30">
                                  <GraduationCap className="w-3 h-3 text-olive-card" /> College
                                </span>
                              ) : log.context === STUDY_CONTEXTS.HOME ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sage-200/90 text-charcoal border border-sage-300/60">
                                  <Home className="w-3 h-3 text-charcoal" /> Home
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-sage-100 text-charcoal-muted border border-sage-200">
                                  Prior Log
                                </span>
                              )}

                              <span className="text-[10px] font-mono text-charcoal-muted bg-sage-100 px-2 py-0.5 rounded-full border border-sage-200">
                                {log.timestamp ? formatDisplayTime(new Date(log.timestamp).toTimeString().substring(0, 5)) : ''}
                              </span>
                            </div>
                          </div>

                          {/* Topics completed */}
                          <div className="pt-1 space-y-1">
                            {log.topicIds?.map((tId) => {
                              const topic = getTopicById(tId);
                              return (
                                <div
                                  key={tId}
                                  className="flex items-center gap-1.5 text-[11px] text-charcoal font-medium"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-olive-card shrink-0 stroke-[2.5]" />
                                  <span>{topic?.name || tId}</span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Notes if present */}
                          {log.notes && (
                            <div className="pt-1.5 border-t border-sage-200/80 flex items-start gap-1.5 text-[11px] text-charcoal-muted italic font-medium">
                              <FileText className="w-3 h-3 shrink-0 mt-0.5 text-olive-card" />
                              <span>"{log.notes}"</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </section>
      )}
    </div>
  );
}
