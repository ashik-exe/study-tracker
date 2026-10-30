import { getTodayDateString, getWeekDates, shiftDate } from '../utils/timeUtils.js';
import { SAMPLE_SUBJECTS, SAMPLE_CHAPTERS, SAMPLE_TOPICS, HSC_SUBJECTS } from '../data/sampleHscSyllabus.js';

const STORAGE_KEYS = {
  SESSIONS: 'hsc_study_sessions_v2',
  TEMPLATES: 'hsc_study_templates_v2',
  PREFERENCES: 'hsc_study_preferences_v2',
  COMPLETIONS: 'hsc_topic_completions_v1',
  STUDY_LOGS: 'hsc_study_logs_v1',
  STUDY_CONTEXT: 'hsc_selected_study_context_v1',
  MODE_COMPLETIONS: 'hsc_mode_completions_v2',
};

export const STUDY_CONTEXTS = {
  COLLEGE: 'college',
  HOME: 'home',
  UNKNOWN: 'unknown',
};

export const STUDY_CONTEXT_LABELS = {
  college: 'College',
  home: 'Home',
  unknown: 'Unknown',
};

export const DEFAULT_PREFERENCES = {
  dailyStudyTargetMinutes: 240, // 4 hours
  preferredBufferMinutes: 15,
};

/**
 * Creates seed data for a fresh installation
 */
