import React, { useState, useEffect } from 'react';
import {
  X,
  RotateCcw,
  Clock,
  Calendar,
  Sparkles,
  AlertCircle,
  Check,
  AlertTriangle,
} from 'lucide-react';
import { getSubjectById, getChapterById, getTopicById } from '../data/sampleHscSyllabus.js';
import {
  getTodayDateString,
  shiftDate,
  formatDisplayDate,
  formatDisplayTime,
  formatDurationHuman,
} from '../utils/timeUtils.js';
import { findAvailableTimeSlots, checkSessionConflict } from '../utils/conflictDetector.js';

export default function RescheduleModal({
  isOpen,
  onClose,
  session,
  allSessions,
  preferences,
  onConfirmReschedule,
}) {
  const todayStr = getTodayDateString();
  const tomorrowStr = shiftDate(todayStr, 1);

  const [targetDate, setTargetDate] = useState(todayStr);
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [reason, setReason] = useState('Missed scheduled time');
  const [customMode, setCustomMode] = useState(false);
  const [conflictError, setConflictError] = useState(null);

  const [suggestedSlots, setSuggestedSlots] = useState([]);

  useEffect(() => {
    if (!isOpen || !session) return;

    const initialDate = session.date < todayStr ? todayStr : session.date;
    setTargetDate(initialDate);
    setReason('Missed scheduled time');
    setCustomMode(false);
    setConflictError(null);
  }, [isOpen, session, todayStr]);

  useEffect(() => {
    if (!session || !targetDate) return;

    const slots = findAvailableTimeSlots(
      targetDate,
      session.plannedDurationMinutes || 60,
      allSessions,
      preferences?.preferredBufferMinutes || 15,
      4
    );

    setSuggestedSlots(slots);
    if (slots.length > 0 && !customMode) {
      setSelectedStartTime(slots[0].startTime);
    } else if (slots.length === 0) {
      setCustomMode(true);
      setSelectedStartTime('16:00');
    }
  }, [targetDate, session, allSessions, preferences, customMode]);

  useEffect(() => {
    if (!session || !targetDate || !selectedStartTime) return;

    const conflict = checkSessionConflict(
      targetDate,
      selectedStartTime,
      session.plannedDurationMinutes,
      allSessions,
      session.id
    );

    if (conflict.hasConflict) {
      setConflictError(conflict.message);
    } else {
      setConflictError(null);
    }
  }, [targetDate, selectedStartTime, session, allSessions]);

  if (!isOpen || !session) return null;

  const subject = getSubjectById(session.subjectId);
  const chapter = getChapterById(session.chapterId);
  const topic = getTopicById(session.topicId);

  const handleApplyReschedule = (e) => {
    e.preventDefault();
    if (!selectedStartTime) return;
    onConfirmReschedule(session, targetDate, selectedStartTime, reason);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reschedule-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h2 id="reschedule-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
                Reschedule Study Block
              </h2>
              <p className="text-xs text-charcoal-muted font-medium">Smart free-slot recovery & adjustment</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-200/60 rounded-full transition min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleApplyReschedule} className="p-5 space-y-4">
          <div className="bg-sage-100/70 border border-sage-200 rounded-2xl p-3.5">
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: subject?.tagBg || '#EAEFE6',
                  color: subject?.tagText || '#2B3728',
                }}
              >
                {subject?.name}
              </span>
              <span className="text-xs font-bold text-charcoal-muted">
                {formatDurationHuman(session.plannedDurationMinutes)}
              </span>
            </div>
            <h3 className="text-sm font-black text-charcoal">{chapter?.name}</h3>
            <p className="text-xs text-charcoal-muted mt-0.5 font-medium">{topic?.name}</p>

            <div className="mt-2.5 flex items-center gap-1.5 text-xs text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-xl font-bold">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-700" />
              <span>
                Original: {formatDisplayDate(session.date)} at {formatDisplayTime(session.startTime)}
              </span>
            </div>
          </div>

          {/* Date Selector Pills */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Select Rescheduled Date
            </label>
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              <button
                type="button"
                onClick={() => setTargetDate(todayStr)}
                className={`py-2 px-1 text-xs font-black rounded-full border transition min-h-[40px] ${
                  targetDate === todayStr
                    ? 'bg-charcoal text-white border-charcoal shadow-soft'
                    : 'bg-sage-100 text-charcoal border-sage-300 hover:bg-sage-200'
                }`}
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => setTargetDate(tomorrowStr)}
                className={`py-2 px-1 text-xs font-black rounded-full border transition min-h-[40px] ${
                  targetDate === tomorrowStr
                    ? 'bg-charcoal text-white border-charcoal shadow-soft'
                    : 'bg-sage-100 text-charcoal border-sage-300 hover:bg-sage-200'
                }`}
              >
                Tomorrow
              </button>
              <button
                type="button"
                onClick={() => setTargetDate(shiftDate(todayStr, 2))}
                className={`py-2 px-1 text-xs font-black rounded-full border transition min-h-[40px] ${
                  targetDate !== todayStr && targetDate !== tomorrowStr
                    ? 'bg-charcoal text-white border-charcoal shadow-soft'
                    : 'bg-sage-100 text-charcoal border-sage-300 hover:bg-sage-200'
                }`}
              >
                Other Date
              </button>
            </div>

            {targetDate !== todayStr && targetDate !== tomorrowStr && (
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-sage-300 rounded-2xl font-bold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card"
              />
            )}
          </div>

          {/* Smart Free Slots */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-charcoal flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-olive-card" />
                <span>Smart Available Free Slots</span>
              </label>
              <button
                type="button"
                onClick={() => setCustomMode(!customMode)}
                className="text-xs text-olive-card hover:underline font-extrabold"
              >
                {customMode ? 'Show smart slots' : 'Custom time'}
              </button>
            </div>

            {!customMode ? (
              suggestedSlots.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {suggestedSlots.map((slot) => {
                    const isSelected = selectedStartTime === slot.startTime;
                    return (
                      <button
                        key={slot.startTime}
                        type="button"
                        onClick={() => setSelectedStartTime(slot.startTime)}
                        className={`p-2.5 rounded-2xl border text-left transition flex items-center justify-between min-h-[44px] ${
                          isSelected
                            ? 'bg-charcoal text-white border-charcoal shadow-soft ring-2 ring-charcoal/20'
                            : 'bg-white border-sage-300 text-charcoal hover:bg-sage-100'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-black">{formatDisplayTime(slot.startTime)}</div>
                          <div className={`text-[10px] ${isSelected ? 'text-sage-300' : 'text-charcoal-muted'}`}>
                            Until {formatDisplayTime(slot.endTime)}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-mustard-card stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-900 font-medium">
                  No automated free slots on this date. Tap &apos;Custom time&apos; to specify your own slot.
                </div>
              )
            ) : (
              <div>
                <input
                  type="time"
                  value={selectedStartTime}
                  onChange={(e) => setSelectedStartTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-sm font-black text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card min-h-[44px]"
                />
              </div>
            )}

            {conflictError && (
              <div className="mt-2 flex items-center gap-1.5 p-2 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 font-bold">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>{conflictError}</span>
              </div>
            )}
          </div>

          {/* Reason */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Reason <span className="text-charcoal-muted font-normal">(Recorded in reschedule history)</span>
            </label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g. College class, illness, rescheduled..."
              className="w-full px-3.5 py-2 text-xs border border-sage-300 rounded-2xl font-semibold text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-2 border-t border-sage-200">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-charcoal-muted hover:text-charcoal transition min-h-[44px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedStartTime}
              className="w-full sm:w-auto px-6 py-3 bg-charcoal hover:bg-black disabled:opacity-50 text-white text-xs font-black rounded-full shadow-soft transition min-h-[46px] flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4 text-mustard-card" />
              <span>Confirm Reschedule</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
