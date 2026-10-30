import React from 'react';
import {
  X,
  Clock,
  Calendar,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Edit2,
  Trash2,
  History,
  FileText,
  Check,
} from 'lucide-react';
import { getSubjectById, getChapterById, getTopicById } from '../data/sampleHscSyllabus.js';
import {
  formatDisplayDate,
  formatDisplayTime,
  calculateEndTime,
  formatDurationHuman,
} from '../utils/timeUtils.js';

export default function SessionDetailModal({
  isOpen,
  onClose,
  session,
  onEdit,
  onReschedule,
  onQuickComplete,
  onUndoComplete,
  onDelete,
}) {
  if (!isOpen || !session) return null;

  const subject = getSubjectById(session.subjectId);
  const chapter = getChapterById(session.chapterId);
  const topic = getTopicById(session.topicId);

  const endTimeStr = calculateEndTime(session.startTime, session.plannedDurationMinutes);
  const isCompleted = session.status === 'completed';
  const isNeedsAttention = session.status === 'needs_attention';
  const historyList = session.rescheduleHistory || [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: subject?.accentColor || '#3D4739' }}
            />
            <h2 id="detail-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
              Study Block Overview
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-sage-200/60 rounded-full transition min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable details */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {/* Status Banner */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border bg-sage-100/70 border-sage-300">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted block">
                Current Status
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                {isCompleted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-olive-card" />
                    <span className="text-sm font-black text-olive-deep">Completed</span>
                  </>
                ) : isNeedsAttention ? (
                  <>
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-black text-amber-900">Needs Attention</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4 text-charcoal-muted" />
                    <span className="text-sm font-black text-charcoal">Upcoming</span>
                  </>
                )}
              </div>
            </div>

            {isCompleted && (
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted block">
                  Time Studied
                </span>
                <span className="text-sm font-black text-olive-deep">
                  {formatDurationHuman(session.actualDurationMinutes)}
                </span>
              </div>
            )}
          </div>

          {/* Syllabus Info */}
          <div>
            <span
              className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1.5"
              style={{
                backgroundColor: subject?.tagBg || '#EAEFE6',
                color: subject?.tagText || '#2B3728',
              }}
            >
              {subject?.name} (Code: {subject?.code})
            </span>
            <h3 className="text-base font-black text-charcoal leading-snug">
              {chapter?.name}
            </h3>
            <p className="text-xs text-charcoal-muted mt-1 flex items-center gap-1.5 font-semibold">
              <BookOpen className="w-4 h-4 text-charcoal-muted shrink-0" />
              <span>{topic?.name}</span>
            </p>
          </div>

          {/* Schedule Specs Grid */}
          <div className="grid grid-cols-2 gap-2.5 bg-sage-100/70 p-3 rounded-2xl border border-sage-200">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Date
              </span>
              <div className="text-xs font-black text-charcoal mt-0.5">
                {formatDisplayDate(session.date)}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                <Clock className="w-3 h-3" /> Time Window
              </span>
              <div className="text-xs font-black text-charcoal mt-0.5">
                {formatDisplayTime(session.startTime)} – {formatDisplayTime(endTimeStr)}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted">Planned Duration</span>
              <div className="text-xs font-black text-charcoal mt-0.5">
                {formatDurationHuman(session.plannedDurationMinutes)}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted">Recorded Duration</span>
              <div className="text-xs font-black text-charcoal mt-0.5">
                {isCompleted ? formatDurationHuman(session.actualDurationMinutes) : 'Pending completion'}
              </div>
            </div>
          </div>

          {/* Notes */}
          {session.notes && (
            <div className="bg-sage-100/70 p-3 rounded-2xl border border-sage-200">
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted flex items-center gap-1 mb-1">
                <FileText className="w-3.5 h-3.5" /> Block Notes
              </span>
              <p className="text-xs text-charcoal font-medium whitespace-pre-wrap">{session.notes}</p>
            </div>
          )}

          {/* Reschedule History */}
          {historyList.length > 0 && (
            <div className="p-3 bg-sage-200/60 border border-sage-300 rounded-2xl">
              <span className="text-xs font-black uppercase tracking-wider text-charcoal flex items-center gap-1 mb-2">
                <History className="w-4 h-4 text-charcoal-muted" />
                <span>Reschedule History ({historyList.length})</span>
              </span>
              <div className="space-y-1.5">
                {historyList.map((entry, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-charcoal bg-white p-2.5 rounded-xl border border-sage-300 flex items-center justify-between"
                  >
                    <div>
                      Originally scheduled: <strong>{entry.previousDate}</strong> at {formatDisplayTime(entry.previousStartTime)}
                      {entry.reason && <span className="block text-charcoal-muted text-[11px] font-medium">Reason: {entry.reason}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="p-4 bg-cream-card border-t border-sage-200 space-y-2">
          {isCompleted ? (
            <button
              onClick={() => {
                onClose();
                onUndoComplete(session);
              }}
              className="w-full py-2.5 bg-sage-200 hover:bg-sage-300 text-charcoal text-xs font-black rounded-full transition flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Undo Completion (Revert to Upcoming)</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                onQuickComplete(session);
              }}
              className="w-full py-2.5 bg-charcoal hover:bg-black text-white text-xs font-black rounded-full transition flex items-center justify-center gap-1.5 min-h-[44px] shadow-soft"
            >
              <CheckCircle2 className="w-4 h-4 text-mustard-card" />
              <span>Mark Completed & Record Study Time</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onEdit(session);
              }}
              className="flex-1 py-2 px-3 bg-white hover:bg-sage-100 border border-sage-300 text-charcoal text-xs font-bold rounded-full transition flex items-center justify-center gap-1 min-h-[42px]"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>Edit Block</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onReschedule(session);
              }}
              className="flex-1 py-2 px-3 bg-white hover:bg-sage-100 border border-sage-300 text-charcoal text-xs font-bold rounded-full transition flex items-center justify-center gap-1 min-h-[42px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reschedule</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onDelete(session);
              }}
              className="py-2 px-3.5 bg-white hover:bg-rose-50 border border-rose-300 text-rose-700 text-xs font-bold rounded-full transition flex items-center justify-center min-h-[42px]"
              aria-label="Delete session"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