export function getInitialSeedData() {
  const today = getTodayDateString();
  const yesterday = shiftDate(today, -1);
  const tomorrow = shiftDate(today, 1);

  // Independent Mode-partitioned topic completions:
  // College and Home maintain completely separate completions over the shared syllabus.
  const initialModeCompletions = {
    [STUDY_CONTEXTS.COLLEGE]: {
      'top-phy-2-1': {
        completed: true,
        firstCompletedDate: yesterday,
        lastStudiedDate: yesterday,
        studyCount: 1,
      },
      'top-phy-2-2': {
        completed: true,
        firstCompletedDate: today,
        lastStudiedDate: today,
        studyCount: 1,
      },
    },
    [STUDY_CONTEXTS.HOME]: {
      'top-math-9-1': {
        completed: true,
        firstCompletedDate: yesterday,
        lastStudiedDate: yesterday,
        studyCount: 1,
      },
      'top-math-9-2': {
        completed: true,
        firstCompletedDate: today,
        lastStudiedDate: today,
        studyCount: 1,
      },
    },
    legacy: {},
  };

  // Legacy flat mapping preserved for backwards compatibility
  const initialCompletions = {
    ...initialModeCompletions[STUDY_CONTEXTS.COLLEGE],
    ...initialModeCompletions[STUDY_CONTEXTS.HOME],
  };

  // Initial date-based study activity logs with study context
  const initialStudyLogs = [
    {
      id: 'log-seed-1',
      date: yesterday,
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      context: STUDY_CONTEXTS.COLLEGE,
      subjectId: 'sub-phy-1',
      chapterId: 'ch-phy-2',
      topicIds: ['top-phy-2-1'],
      notes: 'Understood vector addition and triangle law proofs.',
    },
    {
      id: 'log-seed-2',
      date: yesterday,
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      context: STUDY_CONTEXTS.HOME,
      subjectId: 'sub-math-1',
      chapterId: 'ch-math-9',
      topicIds: ['top-math-9-1'],
      notes: 'Practiced basic differentiation limits from exercise 9.1.',
    },
    {
      id: 'log-seed-3',
      date: today,
      timestamp: new Date().toISOString(),
      context: STUDY_CONTEXTS.COLLEGE,
      subjectId: 'sub-phy-1',
      chapterId: 'ch-phy-2',
      topicIds: ['top-phy-2-2'],
      notes: 'Mastered dot product and cross product properties.',
    },
    {
      id: 'log-seed-4',
      date: today,
      timestamp: new Date().toISOString(),
      context: STUDY_CONTEXTS.HOME,
      subjectId: 'sub-math-1',
      chapterId: 'ch-math-9',
      topicIds: ['top-math-9-2'],
      notes: 'Solved parametric differentiation problems.',
    },
  ];

  const initialSessions = [
    {
      id: 'sess-seed-1',
      subjectId: 'sub-phy-1',
      chapterId: 'ch-phy-2',
      topicId: 'top-phy-2-2',
      date: today,
      startTime: '08:00',
      plannedDurationMinutes: 90,
      actualDurationMinutes: 90,
      status: 'completed',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rescheduleHistory: [],
      notes: 'Solved 15 vector dot/cross product mathematical problems from textbook.',
    },
    {
      id: 'sess-seed-2',
      subjectId: 'sub-math-1',
      chapterId: 'ch-math-9',
      topicId: 'top-math-9-2',
      date: today,
      startTime: '10:30',
      plannedDurationMinutes: 60,
      actualDurationMinutes: 60,
      status: 'completed',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rescheduleHistory: [],
      notes: 'Parametric differentiation formulas and exercise 9.3.',
    },
    {
      id: 'sess-seed-3',
      subjectId: 'sub-chem-1',
      chapterId: 'ch-chem-4',
      topicId: 'top-chem-4-3',
      date: today,
      startTime: '15:30',
      plannedDurationMinutes: 60,
      actualDurationMinutes: 0,
      status: 'upcoming',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rescheduleHistory: [],
      notes: 'Industrial Haber process conditions and equilibrium shift.',
    },
    {
      id: 'sess-seed-4',
      subjectId: 'sub-ict',
      chapterId: 'ch-ict-5',
      topicId: 'top-ict-5-3',
      date: today,
      startTime: '19:30',
      plannedDurationMinutes: 45,
      actualDurationMinutes: 0,
      status: 'upcoming',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rescheduleHistory: [],
      notes: 'Nested loops pattern printing in C.',
    },
    {
      id: 'sess-seed-5',
      subjectId: 'sub-bio-1',
      chapterId: 'ch-bio-1',
      topicId: 'top-bio-1-1',
      date: yesterday,
      startTime: '16:00',
      plannedDurationMinutes: 60,
      actualDurationMinutes: 0,
      status: 'needs_attention',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
      rescheduleHistory: [],
      notes: 'Fluid mosaic diagram drawing and lipid bilayer structure.',
    },
    {
      id: 'sess-seed-6',
      subjectId: 'sub-phy-1',
      chapterId: 'ch-phy-4',
      topicId: 'top-phy-4-2',
      date: tomorrow,
      startTime: '09:00',
      plannedDurationMinutes: 90,
      actualDurationMinutes: 0,
      status: 'upcoming',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rescheduleHistory: [],
      notes: 'Road banking derivation and critical angle calculation.',
    },
  ];

  const initialTemplates = [
    {
      id: 'tpl-1',
      weekday: 'Sat',
      subjectId: 'sub-phy-1',
      chapterId: 'ch-phy-2',
      topicId: 'top-phy-2-1',
      startTime: '08:30',
      plannedDurationMinutes: 90,
    },
    {
      id: 'tpl-2',
      weekday: 'Sat',
      subjectId: 'sub-math-1',
      chapterId: 'ch-math-1',
      topicId: 'top-math-1-1',
      startTime: '11:00',
      plannedDurationMinutes: 60,
    },
    {
      id: 'tpl-3',
      weekday: 'Sun',
      subjectId: 'sub-chem-1',
      chapterId: 'ch-chem-2',
      topicId: 'top-chem-2-1',
      startTime: '09:00',
      plannedDurationMinutes: 90,
    },
    {
      id: 'tpl-4',
      weekday: 'Mon',
      subjectId: 'sub-ict',
      chapterId: 'ch-ict-5',
      topicId: 'top-ict-5-1',
      startTime: '16:00',
      plannedDurationMinutes: 60,
    },
    {
      id: 'tpl-5',
      weekday: 'Tue',
      subjectId: 'sub-bio-1',
      chapterId: 'ch-bio-1',
      topicId: 'top-bio-1-1',
      startTime: '09:30',
      plannedDurationMinutes: 75,
    },
  ];

  return { initialSessions, initialTemplates, initialCompletions, initialModeCompletions, initialStudyLogs };
}

