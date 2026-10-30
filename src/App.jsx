import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header.jsx';
import GlobalHeader from './components/GlobalHeader.jsx';
import InitialModeSelector from './components/InitialModeSelector.jsx';
import DailySummary from './components/DailySummary.jsx';
import UpcomingSessionCard from './components/UpcomingSessionCard.jsx';
import SessionTimeline from './components/SessionTimeline.jsx';
import WeeklyView from './components/WeeklyView.jsx';
import SessionFormModal from './components/SessionFormModal.jsx';
import CompleteSessionModal from './components/CompleteSessionModal.jsx';
import RescheduleModal from './components/RescheduleModal.jsx';
import SessionDetailModal from './components/SessionDetailModal.jsx';
import WeeklyTemplateModal from './components/WeeklyTemplateModal.jsx';
import TargetConfigModal from './components/TargetConfigModal.jsx';
import DeleteConfirmModal from './components/DeleteConfirmModal.jsx';
import BottomNav from './components/BottomNav.jsx';
import Toast from './components/Toast.jsx';
import HomeOverview from './components/HomeOverview.jsx';
import SyllabusStudyLogger from './components/SyllabusStudyLogger.jsx';
import ProgressView from './components/ProgressView.jsx';
import { getTopicById } from './data/sampleHscSyllabus.js';

import {
  loadSessions,
  saveSessions,
  loadTemplates,
  saveTemplates,
  loadPreferences,
  savePreferences,
  loadModeCompletions,
  saveModeCompletions,
  loadTopicCompletions,
  loadStudyLogs,
  recordStudyLog,
  toggleSingleTopic,
  calculateSyllabusProgress,
  calculateCombinedProgress,
  loadSelectedStudyContext,
  saveSelectedStudyContext,
  recordTopicStudySession,
  STUDY_CONTEXTS,
  STUDY_CONTEXT_LABELS,
} from './services/storageService.js';
import {
  getTodayDateString,
  isSessionOverdue,
  formatDisplayDate,
  formatDisplayTime,
} from './utils/timeUtils.js';

