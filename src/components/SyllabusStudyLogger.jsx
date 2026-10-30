import React, { useState, useMemo, useEffect } from 'react';
import {
  HSC_SUBJECTS,
  SAMPLE_SUBJECTS,
  SAMPLE_CHAPTERS,
  SAMPLE_TOPICS,
  getSubjectGroupById,
  getSubjectGroupByPaperId,
  getChaptersByPaperId,
  getTopicsByChapterId,
} from '../data/sampleHscSyllabus.js';
import {
  CheckCircle2,
  BookOpen,
  Search,
  Check,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Calendar,
  FileText,
  Plus,
  RotateCcw,
  History,
  X,
  GraduationCap,
  Home,
  Atom,
  FlaskConical,
  Sigma,
  Dna,
  Cpu,
  Languages,
} from 'lucide-react';
import { formatDisplayDate, getTodayDateString, parseDateString } from '../utils/timeUtils.js';
import {
  buildTopicsContextMap,
  STUDY_CONTEXTS,
  STUDY_CONTEXT_LABELS,
} from '../services/storageService.js';
import CircularProgress from './CircularProgress.jsx';

// Dedicated, restrained subject icons
const SUBJECT_ICONS = {
  'subj-bangla': BookOpen,
  'subj-english': Languages,
  'subj-physics': Atom,
  'subj-chemistry': FlaskConical,
  'subj-higher-math': Sigma,
  'subj-biology': Dna,
  'subj-ict': Cpu,
};

/**
 * Cleanly separates Chapter Name into Primary Bengali Title and Secondary English Subtitle
 * Preserves 100% of underlying syllabus text without rewriting or data loss.
 * e.g., "Chapter 1: Physical World & Measurement (ভৌতজগত ও পরিমাপ)"
 * -> primary: "ভৌতজগত ও পরিমাপ"
 * -> secondary: "Ch 1 · Physical World & Measurement"
 */
export const parseChapterTitle = (fullName, chapterNumber) => {
  if (!fullName) return { primary: `Chapter ${chapterNumber || ''}`, secondary: '', english: '', bengali: '', full: '' };

  const parenMatch = fullName.match(/^(?:Chapter\s*\d+:\s*)?(.+?)\s*\((.+?)\)$/i);
  if (parenMatch) {
    const english = parenMatch[1].trim();
    const bengali = parenMatch[2].trim();
    return {
      primary: bengali,
      secondary: chapterNumber ? `Ch ${chapterNumber} · ${english}` : english,
      english,
      bengali,
      full: fullName,
    };
  }

  const colonMatch = fullName.match(/^(?:Chapter\s*\d+:\s*)?(.+)$/i);
  if (colonMatch) {
    const title = colonMatch[1].trim();
    return {
      primary: title,
      secondary: chapterNumber ? `Ch ${chapterNumber}` : '',
      english: title,
      bengali: title,
      full: fullName,
    };
  }

  return {
    primary: fullName,
    secondary: chapterNumber ? `Ch ${chapterNumber}` : '',
    english: fullName,
    bengali: fullName,
    full: fullName,
  };
};