// ==========================================
// INDEPENDENT MODE COMPLETIONS & SYLLABUS PROGRESS API
// ==========================================

/**
 * Migrates legacy flat completions safely or initializes seed mode completions.
 * Preserves legacy user data without guessing or duplicating.
 */
function migrateOrSeedModeCompletions() {
  try {
    const rawLegacy = localStorage.getItem(STORAGE_KEYS.COMPLETIONS);
    const legacyCompletions = rawLegacy ? JSON.parse(rawLegacy) : null;
    const studyLogs = loadStudyLogs();

    // If legacy completions exist, safely partition based on study logs history
    if (legacyCompletions && typeof legacyCompletions === 'object' && Object.keys(legacyCompletions).length > 0) {
      const college = {};
      const home = {};
      const legacy = {};

      const topicContextMap = {};
      if (Array.isArray(studyLogs)) {
        studyLogs.forEach((log) => {
          if (Array.isArray(log.topicIds) && log.context) {
            log.topicIds.forEach((tId) => {
              if (!topicContextMap[tId]) topicContextMap[tId] = new Set();
              topicContextMap[tId].add(log.context);
            });
          }
        });
      }

      Object.entries(legacyCompletions).forEach(([topicId, record]) => {
        const contexts = topicContextMap[topicId];
        if (contexts && contexts.has(STUDY_CONTEXTS.COLLEGE) && !contexts.has(STUDY_CONTEXTS.HOME)) {
          college[topicId] = { ...record };
        } else if (contexts && contexts.has(STUDY_CONTEXTS.HOME) && !contexts.has(STUDY_CONTEXTS.COLLEGE)) {
          home[topicId] = { ...record };
        } else if (contexts && contexts.has(STUDY_CONTEXTS.COLLEGE) && contexts.has(STUDY_CONTEXTS.HOME)) {
          college[topicId] = { ...record };
          home[topicId] = { ...record };
        } else {
          // Unassigned / no explicit context in logs: preserve in legacy state
          legacy[topicId] = { ...record };
        }
      });

      const migrated = { college, home, legacy };
      saveModeCompletions(migrated);
      return migrated;
    }

    // Fresh install: use seed mode completions
    const { initialModeCompletions } = getInitialSeedData();
    saveModeCompletions(initialModeCompletions);
    return initialModeCompletions;
  } catch (err) {
    console.error('Failed to migrate or seed mode completions:', err);
    const { initialModeCompletions } = getInitialSeedData();
    return initialModeCompletions;
  }
}

/**
 * Load authoritative mode-partitioned completions from storage.
 * Structure: { college: { [topicId]: record }, home: { [topicId]: record }, legacy: { [topicId]: record } }
 */
export function loadModeCompletions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MODE_COMPLETIONS);
    if (!raw) {
      return migrateOrSeedModeCompletions();
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        college: parsed.college || {},
        home: parsed.home || {},
        legacy: parsed.legacy || {},
      };
    }
    return migrateOrSeedModeCompletions();
  } catch (err) {
    console.error('Failed to parse mode completions from storage:', err);
    return { college: {}, home: {}, legacy: {} };
  }
}

/**
 * Save mode-partitioned completions to storage
 */
export function saveModeCompletions(modeCompletions) {
  try {
    const safeData = {
      college: modeCompletions?.college || {},
      home: modeCompletions?.home || {},
      legacy: modeCompletions?.legacy || {},
    };
    localStorage.setItem(STORAGE_KEYS.MODE_COMPLETIONS, JSON.stringify(safeData));

    // Keep legacy flat storage synchronized with active/combined for backward compatibility
    const flatCombined = {
      ...safeData.legacy,
      ...safeData.home,
      ...safeData.college,
    };
    localStorage.setItem(STORAGE_KEYS.COMPLETIONS, JSON.stringify(flatCombined));
  } catch (err) {
    console.error('Failed to save mode completions to storage:', err);
  }
}

/**
 * Load topic completions for a specific mode or the currently active mode
 */
