import React from 'react';
import { Trash2 } from 'lucide-react';
import { getSubjectById, getChapterById } from '../data/sampleHscSyllabus.js';

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  session,
  onConfirmDelete,
}) {
  if (!isOpen || !session) return null;

  const subject = getSubjectById(session.subjectId);
  const chapter = getChapterById(session.chapterId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-sm rounded-3xl shadow-modal border border-sage-300 p-5 animate-in zoom-in-95 duration-200">
        <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mb-3 border border-rose-200">
          <Trash2 className="w-5 h-5" />
        </div>

        <h2 id="delete-modal-title" className="text-base font-black uppercase tracking-tight text-charcoal">
          Delete Study Block?
        </h2>

        <p className="text-xs text-charcoal-muted mt-1 font-medium">
          Are you sure you want to delete this study block for{' '}
          <strong className="text-charcoal">{subject?.name}</strong> (
          {chapter?.name})?
        </p>

        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-charcoal-muted hover:text-charcoal transition min-h-[44px]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirmDelete(session);
              onClose();
            }}
            className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 active:scale-95 text-white text-xs font-black rounded-full transition shadow-soft min-h-[44px] flex items-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Yes, Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
