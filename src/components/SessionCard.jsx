import React, { useState, useRef, useEffect } from 'react';
import {
  MoreVertical,
  Calendar,
  RotateCcw,
  Edit2,
  Trash2,
  BookOpen,
  ArrowRight,
  Check,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { getSubjectById, getChapterById, getTopicById } from '../data/sampleHscSyllabus.js';
import { formatDisplayTime, calculateEndTime, formatDurationHuman } from '../utils/timeUtils.js';

export default function SessionCard({
  session,
  onOpenDetails,
  onQuickComplete,
  onEdit,
  onReschedule,
  onDelete,
  onUndoComplete,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const subject = getSubjectById(session.subjectId);
  const chapter = getChapterById(session.chapterId);
  const topic = getTopicById(session.topicId);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const endTimeStr = calculateEndTime(session.startTime, session.plannedDurationMinutes);
  const isCompleted = session.status === 'completed';
  const isNeedsAttention = session.status === 'needs_attention';

  return (
    <div
      className={`bg-cream-surface rounded-3xl border transition-all relative overflow-hidden shadow-soft ${
        isCompleted
          ? 'border-sage-200/60 bg-cream-surface/80'
          : isNeedsAttention
          ? 'border-amber-300 bg-amber-50/40'
          : 'border-sage-200/90 hover:border-olive-subtle'
      }`}
    >
      <div className="p-3.5 sm:p-4 flex items-start gap-3">
        {/* Minimal Checklist Box */}
        <button
          onClick={() => {
            if (isCompleted) {
              onUndoComplete(session);
            } else {
              onQuickComplete(session);
            }
          }}
          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all min-w-[24px] min-h-[24px] ${
            isCompleted
              ? 'bg-olive-card text-white ring-2 ring-olive-subtle/30'
              : isNeedsAttention
              ? 'border-2 border-amber-500 bg-amber-50 hover:bg-amber-100'
              : 'border-2 border-sage-400 bg-white hover:border-olive-card'
          }`}
          aria-label={isCompleted ? 'Mark incomplete' : 'Mark completed'}
        >
          {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </button>

        {/* Content Body */}
        <div className="flex-1 min-w-0">
          {/* Top row: Subject Tag, Time, Status badge & Overflow Menu */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full border border-black/5"
                style={{
                  backgroundColor: subject?.tagBg || '#EAEFE6',
                  color: subject?.tagText || '#2B3728',
                }}
              >
                {subject?.name || 'Subject'}
              </span>

              <span className="text-[11px] font-semibold text-charcoal-muted">
                {formatDisplayTime(session.startTime)} – {formatDisplayTime(endTimeStr)}
              </span>

              {isCompleted ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-olive-light text-olive-deep">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                  <span>Completed</span>
                </span>
              ) : isNeedsAttention ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  <AlertCircle className="w-2.5 h-2.5 text-amber-700" />
                  <span>Needs Attention</span>
                </span>
              ) : null}
            </div>

            {/* Compact Overflow Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 text-charcoal-muted hover:text-charcoal hover:bg-sage-100 rounded-lg transition min-w-[32px] min-h-[32px] flex items-center justify-center"
                aria-label="More session actions"
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                <MoreVertical className="w-3.5 h-3.5" />
              </button>

              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-1 w-44 bg-cream-surface rounded-2xl shadow-modal border border-sage-300 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-100"
                >
                  <button
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenDetails(session);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-charcoal hover:bg-sage-100 flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-charcoal-muted" />
                    <span>View Details</span>
                  </button>

                  <button
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      onEdit(session);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-charcoal hover:bg-sage-100 flex items-center gap-2"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-charcoal-muted" />
                    <span>Edit Block</span>
                  </button>

                  <button
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      onReschedule(session);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-charcoal hover:bg-sage-100 flex items-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-charcoal-muted" />
                    <span>Reschedule</span>
                  </button>

                  {isCompleted ? (
                    <button
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        onUndoComplete(session);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-olive-card hover:bg-sage-100 flex items-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-olive-subtle" />
                      <span>Undo Completion</span>
                    </button>
                  ) : (
                    <button
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        onQuickComplete(session);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-olive-card hover:bg-sage-100 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-olive-card" />
                      <span>Mark Done</span>
                    </button>
                  )}

                  <div className="h-px bg-sage-200 my-1" />

                  <button
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      onDelete(session);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50 flex items-center gap-2"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                    <span>Delete Block</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Title & Topic: Clean Typography WITHOUT distorted strikethrough */}
          <div
            onClick={() => onOpenDetails(session)}
            className="cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenDetails(session);
            }}
          >
            <h4
              className={`text-sm font-bold tracking-tight transition-colors ${
                isCompleted
                  ? 'text-charcoal/50'
                  : 'text-charcoal group-hover:text-olive-card'
              }`}
            >
              {chapter?.name || 'Chapter'}
            </h4>

            <p className="text-xs text-charcoal-muted mt-0.5 flex items-center gap-1.5 font-medium line-clamp-1">
              <BookOpen className="w-3 h-3 text-charcoal-muted shrink-0" />
              <span>{topic?.name || 'Topic'}</span>
            </p>
          </div>

          {/* Bottom row: Duration and Status / Quick action */}
          <div className="mt-2.5 pt-2 border-t border-sage-200/80 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-charcoal-muted">
              <span>Duration: {formatDurationHuman(session.plannedDurationMinutes)}</span>
              {isCompleted && Number(session.actualDurationMinutes) > 0 && (
                <span className="text-olive-deep bg-olive-light px-2 py-0.5 rounded-full font-bold">
                  Studied {formatDurationHuman(session.actualDurationMinutes)}
                </span>
              )}
            </div>

            {isNeedsAttention && (
              <button
                onClick={() => onReschedule(session)}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-[11px] font-bold rounded-full transition shadow-soft"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Recover Time</span>
              </button>
            )}

            {!isNeedsAttention && !isCompleted && (
              <button
                onClick={() => onQuickComplete(session)}
                className="text-xs font-bold text-olive-card hover:underline"
              >
                Mark Complete →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