export function loadTopicCompletions(mode) {
  const modeCompletions = loadModeCompletions();
  const effectiveMode = (mode === STUDY_CONTEXTS.COLLEGE || mode === STUDY_CONTEXTS.HOME)
    ? mode
    : (loadSelectedStudyContext() || STUDY_CONTEXTS.COLLEGE);
  return modeCompletions[effectiveMode] || {};
}

/**
 * Save topic completions for a specific mode
 */
export function saveTopicCompletions(completions, mode) {
  const modeCompletions = loadModeCompletions();
  const effectiveMode = (mode === STUDY_CONTEXTS.COLLEGE || mode === STUDY_CONTEXTS.HOME)
    ? mode
    : (loadSelectedStudyContext() || STUDY_CONTEXTS.COLLEGE);
  const nextModeCompletions = {
    ...modeCompletions,
    [effectiveMode]: completions || {},
  };
  saveModeCompletions(nextModeCompletions);
}

/**
 * Load date-based study logs from storage
 * Safely migrates older historical logs lacking context to 'unknown'
 */
export function loadStudyLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STUDY_LOGS);
    if (!raw) {
      const { initialStudyLogs } = getInitialSeedData();
      saveStudyLogs(initialStudyLogs);
      return initialStudyLogs;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    let needsResave = false;
    const migrated = parsed.map((log) => {
      if (!log.context || ![STUDY_CONTEXTS.COLLEGE, STUDY_CONTEXTS.HOME].includes(log.context)) {
        needsResave = true;
        return {
          ...log,
          context: log.context === STUDY_CONTEXTS.COLLEGE || log.context === STUDY_CONTEXTS.HOME
            ? log.context
            : STUDY_CONTEXTS.UNKNOWN,
        };
      }
      return log;
    });

    if (needsResave) {
      saveStudyLogs(migrated);
    }
    return migrated;
  } catch (err) {
    console.error('Failed to parse study logs from storage:', err);
    return [];
  }
}

/**
 * Save study logs to storage
 */
export function saveStudyLogs(logs) {
  try {
    localStorage.setItem(STORAGE_KEYS.STUDY_LOGS, JSON.stringify(logs));
  } catch (err) {
    console.error('Failed to save study logs to storage:', err);
  }
}

/**
 * Load the active selected global study mode ('college' or 'home')
 * Returns null if no mode has been selected yet (triggering first-launch selection screen).
 */
export function loadSelectedStudyContext() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STUDY_CONTEXT);
    if (raw === STUDY_CONTEXTS.COLLEGE || raw === STUDY_CONTEXTS.HOME) {
      return raw;
    }
    return null;
  } catch (e) {
    return null;
  }
}

/**
 * Persist the selected global study mode ('college' or 'home')
 */
export function saveSelectedStudyContext(context) {
  try {
    if (context === STUDY_CONTEXTS.COLLEGE || context === STUDY_CONTEXTS.HOME) {
      localStorage.setItem(STORAGE_KEYS.STUDY_CONTEXT, context);
    } else if (context === null) {
      localStorage.removeItem(STORAGE_KEYS.STUDY_CONTEXT);
    }
  } catch (e) {
    console.error('Failed to save study context:', e);
  }
}

/**
 * Records topic completions / study activity for a chapter with context.
 * Strictly writes to the specified context mode without touching the other mode.
 * 
 * @param {Object} params
 * @param {string} params.subjectId
 * @param {string} params.chapterId
 * @param {Array<string>} params.topicIds - Array of studied topic IDs
 * @param {string} [params.notes] - Optional accomplishment notes
 * @param {string} [params.dateStr] - Local calendar date YYYY-MM-DD
 * @param {string} [params.context] - 'college' | 'home'
 * @returns {{ updatedModeCompletions: Object, updatedCompletions: Object, nextLogs: Array, newLog: Object, mode: string }}
 */
