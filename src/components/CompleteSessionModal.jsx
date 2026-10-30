import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, BookOpen } from 'lucide-react';
import { getSubjectById, getChapterById, getTopicById } from '../data/sampleHscSyllabus.js';
import { formatDurationHuman } from '../utils/timeUtils.js';

export default function CompleteSessionModal({
  isOpen,
  onClose,
  session,
  onConfirmComplete,
}) {
  const [actualMinutes, setActualMinutes] = useState(60);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (session) {
      setActualMinutes(session.actualDurationMinutes || session.plannedDurationMinutes || 60);
      setNotes(session.notes || '');
    }
  }, [session, isOpen]);

  if (!isOpen || !session) return null;

  const subject = getSubjectById(session.subjectId);
  const chapter = getChapterById(session.chapterId);
  const topic = getTopicById(session.topicId);

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmComplete(session, Number(actualMinutes), notes);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="complete-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-olive-light text-olive-deep flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h2 id="complete-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
                Complete Study Block
              </h2>
              <p className="text-xs text-charcoal-muted font-medium">Record actual minutes spent</p>
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
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="bg-sage-100/70 border border-sage-200 rounded-2xl p-3.5">
            <span
              className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-1"
              style={{
                backgroundColor: subject?.tagBg || '#EAEFE6',
                color: subject?.tagText || '#2B3728',
              }}
            >
              {subject?.name}
            </span>
            <h3 className="text-sm font-black text-charcoal">{chapter?.name}</h3>
            <p className="text-xs text-charcoal-muted mt-0.5 font-medium">{topic?.name}</p>
            <div className="mt-2 text-xs text-charcoal-muted font-bold">
              Planned Duration: {formatDurationHuman(session.plannedDurationMinutes)}
            </div>
          </div>

          {/* Actual Duration Input */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Actual Time Studied (Minutes) <span className="text-rose-600">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="600"
                required
                value={actualMinutes}
                onChange={(e) => setActualMinutes(Math.max(1, Number(e.target.value)))}
                className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-base font-black text-charcoal focus:outline-hidden focus:ring-2 focus:ring-olive-card min-h-[46px]"
              />
              <span className="text-xs font-black text-olive-deep bg-olive-light px-3.5 py-3 rounded-2xl border border-sage-300 whitespace-nowrap">
                {formatDurationHuman(actualMinutes)}
              </span>
            </div>
            <p className="text-[11px] text-charcoal-muted mt-1.5 font-medium">
              🌿 Your daily study target updates strictly from this recorded study time.
            </p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Accomplishment / Notes <span className="text-charcoal-muted font-normal">(Optional)</span>
            </label>
            <textarea
              rows="2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Completed all numerical problems, revised formula sheet..."
              className="w-full px-3.5 py-2 text-sm border border-sage-300 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-olive-card resize-none font-medium"
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
              className="w-full sm:w-auto px-6 py-3 bg-charcoal hover:bg-black text-white text-xs font-black rounded-full shadow-soft transition min-h-[46px] flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4 text-mustard-card" />
              <span>Confirm & Record Progress</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
