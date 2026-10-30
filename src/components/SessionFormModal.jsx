import React, { useState, useEffect } from 'react';
import { X, Clock, Calendar, AlertTriangle, BookOpen, Check } from 'lucide-react';
import {
  HSC_SUBJECTS,
  SAMPLE_SUBJECTS,
  getChaptersBySubjectId,
  getTopicsByChapterId,
} from '../data/sampleHscSyllabus.js';
import {
  calculateEndTime,
  formatDisplayTime,
  getTodayDateString,
} from '../utils/timeUtils.js';
import { checkSessionConflict } from '../utils/conflictDetector.js';

const DURATION_PRESETS = [30, 45, 60, 90, 120];

export default function SessionFormModal({
  isOpen,
  onClose,
  onSave,
  initialSession = null,
  initialDate = null,
  allSessions = [],
}) {
  const isEditing = Boolean(initialSession?.id);

  // Form State
  const [subjectId, setSubjectId] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [topicId, setTopicId] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [plannedDurationMinutes, setPlannedDurationMinutes] = useState(60);
  const [notes, setNotes] = useState('');

  // Validation & Conflict
  const [errors, setErrors] = useState({});
  const [conflictWarning, setConflictWarning] = useState(null);

  // Cascading dependent options
  const [availableChapters, setAvailableChapters] = useState([]);
  const [availableTopics, setAvailableTopics] = useState([]);

  useEffect(() => {
    if (!isOpen) return;

    if (initialSession) {
      setSubjectId(initialSession.subjectId || '');
      setChapterId(initialSession.chapterId || '');
      setTopicId(initialSession.topicId || '');
      setDate(initialSession.date || getTodayDateString());
      setStartTime(initialSession.startTime || '09:00');
      setPlannedDurationMinutes(initialSession.plannedDurationMinutes || 60);
      setNotes(initialSession.notes || '');

      const chapters = getChaptersBySubjectId(initialSession.subjectId);
      setAvailableChapters(chapters);
      const topics = getTopicsByChapterId(initialSession.chapterId);
      setAvailableTopics(topics);
    } else {
      const defaultSub = SAMPLE_SUBJECTS[0].id;
      setSubjectId(defaultSub);
      const chapters = getChaptersBySubjectId(defaultSub);
      setAvailableChapters(chapters);
      const firstChapterId = chapters[0]?.id || '';
      setChapterId(firstChapterId);

      const topics = getTopicsByChapterId(firstChapterId);
      setAvailableTopics(topics);
      setTopicId(topics[0]?.id || '');

      setDate(initialDate || getTodayDateString());
      setStartTime('09:30');
      setPlannedDurationMinutes(60);
      setNotes('');
    }

    setErrors({});
    setConflictWarning(null);
  }, [isOpen, initialSession, initialDate]);

  // Dependent subject change
  const handleSubjectChange = (newSubId) => {
    setSubjectId(newSubId);
    const chapters = getChaptersBySubjectId(newSubId);
    setAvailableChapters(chapters);
    const newChId = chapters[0]?.id || '';
    setChapterId(newChId);

    const topics = getTopicsByChapterId(newChId);
    setAvailableTopics(topics);
    setTopicId(topics[0]?.id || '');

    setErrors((prev) => ({ ...prev, subjectId: null, chapterId: null, topicId: null }));
  };

  // Dependent chapter change
  const handleChapterChange = (newChId) => {
    setChapterId(newChId);
    const topics = getTopicsByChapterId(newChId);
    setAvailableTopics(topics);
    setTopicId(topics[0]?.id || '');

    setErrors((prev) => ({ ...prev, chapterId: null, topicId: null }));
  };

  // Real-time conflict checking
  useEffect(() => {
    if (!date || !startTime || !plannedDurationMinutes) return;

    const conflictResult = checkSessionConflict(
      date,
      startTime,
      plannedDurationMinutes,
      allSessions,
      initialSession?.id || null
    );

    if (conflictResult.hasConflict) {
      setConflictWarning(conflictResult.message);
    } else {
      setConflictWarning(null);
    }
  }, [date, startTime, plannedDurationMinutes, allSessions, initialSession]);

  if (!isOpen) return null;

  const endTimeStr = calculateEndTime(startTime, plannedDurationMinutes);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!subjectId) validationErrors.subjectId = 'Please select a subject';
    if (!chapterId) validationErrors.chapterId = 'Please select a chapter';
    if (!topicId) validationErrors.topicId = 'Please select a topic';
    if (!date) validationErrors.date = 'Date is required';
    if (!startTime) validationErrors.startTime = 'Start time is required';
    if (!plannedDurationMinutes || plannedDurationMinutes <= 0) {
      validationErrors.plannedDurationMinutes = 'Duration must be greater than 0';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const sessionData = {
      id: initialSession?.id || `sess-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      subjectId,
      chapterId,
      topicId,
      date,
      startTime,
      plannedDurationMinutes: Number(plannedDurationMinutes),
      actualDurationMinutes: initialSession?.actualDurationMinutes || 0,
      status: initialSession?.status || 'upcoming',
      createdAt: initialSession?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rescheduleHistory: initialSession?.rescheduleHistory || [],
      notes: notes.trim(),
    };

    onSave(sessionData);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="session-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 max-h-[92vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
          <div>
            <h2 id="session-modal-title" className="text-base font-black text-charcoal uppercase tracking-tight">
              {isEditing ? 'Edit Study Block' : 'Schedule Study Block'}
            </h2>
            <p className="text-xs text-charcoal-muted font-medium">
              Plan your syllabus topic with auto-calculated duration
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-200/60 rounded-full transition min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto flex-1">
          {/* Sample Syllabus notice pill */}
          <div className="flex items-start gap-2 p-3 bg-sage-100 border border-sage-300 rounded-2xl text-xs text-charcoal-body">
            <BookOpen className="w-4 h-4 text-olive-card shrink-0 mt-0.5" />
            <span>
              <strong>Sample HSC Syllabus:</strong> NCTB Science curriculum sample data is preloaded. Official datasets integrate seamlessly into this data structure.
            </span>
          </div>

          {/* 1. Subject */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Subject <span className="text-rose-600">*</span>
            </label>
            <select
              value={subjectId}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-bold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card focus:border-olive-card min-h-[44px]"
            >
              {HSC_SUBJECTS.map((group) => (
                <optgroup key={group.id} label={`${group.bengaliName} (${group.name})`}>
                  {group.papers.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.bengaliPaperLabel} — {p.name} (Code: {p.code})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.subjectId && <p className="text-xs text-rose-600 font-bold mt-1">{errors.subjectId}</p>}
          </div>

          {/* 2. Chapter */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Chapter <span className="text-rose-600">*</span>
            </label>
            <select
              value={chapterId}
              onChange={(e) => handleChapterChange(e.target.value)}
              disabled={availableChapters.length === 0}
              className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-semibold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card focus:border-olive-card min-h-[44px] disabled:bg-sage-100"
            >
              {availableChapters.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  {ch.name}
                </option>
              ))}
            </select>
            {errors.chapterId && <p className="text-xs text-rose-600 font-bold mt-1">{errors.chapterId}</p>}
          </div>

          {/* 3. Topic */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Topic <span className="text-rose-600">*</span>
            </label>
            <select
              value={topicId}
              onChange={(e) => {
                setTopicId(e.target.value);
                setErrors((prev) => ({ ...prev, topicId: null }));
              }}
              disabled={availableTopics.length === 0}
              className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-semibold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card focus:border-olive-card min-h-[44px] disabled:bg-sage-100"
            >
              {availableTopics.map((top) => (
                <option key={top.id} value={top.id}>
                  {top.name}
                </option>
              ))}
            </select>
            {errors.topicId && <p className="text-xs text-rose-600 font-bold mt-1">{errors.topicId}</p>}
          </div>

          {/* 4. Date & Start Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
                Date <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setErrors((prev) => ({ ...prev, date: null }));
                }}
                className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-bold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card focus:border-olive-card min-h-[44px]"
              />
              {errors.date && <p className="text-xs text-rose-600 font-bold mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
                Start Time <span className="text-rose-600">*</span>
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                  setErrors((prev) => ({ ...prev, startTime: null }));
                }}
                className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-bold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card focus:border-olive-card min-h-[44px]"
              />
              {errors.startTime && (
                <p className="text-xs text-rose-600 font-bold mt-1">{errors.startTime}</p>
              )}
            </div>
          </div>

          {/* 5. Planned Duration (Presets + Auto-calculated End Time) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-charcoal">
                Planned Duration <span className="text-rose-600">*</span>
              </label>
              <span className="text-xs font-extrabold text-charcoal bg-mustard-card/50 px-2.5 py-0.5 rounded-full border border-mustard-card">
                Ends at: {formatDisplayTime(endTimeStr)}
              </span>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-1.5 mb-2 overflow-x-auto pb-1">
              {DURATION_PRESETS.map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setPlannedDurationMinutes(mins)}
                  className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition min-h-[34px] ${
                    plannedDurationMinutes === mins
                      ? 'bg-charcoal text-white shadow-soft'
                      : 'bg-sage-100 text-charcoal hover:bg-sage-200 border border-sage-300'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="480"
                value={plannedDurationMinutes}
                onChange={(e) => setPlannedDurationMinutes(Math.max(1, Number(e.target.value)))}
                className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-bold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card min-h-[44px]"
                placeholder="Custom minutes"
              />
              <span className="text-xs text-charcoal-muted font-bold whitespace-nowrap">Minutes</span>
            </div>
            {errors.plannedDurationMinutes && (
              <p className="text-xs text-rose-600 font-bold mt-1">{errors.plannedDurationMinutes}</p>
            )}
          </div>

          {/* Overlap / Conflict Warning */}
          {conflictWarning && (
            <div
              role="alert"
              className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-950 font-medium"
            >
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Schedule Overlap Alert:</strong>
                <p className="mt-0.5">{conflictWarning}</p>
              </div>
            </div>
          )}

          {/* 6. Notes */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Goal / Study Notes <span className="text-charcoal-muted font-normal">(Optional)</span>
            </label>
            <textarea
              rows="2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Master formula derivations, solve exercise 1-10..."
              className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-medium text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card resize-none"
            />
          </div>

          {/* Bottom Action Buttons (Inspired by Image 4) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-2 border-t border-sage-200">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-charcoal-muted hover:text-charcoal transition min-h-[44px]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-charcoal hover:bg-black active:scale-[0.98] text-white text-xs font-black rounded-full shadow-soft transition min-h-[46px] flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>{isEditing ? 'Save Changes' : 'Schedule Session'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