export function recordStudyLog({ subjectId, chapterId, topicIds = [], notes = '', dateStr, context }) {
  const localDate = dateStr || getTodayDateString();
  const modeCompletions = loadModeCompletions();
  const logs = loadStudyLogs();

  const validatedContext = (context === STUDY_CONTEXTS.COLLEGE || context === STUDY_CONTEXTS.HOME)
    ? context
    : (loadSelectedStudyContext() || STUDY_CONTEXTS.COLLEGE);

  const targetMode = validatedContext;
  const currentModeCompletions = modeCompletions[targetMode] || {};
  const nextTargetCompletions = { ...currentModeCompletions };

  topicIds.forEach((tId) => {
    const existing = nextTargetCompletions[tId];
    if (existing) {
      nextTargetCompletions[tId] = {
        ...existing,
        completed: Boolean(existing.completed),
        lastStudiedDate: localDate,
        studyCount: (existing.studyCount || 0) + 1,
      };
    } else {
      nextTargetCompletions[tId] = {
        completed: false,
        lastStudiedDate: localDate,
        studyCount: 1,
      };
    }
  });

  const nextModeCompletions = {
    ...modeCompletions,
    [targetMode]: nextTargetCompletions,
  };

  saveModeCompletions(nextModeCompletions);

  // Create date-based activity log entry with explicit study context
  const newLog = {
    id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    date: localDate,
    timestamp: new Date().toISOString(),
    context: validatedContext,
    subjectId,
    chapterId,
    topicIds,
    notes: notes ? notes.trim() : '',
  };

  const nextLogs = [newLog, ...logs];
  saveStudyLogs(nextLogs);

  return {
    updatedModeCompletions: nextModeCompletions,
    updatedCompletions: nextTargetCompletions,
    nextLogs,
    newLog,
    mode: targetMode,
  };
}

/**
 * Toggles a single topic completion on/off with context attribution.
 * Independent Completion Rule:
 * - Marking a topic complete in College never changes Home.
 * - Marking a topic complete in Home never changes College.
 * 
 * @param {string} topicId
 * @param {string} [dateStr]
 * @param {string} [notes]
 * @param {string} [context] - 'college' | 'home'
 * @returns {{ updatedModeCompletions: Object, updatedCompletions: Object, nextLogs: Array, isCompleted: boolean, mode: string }}
 */
export function toggleSingleTopic(topicId, dateStr, notes = '', context) {
  const localDate = dateStr || getTodayDateString();
  const modeCompletions = loadModeCompletions();

  const validatedContext = (context === STUDY_CONTEXTS.COLLEGE || context === STUDY_CONTEXTS.HOME)
    ? context
    : (loadSelectedStudyContext() || STUDY_CONTEXTS.COLLEGE);

  const targetMode = validatedContext;
  const currentModeCompletions = modeCompletions[targetMode] || {};
  const current = currentModeCompletions[topicId];
  const isCurrentlyCompleted = Boolean(current?.completed);
  const nowCompleted = !isCurrentlyCompleted;

  const nextTargetCompletions = {
    ...currentModeCompletions,
    [topicId]: {
      completed: nowCompleted,
      firstCompletedDate: nowCompleted ? (current?.firstCompletedDate || localDate) : current?.firstCompletedDate,
      lastStudiedDate: localDate,
      studyCount: nowCompleted ? (current?.studyCount || 0) + 1 : current?.studyCount || 1,
    },
  };

  const nextModeCompletions = {
    ...modeCompletions,
    [targetMode]: nextTargetCompletions,
  };

  saveModeCompletions(nextModeCompletions);

  let nextLogs = loadStudyLogs();
  if (nowCompleted) {
    const topic = SAMPLE_TOPICS.find((t) => t.id === topicId);
    const chapter = topic ? SAMPLE_CHAPTERS.find((c) => c.id === topic.chapterId) : null;
    const newLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      date: localDate,
      timestamp: new Date().toISOString(),
      context: validatedContext,
      subjectId: chapter?.subjectId || '',
      chapterId: topic?.chapterId || '',
      topicIds: [topicId],
      notes: notes ? notes.trim() : '',
      newlyCompletedCount: 1,
    };
    nextLogs = [newLog, ...nextLogs];
    saveStudyLogs(nextLogs);
  }

  return {
    updatedModeCompletions: nextModeCompletions,
    updatedCompletions: nextTargetCompletions,
    nextLogs,
    isCompleted: nowCompleted,
    mode: targetMode,
  };
}

