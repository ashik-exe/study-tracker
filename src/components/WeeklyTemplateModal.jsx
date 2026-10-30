import React, { useState } from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
} from 'lucide-react';
import {
  HSC_SUBJECTS,
  SAMPLE_SUBJECTS,
  getSubjectById,
  getChapterById,
  getChaptersBySubjectId,
  getTopicsByChapterId,
} from '../data/sampleHscSyllabus.js';
import {
  WEEKDAYS,
  getWeekDates,
  formatDisplayTime,
  formatShortDate,
} from '../utils/timeUtils.js';
import { doIntervalsOverlap } from '../utils/conflictDetector.js';

export default function WeeklyTemplateModal({
  isOpen,
  onClose,
  templates,
  onSaveTemplates,
  onApplyTemplateToWeek,
  selectedDate,
  allSessions,
}) {
  const [activeTab, setActiveTab] = useState('apply'); // 'apply' | 'manage'
  const [newWeekday, setNewWeekday] = useState('Sat');
  const [newSubId, setNewSubId] = useState(SAMPLE_SUBJECTS[0].id);
  const [newChId, setNewChId] = useState(() => getChaptersBySubjectId(SAMPLE_SUBJECTS[0].id)[0]?.id || '');
  const [newTopId, setNewTopId] = useState(() => getTopicsByChapterId(getChaptersBySubjectId(SAMPLE_SUBJECTS[0].id)[0]?.id || '')[0]?.id || '');
  const [newStartTime, setNewStartTime] = useState('09:00');
  const [newDuration, setNewDuration] = useState(60);

  const weekDays = getWeekDates(selectedDate);
  const firstDate = weekDays[0]?.dateStr;
  const lastDate = weekDays[6]?.dateStr;

  if (!isOpen) return null;

  const handleSubjectChange = (subId) => {
    setNewSubId(subId);
    const chs = getChaptersBySubjectId(subId);
    const firstCh = chs[0]?.id || '';
    setNewChId(firstCh);
    const tops = getTopicsByChapterId(firstCh);
    setNewTopId(tops[0]?.id || '');
  };

  const handleChapterChange = (chId) => {
    setNewChId(chId);
    const tops = getTopicsByChapterId(chId);
    setNewTopId(tops[0]?.id || '');
  };

  const handleAddTemplateEntry = (e) => {
    e.preventDefault();
    if (!newSubId || !newChId || !newTopId || !newStartTime) return;

    const newEntry = {
      id: `tpl-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      weekday: newWeekday,
      subjectId: newSubId,
      chapterId: newChId,
      topicId: newTopId,
      startTime: newStartTime,
      plannedDurationMinutes: Number(newDuration),
    };

    onSaveTemplates([...templates, newEntry]);
  };

  const handleDeleteTemplateEntry = (tplId) => {
    onSaveTemplates(templates.filter((t) => t.id !== tplId));
  };

  const previewResults = () => {
    let toAdd = 0;
    let duplicatesSkipped = 0;
    let conflictsFound = 0;

    templates.forEach((tpl) => {
      const targetDay = weekDays.find((d) => d.dayName === tpl.weekday);
      if (!targetDay) return;

      const dateStr = targetDay.dateStr;
      const daySessions = allSessions.filter((s) => s.date === dateStr);

      const isDuplicate = daySessions.some(
        (s) =>
          s.subjectId === tpl.subjectId &&
          s.startTime === tpl.startTime &&
          s.plannedDurationMinutes === tpl.plannedDurationMinutes
      );

      if (isDuplicate) {
        duplicatesSkipped++;
        return;
      }

      const hasConflict = daySessions.some((s) =>
        doIntervalsOverlap(tpl.startTime, tpl.plannedDurationMinutes, s.startTime, s.plannedDurationMinutes)
      );

      if (hasConflict) {
        conflictsFound++;
      }

      toAdd++;
    });

    return { toAdd, duplicatesSkipped, conflictsFound };
  };

  const preview = previewResults();

  const handleConfirmApply = () => {
    onApplyTemplateToWeek(weekDays);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-olive-light text-olive-deep flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 id="template-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
                Master Weekly Routine
              </h2>
              <p className="text-xs text-charcoal-muted font-medium">Reusable schedule across calendar weeks</p>
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

        {/* Tab switcher */}
        <div className="flex p-1 bg-sage-200/70 border-b border-sage-300 mx-5 mt-3 rounded-full">
          <button
            onClick={() => setActiveTab('apply')}
            className={`flex-1 py-1.5 text-xs font-black uppercase tracking-wider rounded-full transition ${
              activeTab === 'apply' ? 'bg-charcoal text-white shadow-soft' : 'text-charcoal-muted'
            }`}
          >
            Apply to Week
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`flex-1 py-1.5 text-xs font-black uppercase tracking-wider rounded-full transition ${
              activeTab === 'manage' ? 'bg-charcoal text-white shadow-soft' : 'text-charcoal-muted'
            }`}
          >
            Manage Routine ({templates.length})
          </button>
        </div>

        {/* Tab 1: Apply to Selected Week */}
        {activeTab === 'apply' && (
          <div className="p-5 space-y-4 overflow-y-auto flex-1">
            <div className="bg-sage-100/70 border border-sage-200 rounded-2xl p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-charcoal-muted block mb-0.5">
                Target Week
              </span>
              <p className="text-sm font-black text-charcoal">
                {formatShortDate(firstDate)} to {formatShortDate(lastDate)}
              </p>
              <p className="text-xs text-charcoal-muted mt-1 font-medium">
                Applying will generate dated study sessions from your master weekly routine without overwriting past completed blocks.
              </p>
            </div>

            {/* Pre-flight validation */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-charcoal">
                Pre-Flight Validation Preview:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 bg-sage-100 border border-sage-300 rounded-2xl text-center">
                  <div className="text-lg font-black text-charcoal">{preview.toAdd}</div>
                  <div className="text-[10px] font-bold text-charcoal-muted">To Schedule</div>
                </div>

                <div className="p-3 bg-olive-light border border-sage-300 rounded-2xl text-center">
                  <div className="text-lg font-black text-olive-deep">
                    {preview.duplicatesSkipped}
                  </div>
                  <div className="text-[10px] font-bold text-olive-deep">Duplicates Skipped</div>
                </div>

                <div className="p-3 bg-amber-100 border border-amber-300 rounded-2xl text-center">
                  <div className="text-lg font-black text-amber-900">
                    {preview.conflictsFound}
                  </div>
                  <div className="text-[10px] font-bold text-amber-900">Overlaps</div>
                </div>
              </div>
            </div>

            {preview.conflictsFound > 0 && (
              <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-900 font-medium">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  Some template blocks share time with already scheduled blocks. You can fine-tune them after applying.
                </span>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={handleConfirmApply}
                disabled={preview.toAdd === 0}
                className="w-full py-3 bg-charcoal hover:bg-black active:scale-[0.98] disabled:opacity-50 text-white text-xs font-black rounded-full shadow-soft transition flex items-center justify-center gap-1.5 min-h-[46px]"
              >
                <CheckCircle2 className="w-4 h-4 text-mustard-card" />
                <span>
                  {preview.toAdd > 0
                    ? `Apply ${preview.toAdd} Sessions to this Week`
                    : 'Template Already Fully Applied'}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Manage Template Entries */}
        {activeTab === 'manage' && (
          <div className="p-5 space-y-4 overflow-y-auto flex-1">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-charcoal">
                Master Template Blocks:
              </span>
              {templates.length === 0 ? (
                <p className="text-xs text-charcoal-muted italic">No template blocks defined yet.</p>
              ) : (
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {templates.map((tpl) => {
                    const sub = getSubjectById(tpl.subjectId);
                    const ch = getChapterById(tpl.chapterId);
                    return (
                      <div
                        key={tpl.id}
                        className="flex items-center justify-between p-2.5 bg-sage-100/70 border border-sage-200 rounded-2xl text-xs"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-charcoal bg-mustard-card/60 px-2 py-0.5 rounded-full text-[10px]">
                              {tpl.weekday}
                            </span>
                            <span className="font-black text-charcoal">{sub?.name}</span>
                            <span className="text-charcoal-muted font-semibold">
                              ({formatDisplayTime(tpl.startTime)}, {tpl.plannedDurationMinutes}m)
                            </span>
                          </div>
                          <div className="text-[11px] text-charcoal-muted truncate max-w-xs mt-0.5 font-medium">
                            {ch?.name}
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteTemplateEntry(tpl.id)}
                          className="p-1.5 text-charcoal-muted hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                          aria-label="Remove template entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Add new template entry */}
            <form onSubmit={handleAddTemplateEntry} className="pt-3 border-t border-sage-200 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-charcoal flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Master Block</span>
              </span>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-charcoal-muted mb-1">Weekday</label>
                  <select
                    value={newWeekday}
                    onChange={(e) => setNewWeekday(e.target.value)}
                    className="w-full p-2 text-xs border border-sage-300 rounded-2xl font-bold bg-white"
                  >
                    {WEEKDAYS.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-charcoal-muted mb-1">Subject</label>
                  <select
                    value={newSubId}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                    className="w-full p-2 text-xs border border-sage-300 rounded-2xl font-bold bg-white"
                  >
                    {HSC_SUBJECTS.map((group) => (
                      <optgroup key={group.id} label={`${group.bengaliName} (${group.name})`}>
                        {group.papers.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.bengaliPaperLabel} — {s.name} (Code: {s.code})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-charcoal-muted mb-1">Chapter</label>
                <select
                  value={newChId}
                  onChange={(e) => handleChapterChange(e.target.value)}
                  className="w-full p-2 text-xs border border-sage-300 rounded-2xl font-semibold bg-white"
                >
                  {getChaptersBySubjectId(newSubId).map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-charcoal-muted mb-1">Start Time</label>
                  <input
                    type="time"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="w-full p-2 text-xs border border-sage-300 rounded-2xl font-bold bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-charcoal-muted mb-1">Duration (min)</label>
                  <input
                    type="number"
                    min="15"
                    max="240"
                    value={newDuration}
                    onChange={(e) => setNewDuration(Number(e.target.value))}
                    className="w-full p-2 text-xs border border-sage-300 rounded-2xl font-bold bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-charcoal hover:bg-black text-white text-xs font-black rounded-full transition min-h-[42px]"
              >
                + Add Block to Master Template
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