export default function App() {
  // Primary State
  const [sessions, setSessions] = useState(() => loadSessions());
  const [templates, setTemplates] = useState(() => loadTemplates());
  const [preferences, setPreferences] = useState(() => loadPreferences());
  const [modeCompletions, setModeCompletions] = useState(() => loadModeCompletions());
  const [studyLogs, setStudyLogs] = useState(() => loadStudyLogs());
  // Global Study Mode: 'college' | 'home' | null (null triggers InitialModeSelector)
  const [studyMode, setStudyMode] = useState(() => loadSelectedStudyContext());

  // Navigation & View State
  const [activeNav, setActiveNav] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab && ['home', 'syllabus', 'routine', 'progress'].includes(tab)) return tab;
    }
    return 'home';
  });
  const [viewMode, setViewMode] = useState('today');
  const [selectedDate, setSelectedDate] = useState(() => getTodayDateString());
  const [selectedSubjectForLogger, setSelectedSubjectForLogger] = useState(null);
  const [selectedChapterForLogger, setSelectedChapterForLogger] = useState(null);

  // Active mode's topic completions map
  const activeModeCompletions = useMemo(
    () => (studyMode ? modeCompletions[studyMode] || {} : {}),
    [modeCompletions, studyMode]
  );

  // Authoritative Independent Progress Calculations
  const collegeProgress = useMemo(
    () => calculateSyllabusProgress(modeCompletions.college),
    [modeCompletions.college]
  );

  const homeProgress = useMemo(
    () => calculateSyllabusProgress(modeCompletions.home),
    [modeCompletions.home]
  );

  const combinedProgress = useMemo(
    () => calculateCombinedProgress(modeCompletions),
    [modeCompletions]
  );

  // Active Syllabus Progress reflects the currently selected mode
  const syllabusProgress = useMemo(
    () => (studyMode === STUDY_CONTEXTS.HOME ? homeProgress : collegeProgress),
    [studyMode, homeProgress, collegeProgress]
  );

  // Modal Dialogs State
  const [sessionFormState, setSessionFormState] = useState({
    isOpen: false,
    initialSession: null,
    initialDate: null,
  });

  const [completeModalState, setCompleteModalState] = useState({
    isOpen: false,
    session: null,
  });

  const [rescheduleModalState, setRescheduleModalState] = useState({
    isOpen: false,
    session: null,
  });

  const [detailModalState, setDetailModalState] = useState({
    isOpen: false,
    session: null,
  });

  const [deleteModalState, setDeleteModalState] = useState({
    isOpen: false,
    session: null,
  });

  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);

  // Toast feedback state
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Rule-based Smart Missed-Session Detection:
  // Check on mount and periodically if any session is past its end time and remains incomplete
  useEffect(() => {
    let hasUpdates = false;
    const now = new Date();

    const updated = sessions.map((sess) => {
      if (sess.status === 'upcoming' && isSessionOverdue(sess, now)) {
        hasUpdates = true;
        return {
          ...sess,
          status: 'needs_attention',
          updatedAt: new Date().toISOString(),
        };
      }
      return sess;
    });

    if (hasUpdates) {
      setSessions(updated);
      saveSessions(updated);
    }
  }, [sessions]);

  // Filter sessions for the currently selected date
  const sessionsForSelectedDay = useMemo(() => {
    return sessions.filter((s) => s.date === selectedDate);
  }, [sessions, selectedDate]);

  // ---------------- Handlers ----------------

  // Save (Create or Edit) Session
  const handleSaveSession = (sessionData) => {
    const existingIndex = sessions.findIndex((s) => s.id === sessionData.id);
    let newSessions;
    if (existingIndex >= 0) {
      newSessions = [...sessions];
      newSessions[existingIndex] = sessionData;
      showToast('Session updated successfully.');
    } else {
      newSessions = [sessionData, ...sessions];
      showToast('New study session scheduled.');
    }

    setSessions(newSessions);
    saveSessions(newSessions);
  };

  // Quick Complete (opens modal for actual duration input)
  const handleOpenCompleteModal = (session) => {
    setCompleteModalState({ isOpen: true, session });
  };

  // Confirm Complete with actual duration
  const handleConfirmComplete = (session, actualMinutes, notes) => {
    const updated = sessions.map((s) => {
      if (s.id === session.id) {
        return {
          ...s,
          status: 'completed',
          actualDurationMinutes: Number(actualMinutes),
          notes: notes ? notes.trim() : s.notes,
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    });

    setSessions(updated);
    saveSessions(updated);
    showToast(`Completed! Recorded ${actualMinutes}m study time.`);
  };

  // Undo accidental completion
  const handleUndoComplete = (session) => {
    const updated = sessions.map((s) => {
      if (s.id === session.id) {
        return {
          ...s,
          status: 'upcoming',
          actualDurationMinutes: 0,
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    });

    setSessions(updated);
    saveSessions(updated);
    showToast('Session reverted to upcoming status.');
  };

  // Open Reschedule Modal
  const handleOpenRescheduleModal = (session) => {
    setRescheduleModalState({ isOpen: true, session });
  };

  // Confirm Reschedule with history tracking
  const handleConfirmReschedule = (session, newDate, newStartTime, reason) => {
    const historyItem = {
      previousDate: session.date,
      previousStartTime: session.startTime,
      rescheduledAt: new Date().toISOString(),
      reason: reason || 'Rescheduled by student',
    };

    const updated = sessions.map((s) => {
      if (s.id === session.id) {
        return {
          ...s,
          date: newDate,
          startTime: newStartTime,
          status: 'upcoming',
          rescheduleHistory: [...(s.rescheduleHistory || []), historyItem],
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    });

    setSessions(updated);
    saveSessions(updated);
    showToast(
      `Session rescheduled to ${formatDisplayDate(newDate)} at ${formatDisplayTime(newStartTime)}`
    );
  };

  // Open Delete Confirmation Modal
  const handleOpenDeleteModal = (session) => {
    setDeleteModalState({ isOpen: true, session });
  };

  // Confirm Delete
  const handleConfirmDelete = (session) => {
    const updated = sessions.filter((s) => s.id !== session.id);
    setSessions(updated);
    saveSessions(updated);
    showToast('Study session deleted.');
  };

  // Open Edit Form
  const handleOpenEditSession = (session) => {
    setSessionFormState({
      isOpen: true,
      initialSession: session,
      initialDate: session.date,
    });
  };

  // Open Add Session Form
  const handleOpenAddSession = () => {
    setSessionFormState({
      isOpen: true,
      initialSession: null,
      initialDate: selectedDate,
    });
  };

  // Open Details Modal
  const handleOpenDetails = (session) => {
    setDetailModalState({ isOpen: true, session });
  };

  // Save Templates
  const handleSaveTemplates = (newTemplates) => {
    setTemplates(newTemplates);
    saveTemplates(newTemplates);
    showToast('Routine template saved.');
  };

  // Apply Template to Week (Duplicate prevention & preservation of historical sessions)
  const handleApplyTemplateToWeek = (weekDays) => {
    const newSessionsToAppend = [];
    let addedCount = 0;

    templates.forEach((tpl) => {
      const targetDay = weekDays.find((d) => d.dayName === tpl.weekday);
      if (!targetDay) return;

      const dateStr = targetDay.dateStr;

      // Duplicate prevention: check if session already exists for this subject, date, and startTime
      const isDuplicate = sessions.some(
        (s) =>
          s.date === dateStr &&
          s.subjectId === tpl.subjectId &&
          s.startTime === tpl.startTime &&
          s.plannedDurationMinutes === tpl.plannedDurationMinutes
      );

      if (!isDuplicate) {
        newSessionsToAppend.push({
          id: `sess-tpl-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          subjectId: tpl.subjectId,
          chapterId: tpl.chapterId,
          topicId: tpl.topicId,
          date: dateStr,
          startTime: tpl.startTime,
          plannedDurationMinutes: tpl.plannedDurationMinutes,
          actualDurationMinutes: 0,
          status: 'upcoming',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          rescheduleHistory: [],
          notes: 'Generated from weekly template routine',
        });
        addedCount++;
      }
    });

    if (addedCount > 0) {
      const merged = [...sessions, ...newSessionsToAppend];
      setSessions(merged);
      saveSessions(merged);
      showToast(`Applied template: ${addedCount} sessions scheduled for this week.`);
    } else {
      showToast('All template sessions were already scheduled.', 'warning');
    }
  };

  // Save Preferences (Daily target & Buffer)
  const handleSavePreferences = (newPrefs) => {
    setPreferences(newPrefs);
    savePreferences(newPrefs);
    showToast('Study preferences updated.');
  };

  // Global Mode change handler (College vs Home)
  const handleModeChange = (nextMode) => {
    if (nextMode === STUDY_CONTEXTS.COLLEGE || nextMode === STUDY_CONTEXTS.HOME) {
      setStudyMode(nextMode);
      saveSelectedStudyContext(nextMode);
      const modeLabel = nextMode === STUDY_CONTEXTS.COLLEGE ? 'College' : 'Home';
      showToast(`Switched to ${modeLabel} Mode.`);
    }
  };

  // Study log recording handler
  const handleRecordStudyLog = ({ subjectId, chapterId, topicIds, notes, dateStr, context }) => {
    const effectiveContext = context || studyMode;
    const result = recordStudyLog({
      subjectId,
      chapterId,
      topicIds,
      notes,
      dateStr,
      context: effectiveContext,
    });
    if (result.updatedModeCompletions) {
      setModeCompletions(result.updatedModeCompletions);
    }
    if (result.nextLogs) {
      setStudyLogs(result.nextLogs);
    }
    const contextLabel = STUDY_CONTEXT_LABELS[effectiveContext] || 'Study';
    showToast(`Saved ${contextLabel} log: ${topicIds.length} topics recorded.`);
  };

  // Single topic toggle handler (operates strictly on active studyMode)
  const handleToggleSingleTopic = (topicId) => {
    const result = toggleSingleTopic(topicId, undefined, undefined, studyMode);
    if (result.updatedModeCompletions) {
      setModeCompletions(result.updatedModeCompletions);
    }
    if (result.nextLogs) {
      setStudyLogs(result.nextLogs);
    }
    const isCompleted = result.isCompleted;
    const topic = getTopicById(topicId);
    const topicTitle = topic ? topic.name.split(' (')[0] : 'Topic';
    const modeLabel = studyMode === STUDY_CONTEXTS.COLLEGE ? 'College' : 'Home';
    showToast(isCompleted ? `[${modeLabel}] Completed: ${topicTitle}` : `[${modeLabel}] Unmarked: ${topicTitle}`);
  };

  // Dedicated repeated topic study session handler
  const handleRecordTopicStudySession = ({ topicId, notes, dateStr, context }) => {
    const effectiveContext = context || studyMode;
    const result = recordTopicStudySession({
      topicId,
      notes,
      dateStr,
      context: effectiveContext,
    });
    if (result.updatedModeCompletions) {
      setModeCompletions(result.updatedModeCompletions);
    }
    if (result.nextLogs) {
      setStudyLogs(result.nextLogs);
    }
    const topic = getTopicById(topicId);
    const topicTitle = topic ? topic.name.split(' (')[0] : 'Topic';
    const contextLabel = STUDY_CONTEXT_LABELS[effectiveContext] || 'Study';
    showToast(`Logged session in ${contextLabel}: ${topicTitle}`);
  };

  // Bottom navigation tap
  const handleNavChange = (navId) => {
    setActiveNav(navId);
    if (navId === 'syllabus' && activeNav === 'syllabus') {
      setSelectedSubjectForLogger(null);
      setSelectedChapterForLogger(null);
    }
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', navId);
      if (navId !== 'syllabus') {
        url.searchParams.delete('subject');
        url.searchParams.delete('paper');
        url.searchParams.delete('chapter');
      }
      window.history.replaceState({}, '', url);
    }
  };

  // 1. Initial Mode Selection Gate: shown on first launch if no mode is chosen yet
  if (!studyMode) {
    return (
      <div className="min-h-screen bg-sage-page text-charcoal font-sans selection:bg-olive-light selection:text-olive-deep">
        <Toast toast={toast} onClose={() => setToast(null)} />
        <InitialModeSelector
          onSelectMode={(selectedMode) => {
            setStudyMode(selectedMode);
            saveSelectedStudyContext(selectedMode);
            const modeLabel = selectedMode === STUDY_CONTEXTS.COLLEGE ? 'College' : 'Home';
            showToast(`Started in ${modeLabel} Mode.`);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sage-page text-charcoal font-sans pb-28 selection:bg-olive-light selection:text-olive-deep">
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Persistent Global Application Header with Mode Indicator & Quick Switcher */}
      <GlobalHeader
        currentMode={studyMode}
        onModeChange={handleModeChange}
        activeNav={activeNav}
      />

      {/* Routine Sticky Header (Only visible on Routine tab) */}
      {activeNav === 'routine' && (
        <Header
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onOpenAddSession={handleOpenAddSession}
        />
      )}

      {/* Main Content Area: Mobile-first with comfortable tablet/desktop breathing room */}
      <main className="max-w-md sm:max-w-xl lg:max-w-3xl mx-auto px-4 sm:px-6 py-4 space-y-4">
        {/* 1. HOME VIEW */}
        {activeNav === 'home' && (
          <HomeOverview
            currentMode={studyMode}
            onModeChange={handleModeChange}
            syllabusProgress={syllabusProgress}
            collegeProgress={collegeProgress}
            homeProgress={homeProgress}
            combinedProgress={combinedProgress}
            studyLogs={studyLogs}
            topicCompletions={activeModeCompletions}
            modeCompletions={modeCompletions}
            preferences={preferences}
            sessions={sessions}
            onNavigate={setActiveNav}
            onSelectSubjectForLog={(subId, chId) => {
              setSelectedSubjectForLogger(subId);
              setSelectedChapterForLogger(chId || null);
            }}
          />
        )}

        {/* 2. SYLLABUS STUDY LOGGER VIEW */}
        {activeNav === 'syllabus' && (
          <SyllabusStudyLogger
            currentMode={studyMode}
            studyContext={studyMode}
            onContextChange={handleModeChange}
            topicCompletions={activeModeCompletions}
            modeCompletions={modeCompletions}
            studyLogs={studyLogs}
            onRecordStudyLog={handleRecordStudyLog}
            onToggleTopic={handleToggleSingleTopic}
            onRecordTopicStudySession={handleRecordTopicStudySession}
            syllabusProgress={syllabusProgress}
            collegeProgress={collegeProgress}
            homeProgress={homeProgress}
            combinedProgress={combinedProgress}
            initialSubjectId={selectedSubjectForLogger}
            initialChapterId={selectedChapterForLogger}
          />
        )}

        {/* 3. ROUTINE VIEW */}
        {activeNav === 'routine' && (
          viewMode === 'today' ? (
            <>
              {/* Daily Study Summary */}
              <DailySummary
                sessionsForDay={sessionsForSelectedDay}
                preferences={preferences}
                onOpenTargetSettings={() => setIsTargetModalOpen(true)}
              />

              {/* Upcoming Session Card */}
              <UpcomingSessionCard
                sessionsForDay={sessionsForSelectedDay}
                selectedDate={selectedDate}
                onOpenDetails={handleOpenDetails}
                onQuickComplete={handleOpenCompleteModal}
                onOpenAddSession={handleOpenAddSession}
              />

              {/* Today's Session Timeline */}
              <SessionTimeline
                sessionsForDay={sessionsForSelectedDay}
                selectedDate={selectedDate}
                onOpenDetails={handleOpenDetails}
                onQuickComplete={handleOpenCompleteModal}
                onEdit={handleOpenEditSession}
                onReschedule={handleOpenRescheduleModal}
                onDelete={handleOpenDeleteModal}
                onUndoComplete={handleUndoComplete}
                onOpenAddSession={handleOpenAddSession}
              />
            </>
          ) : (
            /* Weekly Planning View */
            <WeeklyView
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              allSessions={sessions}
              preferences={preferences}
              onOpenAddSession={handleOpenAddSession}
              onOpenTemplateModal={() => setIsTemplateModalOpen(true)}
              onOpenDetails={handleOpenDetails}
              onQuickComplete={handleOpenCompleteModal}
              onEdit={handleOpenEditSession}
              onReschedule={handleOpenRescheduleModal}
              onDelete={handleOpenDeleteModal}
              onUndoComplete={handleUndoComplete}
              onOpenTargetSettings={() => setIsTargetModalOpen(true)}
            />
          )
        )}

        {/* 4. PROGRESS & STUDY HISTORY VIEW */}
        {activeNav === 'progress' && (
          <ProgressView
            currentMode={studyMode}
            onModeChange={handleModeChange}
            syllabusProgress={syllabusProgress}
            collegeProgress={collegeProgress}
            homeProgress={homeProgress}
            combinedProgress={combinedProgress}
            studyLogs={studyLogs}
            topicCompletions={activeModeCompletions}
            modeCompletions={modeCompletions}
            onNavigate={setActiveNav}
            onSelectSubjectForLog={(subId, chId) => {
              setSelectedSubjectForLogger(subId);
              setSelectedChapterForLogger(chId || null);
            }}
          />
        )}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav activeNav={activeNav} onNavChange={handleNavChange} />

      {/* --- Modals & Sheets --- */}

      {/* Create / Edit Session Modal */}
      <SessionFormModal
        isOpen={sessionFormState.isOpen}
        onClose={() => setSessionFormState({ isOpen: false, initialSession: null, initialDate: null })}
        onSave={handleSaveSession}
        initialSession={sessionFormState.initialSession}
        initialDate={sessionFormState.initialDate}
        allSessions={sessions}
      />

      {/* Complete Session Modal (Actual Duration Input) */}
      <CompleteSessionModal
        isOpen={completeModalState.isOpen}
        onClose={() => setCompleteModalState({ isOpen: false, session: null })}
        session={completeModalState.session}
        onConfirmComplete={handleConfirmComplete}
      />

      {/* Reschedule Modal (Smart Free Slots Recovery) */}
      <RescheduleModal
        isOpen={rescheduleModalState.isOpen}
        onClose={() => setRescheduleModalState({ isOpen: false, session: null })}
        session={rescheduleModalState.session}
        allSessions={sessions}
        preferences={preferences}
        onConfirmReschedule={handleConfirmReschedule}
      />

      {/* Session Details Modal */}
      <SessionDetailModal
        isOpen={detailModalState.isOpen}
        onClose={() => setDetailModalState({ isOpen: false, session: null })}
        session={detailModalState.session}
        onEdit={handleOpenEditSession}
        onReschedule={handleOpenRescheduleModal}
        onQuickComplete={handleOpenCompleteModal}
        onUndoComplete={handleUndoComplete}
        onDelete={handleOpenDeleteModal}
      />

      {/* Weekly Routine Template Modal */}
      <WeeklyTemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        templates={templates}
        onSaveTemplates={handleSaveTemplates}
        onApplyTemplateToWeek={handleApplyTemplateToWeek}
        selectedDate={selectedDate}
        allSessions={sessions}
      />

      {/* Target & Buffer Configuration Modal */}
      <TargetConfigModal
        isOpen={isTargetModalOpen}
        onClose={() => setIsTargetModalOpen(false)}
        preferences={preferences}
        onSavePreferences={handleSavePreferences}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={deleteModalState.isOpen}
        onClose={() => setDeleteModalState({ isOpen: false, session: null })}
        session={deleteModalState.session}
        onConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
}