/**
 * Records an additional study session for a topic in a specific context without affecting completion
 */
export function recordTopicStudySession({ topicId, context, notes = '', dateStr }) {
  const localDate = dateStr || getTodayDateString();
  const topic = SAMPLE_TOPICS.find((t) => t.id === topicId);
  const chapter = topic ? SAMPLE_CHAPTERS.find((c) => c.id === topic.chapterId) : null;
  const validatedContext = (context === STUDY_CONTEXTS.COLLEGE || context === STUDY_CONTEXTS.HOME)
    ? context
    : (loadSelectedStudyContext() || STUDY_CONTEXTS.COLLEGE);

  const targetMode = validatedContext;
  const modeCompletions = loadModeCompletions();
  const currentModeCompletions = modeCompletions[targetMode] || {};
  const current = currentModeCompletions[topicId];

  const nextTargetCompletions = {
    ...currentModeCompletions,
    [topicId]: {
      completed: Boolean(current?.completed),
      firstCompletedDate: current?.firstCompletedDate || null,
      lastStudiedDate: localDate,
      studyCount: (current?.studyCount || 0) + 1,
    },
  };

  const nextModeCompletions = {
    ...modeCompletions,
    [targetMode]: nextTargetCompletions,
  };

  saveModeCompletions(nextModeCompletions);

  const newLog = {
    id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    date: localDate,
    timestamp: new Date().toISOString(),
    context: validatedContext,
    subjectId: chapter?.subjectId || '',
    chapterId: topic?.chapterId || '',
    topicIds: [topicId],
    notes: notes ? notes.trim() : '',
    newlyCompletedCount: 0,
  };

  const logs = loadStudyLogs();
  const nextLogs = [newLog, ...logs];
  saveStudyLogs(nextLogs);

  return {
    updatedModeCompletions: nextModeCompletions,
    updatedCompletions: nextTargetCompletions,
    nextLogs,
    newLog,
    mode: targetMode,
  };
}

/**
 * Derives context study history for a given topicId from study logs
 */
export function getTopicContextHistory(topicId, studyLogs = []) {
  if (!topicId || !Array.isArray(studyLogs)) {
    return {
      studiedAtCollege: false,
      studiedAtHome: false,
      studiedAtUnknown: false,
      collegeCount: 0,
      homeCount: 0,
      unknownCount: 0,
      lastCollegeDate: null,
      lastHomeDate: null,
      totalSessions: 0,
      history: [],
    };
  }

  const topicLogs = studyLogs.filter(
    (log) => Array.isArray(log.topicIds) && log.topicIds.includes(topicId)
  );

  let collegeCount = 0;
  let homeCount = 0;
  let unknownCount = 0;
  let lastCollegeDate = null;
  let lastHomeDate = null;

  topicLogs.forEach((log) => {
    if (log.context === STUDY_CONTEXTS.COLLEGE) {
      collegeCount++;
      if (!lastCollegeDate || log.date > lastCollegeDate) {
        lastCollegeDate = log.date;
      }
    } else if (log.context === STUDY_CONTEXTS.HOME) {
      homeCount++;
      if (!lastHomeDate || log.date > lastHomeDate) {
        lastHomeDate = log.date;
      }
    } else {
      unknownCount++;
    }
  });

  return {
    studiedAtCollege: collegeCount > 0,
    studiedAtHome: homeCount > 0,
    studiedAtUnknown: unknownCount > 0,
    collegeCount,
    homeCount,
    unknownCount,
    lastCollegeDate,
    lastHomeDate,
    totalSessions: topicLogs.length,
    history: topicLogs,
  };
}

/**
 * Builds an O(1) map of context histories for all topics
 */