export default function SyllabusStudyLogger({
  topicCompletions = {},
  studyLogs = [],
  studyContext = STUDY_CONTEXTS.COLLEGE,
  onContextChange,
  onRecordStudyLog,
  onToggleTopic,
  onRecordTopicStudySession,
  syllabusProgress,
  initialSubjectId = null,
  initialChapterId = null,
}) {
  // Navigation Levels: 'subjects' (Landing) | 'chapters' (Subject view) | 'topics' (Chapter topics checklist)
  const [viewLevel, setViewLevel] = useState(() => {
    if (initialSubjectId) {
      return initialChapterId ? 'topics' : 'chapters';
    }
    return 'subjects';
  });

  // Selected Subject Group
  const [selectedSubjectGroupId, setSelectedSubjectGroupId] = useState(() => {
    if (initialSubjectId) {
      const paperMatch = SAMPLE_SUBJECTS.find((s) => s.id === initialSubjectId);
      if (paperMatch) {
        const group = getSubjectGroupByPaperId(paperMatch.id);
        if (group) return group.id;
      }
      const groupMatch = getSubjectGroupById(initialSubjectId);
      if (groupMatch) return groupMatch.id;
    }
    return HSC_SUBJECTS[0]?.id || 'subj-physics';
  });

  // Remembered paper per subject (defaults to 1st paper or unified paper)
  const [rememberedPapers, setRememberedPapers] = useState({});

  // Active Paper
  const [selectedPaperId, setSelectedPaperId] = useState(() => {
    if (initialSubjectId) {
      const paperMatch = SAMPLE_SUBJECTS.find((s) => s.id === initialSubjectId);
      if (paperMatch) return paperMatch.id;
    }
    const group = getSubjectGroupById(initialSubjectId) || HSC_SUBJECTS[0];
    return group?.papers[0]?.id || '';
  });

  // Active Chapter
  const [selectedChapterId, setSelectedChapterId] = useState(() => {
    if (initialChapterId) return initialChapterId;
    const chs = getChaptersByPaperId(selectedPaperId);
    return chs[0]?.id || '';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [chapterStatusFilter, setChapterStatusFilter] = useState('all'); // 'all' | 'untouched' | 'in_progress' | 'completed'
  const [studyNotes, setStudyNotes] = useState('');

  // O(1) map of context histories across all topics
  const topicsContextMap = useMemo(
    () => buildTopicsContextMap(studyLogs),
    [studyLogs]
  );

  // Modals for repeated study session & topic history inspection
  const [studyAgainTopic, setStudyAgainTopic] = useState(null);
  const [studyAgainContext, setStudyAgainContext] = useState(studyContext);
  const [studyAgainNotes, setStudyAgainNotes] = useState('');
  const [historyTopic, setHistoryTopic] = useState(null);

  // Sync studyAgainContext when external studyContext changes
  useEffect(() => {
    setStudyAgainContext(studyContext);
  }, [studyContext]);

  const todayStr = getTodayDateString();
  const todayObj = parseDateString(todayStr);
  const formattedSubtitle = todayObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Handle hardware & browser back/forward navigation smoothly via popstate
  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.syllabusLevel) {
        setViewLevel(e.state.syllabusLevel);
        if (e.state.groupId) setSelectedSubjectGroupId(e.state.groupId);
        if (e.state.paperId) setSelectedPaperId(e.state.paperId);
        if (e.state.chapterId) setSelectedChapterId(e.state.chapterId);
      } else {
        // Default to subjects landing if no syllabus state
        setViewLevel('subjects');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync external navigation props when passed (e.g. from HomeOverview or ProgressView)
  useEffect(() => {
    if (!initialSubjectId) {
      return;
    }
    const paperMatch = SAMPLE_SUBJECTS.find((s) => s.id === initialSubjectId);
    if (paperMatch) {
      const group = getSubjectGroupByPaperId(paperMatch.id);
      if (group) setSelectedSubjectGroupId(group.id);
      setSelectedPaperId(paperMatch.id);
      const chs = getChaptersByPaperId(paperMatch.id);
      if (initialChapterId && chs.some((c) => c.id === initialChapterId)) {
        setSelectedChapterId(initialChapterId);
        setViewLevel('topics');
      } else {
        setSelectedChapterId(chs[0]?.id || '');
        setViewLevel(initialChapterId ? 'topics' : 'chapters');
      }
    } else {
      const groupMatch = getSubjectGroupById(initialSubjectId);
      if (groupMatch) {
        setSelectedSubjectGroupId(groupMatch.id);
        const targetPaper = rememberedPapers[groupMatch.id] || groupMatch.papers[0]?.id;
        if (targetPaper) {
          setSelectedPaperId(targetPaper);
          const chs = getChaptersByPaperId(targetPaper);
          if (initialChapterId && chs.some((c) => c.id === initialChapterId)) {
            setSelectedChapterId(initialChapterId);
            setViewLevel('topics');
          } else {
            setSelectedChapterId(chs[0]?.id || '');
            setViewLevel(initialChapterId ? 'topics' : 'chapters');
          }
        }
      }
    }
  }, [initialSubjectId, initialChapterId]);

  // Active Subject Group metadata
  const selectedSubjectGroup = useMemo(
    () => getSubjectGroupById(selectedSubjectGroupId) || HSC_SUBJECTS[0],
    [selectedSubjectGroupId]
  );

  // Available papers for active subject group
  const papersInActiveGroup = useMemo(
    () => selectedSubjectGroup.papers || [],
    [selectedSubjectGroup]
  );

  // Active Paper metadata
  const selectedPaper = useMemo(
    () => papersInActiveGroup.find((p) => p.id === selectedPaperId) || papersInActiveGroup[0] || SAMPLE_SUBJECTS[0],
    [papersInActiveGroup, selectedPaperId]
  );

  // Chapters for currently selected paper
  const chaptersForPaper = useMemo(
    () => getChaptersByPaperId(selectedPaper.id),
    [selectedPaper.id]
  );

  // Active chapter metadata
  const selectedChapter = useMemo(() => {
    return chaptersForPaper.find((c) => c.id === selectedChapterId) || chaptersForPaper[0];
  }, [chaptersForPaper, selectedChapterId]);

  // Topics for currently active chapter
  const topicsForChapter = useMemo(() => {
    if (!selectedChapter?.id) return [];
    return getTopicsByChapterId(selectedChapter.id);
  }, [selectedChapter]);

  // All topics for the active paper (used for search)
  const allPaperTopics = useMemo(() => {
    const chIds = new Set(chaptersForPaper.map((c) => c.id));
    return SAMPLE_TOPICS.filter((t) => chIds.has(t.chapterId));
  }, [chaptersForPaper]);

  // Progress metrics
  const groupProgress = syllabusProgress?.subjectGroups?.[selectedSubjectGroupId] || {
    completed: 0,
    total: 0,
    percent: 0,
  };

  const paperProg = syllabusProgress?.papers?.[selectedPaper.id] || {
    completed: 0,
    total: allPaperTopics.length,
    percent: 0,
  };

  const chProgress = (selectedChapter?.id && syllabusProgress?.chapters?.[selectedChapter.id]) || {
    completed: 0,
    total: topicsForChapter.length,
    percent: 0,
  };

  // --- NAVIGATION ACTIONS ---

  // 1. Selecting a Subject: replaces subject list with that subject's chapters within same section
  const handleSelectSubject = (groupId) => {
    setSelectedSubjectGroupId(groupId);
    const group = getSubjectGroupById(groupId);
    const targetPaper = rememberedPapers[groupId] || group?.papers[0]?.id || '';
    setSelectedPaperId(targetPaper);
    const chs = getChaptersByPaperId(targetPaper);
    setSelectedChapterId(chs[0]?.id || '');
    setViewLevel('chapters');
    setSearchQuery('');
    setChapterStatusFilter('all');

    if (typeof window !== 'undefined' && window.history?.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.set('subject', groupId);
      url.searchParams.set('paper', targetPaper);
      url.searchParams.delete('chapter');
      window.history.pushState({ syllabusLevel: 'chapters', groupId, paperId: targetPaper }, '', url);
    }
  };

  // 2. Switching Papers inline: updates displayed chapter list in place
  const handleSelectPaper = (paperId) => {
    setSelectedPaperId(paperId);
    setRememberedPapers((prev) => ({ ...prev, [selectedSubjectGroupId]: paperId }));
    const chs = getChaptersByPaperId(paperId);
    setSelectedChapterId(chs[0]?.id || '');
    setSearchQuery('');
    setChapterStatusFilter('all');

    if (typeof window !== 'undefined' && window.history?.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('paper', paperId);
      url.searchParams.delete('chapter');
      window.history.replaceState({ syllabusLevel: 'chapters', groupId: selectedSubjectGroupId, paperId }, '', url);
    }
  };

  // 3. Selecting a Chapter: opens chapter topics checklist
  const handleSelectChapter = (chId) => {
    setSelectedChapterId(chId);
    setViewLevel('topics');
    setSearchQuery('');

    if (typeof window !== 'undefined' && window.history?.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.set('chapter', chId);
      window.history.pushState(
        { syllabusLevel: 'topics', groupId: selectedSubjectGroupId, paperId: selectedPaperId, chapterId: chId },
        '',
        url
      );
    }
  };

  // 4. Back to Chapters: returns to active subject's chapter list
  const handleBackToChapters = () => {
    setViewLevel('chapters');
    setSearchQuery('');
    if (typeof window !== 'undefined' && window.history?.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.delete('chapter');
      window.history.pushState(
        { syllabusLevel: 'chapters', groupId: selectedSubjectGroupId, paperId: selectedPaperId },
        '',
        url
      );
    }
  };

  // 5. Back to Subjects: returns to the Subjects landing screen
  const handleBackToSubjects = () => {
    setViewLevel('subjects');
    setSearchQuery('');
    if (typeof window !== 'undefined' && window.history?.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.delete('subject');
      url.searchParams.delete('paper');
      url.searchParams.delete('chapter');
      window.history.pushState({ syllabusLevel: 'subjects' }, '', url);
    }
  };

  // Chapter Status Summary (Untouched, In Progress, Completed)
  const chapterStatusSummary = useMemo(() => {
    let untouched = 0;
    let inProgress = 0;
    let completed = 0;

    chaptersForPaper.forEach((ch) => {
      const prog = syllabusProgress?.chapters?.[ch.id] || { completed: 0, total: 0 };
      if (prog.total > 0 && prog.completed === prog.total) {
        completed++;
      } else if (prog.completed > 0) {
        inProgress++;
      } else {
        untouched++;
      }
    });

    return { total: chaptersForPaper.length, untouched, inProgress, completed };
  }, [chaptersForPaper, syllabusProgress]);

  // Filtered Chapters based on status filter chip
  const displayedChapters = useMemo(() => {
    if (chapterStatusFilter === 'all') return chaptersForPaper;
    return chaptersForPaper.filter((ch) => {
      const prog = syllabusProgress?.chapters?.[ch.id] || { completed: 0, total: 0 };
      if (chapterStatusFilter === 'completed') {
        return prog.total > 0 && prog.completed === prog.total;
      }
      if (chapterStatusFilter === 'in_progress') {
        return prog.completed > 0 && prog.completed < prog.total;
      }
      if (chapterStatusFilter === 'untouched') {
        return prog.completed === 0;
      }
      return true;
    });
  }, [chaptersForPaper, chapterStatusFilter, syllabusProgress]);

  // Topic Search Logic
  const isSearching = searchQuery.trim().length > 0;
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = searchQuery.toLowerCase().trim();
    return allPaperTopics.filter((t) => t.name.toLowerCase().includes(q));
  }, [isSearching, searchQuery, allPaperTopics]);

  // Save Study Log with optional notes for active chapter
  const handleSaveLog = () => {
    if (!selectedChapter?.id) return;
    const completedTopicIds = topicsForChapter
      .filter((t) => Boolean(topicCompletions[t.id]?.completed))
      .map((t) => t.id);

    onRecordStudyLog({
      subjectId: selectedPaper.id,
      chapterId: selectedChapter.id,
      topicIds: completedTopicIds,
      notes: studyNotes,
      dateStr: todayStr,
      context: studyContext,
    });
    setStudyNotes('');
  };

  // Open modal to study topic again
  const handleOpenStudyAgain = (topic) => {
    setStudyAgainTopic(topic);
    setStudyAgainContext(studyContext);
    setStudyAgainNotes('');
  };

  // Confirm repeated study session
  const handleConfirmStudyAgain = (e) => {
    e.preventDefault();
    if (!studyAgainTopic || !onRecordTopicStudySession) return;
    onRecordTopicStudySession({
      topicId: studyAgainTopic.id,
      context: studyAgainContext,
      notes: studyAgainNotes,
      dateStr: todayStr,
    });
    setStudyAgainTopic(null);
    setStudyAgainNotes('');
  };

  // Helper: Render subtle cross-context indicator badges
  const renderTopicContextBadges = (topicId) => {
    const ctx = topicsContextMap[topicId];
    if (!ctx || ctx.totalSessions === 0) return null;

    return (
      <div className="flex items-center gap-1.5 flex-wrap mt-1">
        {/* 1. When in Home view, if studied at College */}
        {studyContext === STUDY_CONTEXTS.HOME && ctx.studiedAtCollege && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const t = SAMPLE_TOPICS.find((item) => item.id === topicId);
              if (t) setHistoryTopic(t);
            }}
            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-olive-deep bg-sage-200/90 hover:bg-sage-300/80 border border-sage-300/80 px-2 py-0.5 rounded-full transition"
            title="Click to view study history"
          >
            <GraduationCap className="w-3 h-3 text-olive-card shrink-0" />
            <span>
              Also studied at College{ctx.lastCollegeDate ? ` (${formatDisplayDate(ctx.lastCollegeDate)})` : ''}
            </span>
          </button>
        )}

        {/* 2. When in College view, if studied at Home */}
        {studyContext === STUDY_CONTEXTS.COLLEGE && ctx.studiedAtHome && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const t = SAMPLE_TOPICS.find((item) => item.id === topicId);
              if (t) setHistoryTopic(t);
            }}
            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-charcoal-muted bg-sage-200/90 hover:bg-sage-300/80 border border-sage-300/80 px-2 py-0.5 rounded-full transition"
            title="Click to view study history"
          >
            <Home className="w-3 h-3 text-charcoal shrink-0" />
            <span>
              Also studied at Home{ctx.lastHomeDate ? ` (${formatDisplayDate(ctx.lastHomeDate)})` : ''}
            </span>
          </button>
        )}

        {/* 3. When in Home view and also studied at Home */}
        {studyContext === STUDY_CONTEXTS.HOME && ctx.studiedAtHome && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const t = SAMPLE_TOPICS.find((item) => item.id === topicId);
              if (t) setHistoryTopic(t);
            }}
            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-charcoal bg-sage-100 hover:bg-sage-200/70 border border-sage-200 px-2 py-0.5 rounded-full transition"
            title="Click to view study history"
          >
            <Home className="w-3 h-3 text-charcoal shrink-0" />
            <span>
              Studied at Home{ctx.homeCount > 1 ? ` (${ctx.homeCount}×)` : ''}
            </span>
          </button>
        )}

        {/* 4. When in College view and also studied at College */}
        {studyContext === STUDY_CONTEXTS.COLLEGE && ctx.studiedAtCollege && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const t = SAMPLE_TOPICS.find((item) => item.id === topicId);
              if (t) setHistoryTopic(t);
            }}
            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-olive-deep bg-sage-100 hover:bg-sage-200/70 border border-sage-200 px-2 py-0.5 rounded-full transition"
            title="Click to view study history"
          >
            <GraduationCap className="w-3 h-3 text-olive-card shrink-0" />
            <span>
              Studied at College{ctx.collegeCount > 1 ? ` (${ctx.collegeCount}×)` : ''}
            </span>
          </button>
        )}

        {/* 5. Historical / Unknown record */}
        {ctx.studiedAtUnknown && !ctx.studiedAtCollege && !ctx.studiedAtHome && (
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-charcoal-muted bg-sage-100 border border-sage-200 px-2 py-0.5 rounded-full">
            <span>Studied previously</span>
          </span>
        )}
      </div>
    );
  };

  const ActiveSubjectIcon = SUBJECT_ICONS[selectedSubjectGroup.id] || BookOpen;

  return (
    <div className="space-y-4">
      {/* =========================================================================
          LEVEL 1: SYLLABUS LANDING SCREEN — SUBJECTS ONLY
          Displays available subjects with completion %, without chapters or topics.
          ========================================================================= */}
      {viewLevel === 'subjects' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Header: Minimal, title case, restrained */}
          <div className="flex items-center justify-between pt-1 pb-1">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight leading-tight">
                Syllabus
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-muted font-normal mt-0.5">
                {formattedSubtitle} · Select a subject to explore syllabus & chapters
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-cream-surface/90 border border-sage-300/80 rounded-full px-3.5 py-1.5 shadow-soft">
              <span className="text-xs font-semibold text-charcoal">
                Overall: {syllabusProgress?.overall?.percent || 0}%
              </span>
            </div>
          </div>

          {/* Subjects Grid: 1 col on mobile, 2 cols on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {HSC_SUBJECTS.map((subGroup) => {
              const Icon = SUBJECT_ICONS[subGroup.id] || BookOpen;
              const progress = syllabusProgress?.subjectGroups?.[subGroup.id] || {
                completed: 0,
                total: 0,
                percent: 0,
              };
              const paperCount = subGroup.papers.length;

              return (
                <button
                  key={subGroup.id}
                  type="button"
                  onClick={() => handleSelectSubject(subGroup.id)}
                  className="text-left p-4 sm:p-5 rounded-3xl bg-cream-surface border border-sage-200/90 hover:border-olive-card/70 hover:shadow-card transition-all flex items-center justify-between gap-3.5 shadow-soft group cursor-pointer"
                >
                  {/* Left: Maarg-style Circular Progress Ring */}
                  <div className="shrink-0">
                    <CircularProgress percent={progress.percent} size={52} strokeWidth={4.5} />
                  </div>

                  {/* Center: Subject Bengali and English names + metadata */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sage-200/70 text-charcoal-muted">
                        {paperCount > 1 ? '১ম ও ২য় পত্র' : 'একক পত্র'}
                      </span>
                      <span className="text-[11px] text-charcoal-muted font-normal">
                        {progress.completed}/{progress.total} topics
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-charcoal leading-snug group-hover:text-olive-deep transition-colors truncate">
                      {subGroup.bengaliName}
                    </h2>
                    <p className="text-xs text-charcoal-muted font-normal mt-0.5 truncate">
                      {subGroup.name}
                    </p>
                  </div>

                  {/* Right: Circular Chevron Action Button */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sage-100 flex items-center justify-center text-charcoal-muted group-hover:bg-olive-card group-hover:text-cream-surface transition-all shrink-0">
                    <ChevronRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          LEVEL 2: SUBJECT VIEW — CHAPTERS WITH INLINE PAPER SWITCHER
          Single section view: inline segmented control (if multi-paper) & chapter list.
          ========================================================================= */}
      {viewLevel === 'chapters' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Top Breadcrumb & Back to Subjects */}
          <div className="flex items-center justify-between gap-2 pt-1 pb-1">
            <button
              type="button"
              onClick={handleBackToSubjects}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-200/80 hover:bg-sage-300 text-charcoal text-xs font-medium transition shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>All Subjects</span>
            </button>

            <div className="flex items-center gap-1.5 text-xs text-charcoal-muted font-normal">
              <span>Syllabus</span>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <span className="text-charcoal font-medium">{selectedSubjectGroup.name}</span>
            </div>
          </div>

          {/* Subject Overview Card with Clean, Prominent Typography & Subtle Progress */}
          <div className="bg-cream-surface rounded-3xl border border-sage-200/90 p-4 sm:p-5 shadow-soft space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight leading-tight">
                  {selectedSubjectGroup.bengaliName}
                </h1>
                <p className="text-xs text-charcoal-muted font-normal mt-0.5">
                  {selectedSubjectGroup.name}
                </p>
              </div>

              {/* Multi-paper subjects: Compact inline paper pill switcher */}
              {papersInActiveGroup.length > 1 && (
                <div
                  role="tablist"
                  aria-label="Paper selector"
                  className="flex p-0.5 bg-sage-200/90 rounded-full border border-sage-300 shadow-xs self-start sm:self-auto shrink-0"
                >
                  {papersInActiveGroup.map((paper) => {
                    const isSelected = paper.id === selectedPaperId;
                    return (
                      <button
                        key={paper.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => handleSelectPaper(paper.id)}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all min-h-[30px] cursor-pointer ${
                          isSelected
                            ? 'bg-charcoal text-cream-surface shadow-soft'
                            : 'text-charcoal-muted hover:text-charcoal'
                        }`}
                      >
                        <span>{paper.bengaliPaperLabel}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Subtle Progress Metric and Thin Progress Bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs font-normal text-charcoal-muted">
                <span>
                  {selectedPaper.bengaliPaperLabel} · {chaptersForPaper.length} Chapters
                </span>
                <span className="font-medium text-charcoal">
                  {paperProg.percent}% ({paperProg.completed}/{paperProg.total} topics)
                </span>
              </div>
              <div className="w-full bg-sage-200/80 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-olive-card h-full rounded-full transition-all duration-300"
                  style={{ width: `${paperProg.percent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Chapter Status Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
            {[
              { id: 'all', label: `All Chapters (${chapterStatusSummary.total})` },
              { id: 'untouched', label: `Untouched (${chapterStatusSummary.untouched})` },
              { id: 'in_progress', label: `In Progress (${chapterStatusSummary.inProgress})` },
              { id: 'completed', label: `Completed (${chapterStatusSummary.completed})` },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setChapterStatusFilter(f.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition shrink-0 cursor-pointer ${
                  chapterStatusFilter === f.id
                    ? 'bg-olive-card text-cream-surface shadow-xs'
                    : 'bg-sage-200/80 text-charcoal hover:bg-sage-300/70'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Chapter Cards List: Refined, Medium-weight, Scannable */}
          <div className="space-y-2.5">
            {displayedChapters.length === 0 ? (
              <div className="py-12 text-center bg-cream-surface rounded-3xl border border-sage-300 p-6 text-xs text-charcoal-muted font-normal">
                No chapters matched this filter.
              </div>
            ) : (
              displayedChapters.map((ch) => {
                const prog = syllabusProgress?.chapters?.[ch.id] || { completed: 0, total: 0, percent: 0 };
                const isCompleted = prog.total > 0 && prog.completed === prog.total;
                const isInProgress = prog.completed > 0 && prog.completed < prog.total;
                const titleInfo = parseChapterTitle(ch.name, ch.chapterNumber);

                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => handleSelectChapter(ch.id)}
                    className="w-full text-left p-4 sm:p-4.5 rounded-2.5xl bg-cream-surface border border-sage-200/90 hover:border-olive-card/60 hover:shadow-card transition-all shadow-soft group cursor-pointer space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      {/* Left: Clean Chapter Title & Subtitle */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[15px] sm:text-base text-charcoal group-hover:text-olive-deep transition-colors leading-snug">
                          {titleInfo.primary}
                        </h3>
                        <p className="text-xs text-charcoal-muted font-normal mt-0.5 truncate">
                          {titleInfo.secondary}
                        </p>
                      </div>

                      {/* Right: Subtle Status Indicator & Subtle Arrow */}
                      <div className="flex items-center gap-2 shrink-0 pt-0.5">
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-olive-card">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>100%</span>
                          </span>
                        ) : isInProgress ? (
                          <span className="text-xs font-medium text-charcoal-muted">
                            {prog.percent}% <span className="opacity-70">({prog.completed}/{prog.total})</span>
                          </span>
                        ) : (
                          <span className="text-xs text-charcoal-muted/70 font-normal">
                            {prog.total} topics
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-charcoal-muted group-hover:text-charcoal group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Bottom: Thin Understated Progress Bar */}
                    <div className="w-full bg-sage-200/70 h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-olive-card h-full rounded-full transition-all duration-300"
                        style={{ width: `${prog.percent}%` }}
                      />
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          LEVEL 3: CHAPTER TOPICS VIEW
          Full checklist, College/Home switcher, indicators, notes & Save Study Log.
          ========================================================================= */}
      {viewLevel === 'topics' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Top Breadcrumb & Back to Chapters */}
          <div className="flex items-center justify-between gap-2 pt-1 pb-1">
            <button
              type="button"
              onClick={handleBackToChapters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-200/80 hover:bg-sage-300 text-charcoal text-xs font-medium transition shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Back to Chapters</span>
            </button>

            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-charcoal-muted font-normal truncate max-w-[200px] sm:max-w-none">
              <span className="cursor-pointer hover:underline" onClick={handleBackToSubjects}>
                {selectedSubjectGroup.name}
              </span>
              <ChevronRight className="w-3 h-3 opacity-60 shrink-0" />
              <span className="cursor-pointer hover:underline" onClick={handleBackToChapters}>
                {selectedPaper.paperLabel}
              </span>
              <ChevronRight className="w-3 h-3 opacity-60 shrink-0" />
              <span className="text-charcoal font-medium truncate">Ch {selectedChapter?.chapterNumber}</span>
            </nav>
          </div>

          {/* Topics Card */}
          <section
            aria-label="Topics Checklist"
            className="bg-cream-surface rounded-3xl sm:rounded-3.5xl border border-sage-200/90 p-4 sm:p-6 shadow-soft transition-all space-y-4"
          >
            {/* Chapter Header with College / Home Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-sage-200">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-charcoal leading-snug">
                  {selectedChapter ? parseChapterTitle(selectedChapter.name, selectedChapter.chapterNumber).primary : ''}
                </h1>
                <p className="text-xs text-charcoal-muted font-normal mt-0.5">
                  {selectedChapter ? parseChapterTitle(selectedChapter.name, selectedChapter.chapterNumber).secondary : ''}
                  {selectedChapter?.periods ? ` · ${selectedChapter.periods} curriculum periods` : ''} · {selectedSubjectGroup.bengaliName} ({selectedPaper.bengaliPaperLabel})
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                {/* Compact College / Home Switcher Capsule (Inside study logging view) */}
                <div
                  role="tablist"
                  aria-label="Study context"
                  className="flex p-0.5 bg-sage-200/90 rounded-full border border-sage-300 shadow-xs"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={studyContext === STUDY_CONTEXTS.COLLEGE}
                    onClick={() => onContextChange?.(STUDY_CONTEXTS.COLLEGE)}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-all min-h-[30px] cursor-pointer ${
                      studyContext === STUDY_CONTEXTS.COLLEGE
                        ? 'bg-charcoal text-cream-surface shadow-soft'
                        : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>College</span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    aria-selected={studyContext === STUDY_CONTEXTS.HOME}
                    onClick={() => onContextChange?.(STUDY_CONTEXTS.HOME)}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-all min-h-[30px] cursor-pointer ${
                      studyContext === STUDY_CONTEXTS.HOME
                        ? 'bg-charcoal text-cream-surface shadow-soft'
                        : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-xs font-medium text-olive-card">
                    {chProgress.completed} / {chProgress.total} completed ({chProgress.percent}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Chapter Progress Bar */}
            <div className="w-full bg-sage-200/80 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-olive-card h-full rounded-full transition-all duration-300"
                style={{ width: `${chProgress.percent}%` }}
              />
            </div>

            {/* Topic Search within Paper */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search topics across ${selectedPaper.name} (${selectedPaper.bengaliPaperLabel})...`}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-full bg-sage-100/80 border border-sage-300 focus:outline-none focus:border-olive-card text-charcoal placeholder:text-charcoal-muted font-normal"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-charcoal-muted hover:text-charcoal bg-sage-200 px-2 py-0.5 rounded-full cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search Results Mode */}
            {isSearching ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium text-charcoal px-1">
                  <span>Search Results ({searchResults.length})</span>
                  <span className="text-xs text-charcoal-muted font-normal">
                    Click checkbox to toggle completion
                  </span>
                </div>

                {searchResults.length === 0 ? (
                  <div className="py-8 text-center text-xs text-charcoal-muted font-normal">
                    No topics matched "{searchQuery}" in {selectedPaper.name}.
                  </div>
                ) : (
                  <div className="divide-y divide-sage-200/80">
                    {searchResults.map((topic) => {
                      const isCompleted = Boolean(topicCompletions[topic.id]?.completed);
                      const parentChapter = SAMPLE_CHAPTERS.find((c) => c.id === topic.chapterId);
                      const parentTitleInfo = parentChapter ? parseChapterTitle(parentChapter.name, parentChapter.chapterNumber) : null;

                      return (
                        <div
                          key={topic.id}
                          className="py-3 px-2 flex items-start gap-3 rounded-2xl transition hover:bg-sage-100/40"
                        >
                          {/* Circular Checkbox */}
                          <button
                            type="button"
                            onClick={() => onToggleTopic(topic.id)}
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all min-w-[20px] min-h-[20px] cursor-pointer ${
                              isCompleted
                                ? 'bg-olive-card text-white ring-2 ring-olive-subtle/30'
                                : 'border-2 border-sage-400 bg-white hover:border-olive-card'
                            }`}
                            data-topic-id={topic.id}
                            aria-label={isCompleted ? `Uncheck topic ${topic.id}` : `Check topic ${topic.id}`}
                          >
                            {isCompleted && <Check className="w-3 h-3 stroke-[3]" />}
                          </button>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                              {parentTitleInfo && (
                                <span className="text-xs font-normal text-charcoal-muted bg-sage-200/80 px-2 py-0.5 rounded-full">
                                  {parentTitleInfo.secondary} · {parentTitleInfo.primary}
                                </span>
                              )}
                              {isCompleted && (
                                <span className="text-xs font-medium text-olive-card bg-sage-100 px-2 py-0.5 rounded-full">
                                  Done
                                </span>
                              )}
                            </div>

                            <p
                              onClick={() => onToggleTopic(topic.id)}
                              className="text-xs sm:text-sm leading-relaxed cursor-pointer select-none text-charcoal font-normal"
                            >
                              {topic.name}
                            </p>

                            {/* Cross-context indicator badges */}
                            {renderTopicContextBadges(topic.id)}
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenStudyAgain(topic);
                            }}
                            className="opacity-90 hover:opacity-100 text-[11px] font-medium text-charcoal hover:text-olive-deep bg-cream-surface hover:bg-sage-200/80 border border-sage-300 px-2.5 py-1 rounded-full transition flex items-center gap-1 shrink-0 self-start sm:self-center shadow-xs cursor-pointer"
                            title={`Record study session in ${studyContext === STUDY_CONTEXTS.HOME ? 'Home' : 'College'}`}
                          >
                            <Plus className="w-3 h-3 stroke-[2]" />
                            <span className="hidden sm:inline">Study Again</span>
                            <span className="sm:hidden">Study</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              /* Normal Chapter Topics Checklist (Study topics in ANY order) */
              <div>
                <div className="flex items-center justify-between text-xs text-charcoal-muted font-normal mb-1.5 px-0.5">
                  <span>Topics in Chapter ({topicsForChapter.length})</span>
                  <span>Tap checkbox to mark complete · Free study order</span>
                </div>

                <div className="divide-y divide-sage-200/80">
                  {topicsForChapter.length === 0 ? (
                    <div className="py-6 text-center text-xs text-charcoal-muted font-normal">
                      No topics found for this chapter.
                    </div>
                  ) : (
                    topicsForChapter.map((topic, index) => {
                      const completionRecord = topicCompletions[topic.id];
                      const isCompleted = Boolean(completionRecord?.completed);

                      return (
                        <div
                          key={topic.id}
                          onClick={() => onToggleTopic(topic.id)}
                          className={`py-3 px-2 flex items-start gap-3 rounded-2xl transition cursor-pointer select-none min-h-[46px] ${
                            isCompleted ? 'bg-sage-100/50' : 'hover:bg-sage-100/30'
                          }`}
                        >
                          {/* Circular Topic Checkbox */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleTopic(topic.id);
                            }}
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all min-w-[20px] min-h-[20px] cursor-pointer ${
                              isCompleted
                                ? 'bg-olive-card text-white ring-2 ring-olive-subtle/30'
                                : 'border-2 border-sage-400 bg-white hover:border-olive-card'
                            }`}
                            data-topic-id={topic.id}
                            aria-label={isCompleted ? `Uncheck topic ${topic.id}` : `Check topic ${topic.id}`}
                          >
                            {isCompleted && <Check className="w-3 h-3 stroke-[3]" />}
                          </button>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                              <span className="text-xs font-mono text-charcoal-muted font-normal">
                                #{index + 1}
                              </span>
                              {isCompleted && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-normal text-charcoal-muted bg-sage-100/90 px-2 py-0.5 rounded-full border border-sage-200/80">
                                  <CheckCircle2 className="w-3 h-3 text-olive-card" />
                                  <span>
                                    Done {completionRecord.lastStudiedDate ? `(${formatDisplayDate(completionRecord.lastStudiedDate)})` : ''}
                                  </span>
                                  {completionRecord.studyCount > 1 && (
                                    <span className="opacity-75 font-mono">×{completionRecord.studyCount}</span>
                                  )}
                                </span>
                              )}
                            </div>

                            <p className="text-xs sm:text-sm leading-relaxed text-charcoal font-normal">
                              {topic.name}
                            </p>

                            {/* Cross-context indicator badges */}
                            {renderTopicContextBadges(topic.id)}
                          </div>

                          {/* Action: Study Again */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenStudyAgain(topic);
                            }}
                            className="opacity-90 hover:opacity-100 text-[11px] font-medium text-charcoal hover:text-olive-deep bg-cream-surface hover:bg-sage-200/80 border border-sage-300 px-2.5 py-1 rounded-full transition flex items-center gap-1 shrink-0 self-start sm:self-center shadow-xs cursor-pointer"
                            title={`Record study session in ${studyContext === STUDY_CONTEXTS.HOME ? 'Home' : 'College'}`}
                          >
                            <Plus className="w-3 h-3 stroke-[2]" />
                            <span className="hidden sm:inline">Study Again</span>
                            <span className="sm:hidden">Study</span>
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {/* Notes & Save Study Log Session */}
            <div className="mt-4 pt-4 border-t border-sage-200 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-charcoal-muted uppercase mb-1">
                  Study Notes (Optional)
                </label>
                <input
                  type="text"
                  value={studyNotes}
                  onChange={(e) => setStudyNotes(e.target.value)}
                  placeholder="e.g. বোর্ড প্রশ্ন সমাধান করেছি, থিওরি রিভিশন দিয়েছি..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-2xl bg-sage-100/70 border border-sage-300 focus:outline-none focus:border-olive-card text-charcoal placeholder:text-charcoal-muted font-medium"
                />
              </div>

              <button
                type="button"
                onClick={handleSaveLog}
                className="w-full py-3.5 px-4 rounded-full bg-charcoal hover:bg-black active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-soft flex items-center justify-center gap-2 transition min-h-[46px]"
              >
                {studyContext === STUDY_CONTEXTS.HOME ? (
                  <Home className="w-4 h-4 text-mustard-card" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-mustard-card" />
                )}
                <span>
                  Save Study Log in {studyContext === STUDY_CONTEXTS.HOME ? 'Home' : 'College'} (পড়া সংরক্ষণ করুন)
                </span>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-mono">
                  {chProgress.completed} Done in Ch {selectedChapter?.chapterNumber || ''}
                </span>
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          SHARED MODAL 1: STUDY TOPIC AGAIN MODAL
          ========================================================================= */}
      {studyAgainTopic && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="study-again-modal-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-cream-surface w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden animate-in slide-in-from-bottom duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-olive-light text-olive-deep flex items-center justify-center">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <h2 id="study-again-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
                    Log Study Session
                  </h2>
                  <p className="text-xs text-charcoal-muted font-medium">Record repeated study in College or Home</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStudyAgainTopic(null)}
                className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-200/60 rounded-full transition min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleConfirmStudyAgain} className="p-5 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                  Topic
                </span>
                <p className="text-sm font-bold text-charcoal leading-snug">
                  {studyAgainTopic.name}
                </p>
              </div>

              {/* Context Selector */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1.5">
                  Study Context
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setStudyAgainContext(STUDY_CONTEXTS.COLLEGE)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      studyAgainContext === STUDY_CONTEXTS.COLLEGE
                        ? 'bg-charcoal text-cream-surface border-charcoal shadow-soft'
                        : 'bg-cream-surface/90 text-charcoal border-sage-300 hover:border-olive-card'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>College</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStudyAgainContext(STUDY_CONTEXTS.HOME)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      studyAgainContext === STUDY_CONTEXTS.HOME
                        ? 'bg-charcoal text-cream-surface border-charcoal shadow-soft'
                        : 'bg-cream-surface/90 text-charcoal border-sage-300 hover:border-olive-card'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </button>
                </div>
              </div>

              {/* Study Notes */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-1">
                  Session Notes (Optional)
                </label>
                <input
                  type="text"
                  value={studyAgainNotes}
                  onChange={(e) => setStudyAgainNotes(e.target.value)}
                  placeholder="e.g. Practiced problem set, revised formulas..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-sage-100/70 border border-sage-300 focus:outline-none focus:border-olive-card text-charcoal placeholder:text-charcoal-muted font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-sage-200">
                <button
                  type="button"
                  onClick={() => setStudyAgainTopic(null)}
                  className="px-4 py-2 text-xs font-bold text-charcoal hover:bg-sage-200/60 rounded-full transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-charcoal hover:bg-black text-white text-xs font-bold rounded-full transition shadow-soft flex items-center gap-1.5"
                >
                  {studyAgainContext === STUDY_CONTEXTS.HOME ? (
                    <Home className="w-3.5 h-3.5 text-mustard-card" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 text-mustard-card" />
                  )}
                  <span>
                    Save Session in {studyAgainContext === STUDY_CONTEXTS.HOME ? 'Home' : 'College'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          SHARED MODAL 2: TOPIC STUDY HISTORY MODAL
          ========================================================================= */}
      {historyTopic && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="topic-history-modal-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-cream-surface w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden animate-in slide-in-from-bottom duration-200 max-h-[85vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-olive-light text-olive-deep flex items-center justify-center">
                  <History className="w-4 h-4" />
                </div>
                <div>
                  <h2 id="topic-history-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
                    Topic Study History
                  </h2>
                  <p className="text-xs text-charcoal-muted font-medium">Cross-context sessions and notes</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setHistoryTopic(null)}
                className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-200/60 rounded-full transition min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 overflow-y-auto flex-1">
              {/* Topic info */}
              <div>
                <p className="text-sm font-bold text-charcoal leading-snug">
                  {historyTopic.name}
                </p>
                <span className="text-xs text-charcoal-muted font-medium mt-0.5 block">
                  Status: {topicCompletions[historyTopic.id]?.completed ? '✓ Completed in Syllabus' : 'Unfinished / In Progress'}
                </span>
              </div>

              {/* Metric Breakdown */}
              {(() => {
                const ctx = topicsContextMap[historyTopic.id] || { collegeCount: 0, homeCount: 0, totalSessions: 0 };
                return (
                  <div className="grid grid-cols-3 gap-2 p-3 bg-sage-100/70 rounded-2xl border border-sage-200 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-charcoal-muted block">College</span>
                      <span className="text-base font-bold text-olive-card">{ctx.collegeCount}×</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-charcoal-muted block">Home</span>
                      <span className="text-base font-bold text-charcoal">{ctx.homeCount}×</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-charcoal-muted block">Total</span>
                      <span className="text-base font-bold text-olive-deep">{ctx.totalSessions}×</span>
                    </div>
                  </div>
                );
              })()}

              {/* Sessions list */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted block mb-2">
                  Session Log Timeline
                </span>
                {(() => {
                  const ctx = topicsContextMap[historyTopic.id];
                  const historyList = ctx?.history || [];

                  if (historyList.length === 0) {
                    return (
                      <p className="text-xs text-charcoal-muted italic py-3 text-center">
                        No session records found for this topic yet.
                      </p>
                    );
                  }

                  return (
                    <div className="space-y-2">
                      {historyList.map((log) => {
                        const isCollege = log.context === STUDY_CONTEXTS.COLLEGE;
                        const isHome = log.context === STUDY_CONTEXTS.HOME;

                        return (
                          <div
                            key={log.id}
                            className="p-3 bg-cream-card rounded-xl border border-sage-200/80 space-y-1"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-charcoal">
                                {formatDisplayDate(log.date)}
                              </span>
                              <span
                                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isCollege
                                    ? 'bg-olive-light text-olive-deep'
                                    : isHome
                                    ? 'bg-sage-200 text-charcoal'
                                    : 'bg-sage-100 text-charcoal-muted'
                                }`}
                              >
                                {isCollege ? (
                                  <>
                                    <GraduationCap className="w-3 h-3 text-olive-card" /> College
                                  </>
                                ) : isHome ? (
                                  <>
                                    <Home className="w-3 h-3 text-charcoal" /> Home
                                  </>
                                ) : (
                                  'Unknown'
                                )}
                              </span>
                            </div>

                            {log.notes && (
                              <p className="text-[11px] text-charcoal-muted italic">
                                "{log.notes}"
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Footer action */}
            <div className="p-4 border-t border-sage-200 bg-cream-card flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={() => setHistoryTopic(null)}
                className="px-4 py-2 text-xs font-bold text-charcoal hover:bg-sage-200/60 rounded-full transition"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  const t = historyTopic;
                  setHistoryTopic(null);
                  handleOpenStudyAgain(t);
                }}
                className="px-4 py-2 bg-charcoal hover:bg-black text-white text-xs font-bold rounded-full transition shadow-soft flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Study Again</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