export function buildTopicsContextMap(studyLogs = []) {
  const map = {};
  if (!Array.isArray(studyLogs)) return map;

  studyLogs.forEach((log) => {
    if (!Array.isArray(log.topicIds)) return;
    const ctx = log.context === STUDY_CONTEXTS.COLLEGE || log.context === STUDY_CONTEXTS.HOME
      ? log.context
      : STUDY_CONTEXTS.UNKNOWN;

    log.topicIds.forEach((tId) => {
      if (!map[tId]) {
        map[tId] = {
          studiedAtCollege: false,
          studiedAtHome: false,
          studiedAtUnknown: false,
          collegeCount: 0,
          homeCount: 0,
          unknownCount: 0,
          lastCollegeDate: null,
          lastHomeDate: null,
          totalSessions: 0,
          history: [],
        };
      }
      map[tId].totalSessions++;
      map[tId].history.push(log);
      if (ctx === STUDY_CONTEXTS.COLLEGE) {
        map[tId].studiedAtCollege = true;
        map[tId].collegeCount++;
        if (!map[tId].lastCollegeDate || log.date > map[tId].lastCollegeDate) {
          map[tId].lastCollegeDate = log.date;
        }
      } else if (ctx === STUDY_CONTEXTS.HOME) {
        map[tId].studiedAtHome = true;
        map[tId].homeCount++;
        if (!map[tId].lastHomeDate || log.date > map[tId].lastHomeDate) {
          map[tId].lastHomeDate = log.date;
        }
      } else {
        map[tId].studiedAtUnknown = true;
        map[tId].unknownCount++;
      }
    });
  });

  return map;
}

/**
 * Authoritative Syllabus Progress Calculation:
 * 
 * Chapter progress = completed topics in chapter / total topics in chapter * 100
 * Subject progress = completed topics across subject / total topics across subject * 100
 * Overall progress = completed topics across all subjects / total topics across all subjects * 100
 * 
 * Safe handling of empty datasets (never divide by zero).
 */
export function calculateSyllabusProgress(completions = {}) {
  // 1. Overall
  const totalTopics = SAMPLE_TOPICS.length;
  const completedTopicsCount = SAMPLE_TOPICS.filter(
    (t) => Boolean(completions[t.id]?.completed)
  ).length;

  const overallPercent = totalTopics > 0
    ? Math.min(100, Math.round((completedTopicsCount / totalTopics) * 100))
    : 0;

  // 2. By Chapter
  const chapterProgress = {};
  SAMPLE_CHAPTERS.forEach((ch) => {
    const chTopics = SAMPLE_TOPICS.filter((t) => t.chapterId === ch.id);
    const chTotal = chTopics.length;
    const chCompleted = chTopics.filter((t) => Boolean(completions[t.id]?.completed)).length;
    const chPercent = chTotal > 0
      ? Math.min(100, Math.round((chCompleted / chTotal) * 100))
      : 0;

    chapterProgress[ch.id] = {
      total: chTotal,
      completed: chCompleted,
      remaining: Math.max(0, chTotal - chCompleted),
      percent: chPercent,
    };
  });

  // 3. By Paper (SAMPLE_SUBJECTS)
  const paperProgress = {};
  SAMPLE_SUBJECTS.forEach((sub) => {
    const subChapters = SAMPLE_CHAPTERS.filter((c) => c.subjectId === sub.id);
    const subChapterIds = new Set(subChapters.map((c) => c.id));
    const subTopics = SAMPLE_TOPICS.filter((t) => subChapterIds.has(t.chapterId));
    const subTotal = subTopics.length;
    const subCompleted = subTopics.filter((t) => Boolean(completions[t.id]?.completed)).length;
    const subPercent = subTotal > 0
      ? Math.min(100, Math.round((subCompleted / subTotal) * 100))
      : 0;

    paperProgress[sub.id] = {
      id: sub.id,
      name: sub.name,
      bengaliName: sub.bengaliName,
      paperLabel: sub.paperLabel,
      bengaliPaperLabel: sub.bengaliPaperLabel,
      code: sub.code,
      chapterCount: subChapters.length,
      total: subTotal,
      completed: subCompleted,
      remaining: Math.max(0, subTotal - subCompleted),
      percent: subPercent,
    };
  });

  // 4. By Subject Group (HSC_SUBJECTS)
  // Combines 1st Paper + 2nd Paper without double counting
  const subjectGroupProgress = {};
  HSC_SUBJECTS.forEach((group) => {
    const paperIds = new Set(group.papers.map((p) => p.id));
    const groupChapters = SAMPLE_CHAPTERS.filter((c) => paperIds.has(c.subjectId));
    const groupChapterIds = new Set(groupChapters.map((c) => c.id));
    const groupTopics = SAMPLE_TOPICS.filter((t) => groupChapterIds.has(t.chapterId));
    const groupTotal = groupTopics.length;
    const groupCompleted = groupTopics.filter((t) => Boolean(completions[t.id]?.completed)).length;
    const groupPercent = groupTotal > 0
      ? Math.min(100, Math.round((groupCompleted / groupTotal) * 100))
      : 0;

    subjectGroupProgress[group.id] = {
      id: group.id,
      name: group.name,
      bengaliName: group.bengaliName,
      chapterCount: groupChapters.length,
      total: groupTotal,
      completed: groupCompleted,
      remaining: Math.max(0, groupTotal - groupCompleted),
      percent: groupPercent,
      papers: group.papers.map((p) => ({
        ...p,
        ...(paperProgress[p.id] || { total: 0, completed: 0, remaining: 0, percent: 0 }),
      })),
    };
  });

  return {
    overall: {
      total: totalTopics,
      completed: completedTopicsCount,
      remaining: Math.max(0, totalTopics - completedTopicsCount),
      percent: overallPercent,
    },
    // Merged so subjects[paperId] AND subjects[groupId] both resolve correctly
    subjects: {
      ...paperProgress,
      ...subjectGroupProgress,
    },
    subjectGroups: subjectGroupProgress,
    papers: paperProgress,
    chapters: chapterProgress,
  };
}

/**
 * Calculates combined syllabus progress across College and Home without double counting.
 * If a topic is completed in College OR Home, it is counted once towards total coverage.
 */
export function calculateCombinedProgress(modeCompletions = {}) {
  const college = modeCompletions?.college || {};
  const home = modeCompletions?.home || {};
  const combined = {};

  SAMPLE_TOPICS.forEach((t) => {
    const isCollegeCompleted = Boolean(college[t.id]?.completed);
    const isHomeCompleted = Boolean(home[t.id]?.completed);
    if (isCollegeCompleted || isHomeCompleted) {
      combined[t.id] = {
        completed: true,
        collegeCompleted: isCollegeCompleted,
        homeCompleted: isHomeCompleted,
      };
    }
  });

  return calculateSyllabusProgress(combined);
}

// ==========================================
// ROUTINE SESSIONS & PREFERENCES API
// ==========================================

export function loadSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    if (!raw) {
      const { initialSessions } = getInitialSeedData();
      saveSessions(initialSessions);
      return initialSessions;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to parse sessions from storage:', err);
    return [];
  }
}

export function saveSessions(sessions) {
  try {
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
  } catch (err) {
    console.error('Failed to save sessions to storage:', err);
  }
}

export function loadTemplates() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TEMPLATES);
    if (!raw) {
      const { initialTemplates } = getInitialSeedData();
      saveTemplates(initialTemplates);
      return initialTemplates;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to parse templates from storage:', err);
    return [];
  }
}

export function saveTemplates(templates) {
  try {
    localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(templates));
  } catch (err) {
    console.error('Failed to save templates to storage:', err);
  }
}

export function loadPreferences() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (!raw) {
      savePreferences(DEFAULT_PREFERENCES);
      return DEFAULT_PREFERENCES;
    }
    const parsed = JSON.parse(raw);
    return {
      dailyStudyTargetMinutes: parsed.dailyStudyTargetMinutes || DEFAULT_PREFERENCES.dailyStudyTargetMinutes,
      preferredBufferMinutes: parsed.preferredBufferMinutes || DEFAULT_PREFERENCES.preferredBufferMinutes,
    };
  } catch (err) {
    console.error('Failed to parse preferences from storage:', err);
    return DEFAULT_PREFERENCES;
  }
}

export function savePreferences(preferences) {
  try {
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
  } catch (err) {
    console.error('Failed to save preferences to storage:', err);
  }
}
