import React, { useState } from 'react';
import { X, Target, Check } from 'lucide-react';
import { formatDurationHuman } from '../utils/timeUtils.js';

export default function TargetConfigModal({
  isOpen,
  onClose,
  preferences,
  onSavePreferences,
}) {
  const currentTarget = preferences?.dailyStudyTargetMinutes || 240;
  const currentBuffer = preferences?.preferredBufferMinutes || 15;

  const [targetHours, setTargetHours] = useState(Math.floor(currentTarget / 60));
  const [targetMins, setTargetMins] = useState(currentTarget % 60);
  const [bufferMins, setBufferMins] = useState(currentBuffer);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    const totalTarget = Math.max(15, Number(targetHours) * 60 + Number(targetMins));
    onSavePreferences({
      ...preferences,
      dailyStudyTargetMinutes: totalTarget,
      preferredBufferMinutes: Math.max(0, Number(bufferMins)),
    });
    onClose();
  };

  const calculatedTotal = Number(targetHours) * 60 + Number(targetMins);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="target-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-cream-surface w-full max-w-sm rounded-t-3xl sm:rounded-3xl shadow-modal border border-sage-300 overflow-hidden animate-in slide-in-from-bottom duration-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-sage-200 bg-cream-card">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-olive-light text-olive-deep flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h2 id="target-modal-title" className="text-sm font-black text-charcoal uppercase tracking-tight">
                Daily Study Target
              </h2>
              <p className="text-xs text-charcoal-muted font-medium">Configure daily goals & buffers</p>
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

        <form onSubmit={handleSave} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Daily Target Hours & Minutes
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="number"
                  min="0"
                  max="16"
                  value={targetHours}
                  onChange={(e) => setTargetHours(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-base font-black text-charcoal min-h-[46px]"
                />
                <span className="text-[10px] font-black uppercase text-charcoal-muted mt-1 block">Hours</span>
              </div>

              <div>
                <input
                  type="number"
                  min="0"
                  max="59"
                  step="5"
                  value={targetMins}
                  onChange={(e) => setTargetMins(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-base font-black text-charcoal min-h-[46px]"
                />
                <span className="text-[10px] font-black uppercase text-charcoal-muted mt-1 block">Minutes</span>
              </div>
            </div>

            <div className="mt-2 text-xs font-black text-charcoal bg-mustard-card/40 p-2.5 rounded-2xl border border-mustard-card flex items-center justify-between">
              <span>Goal:</span>
              <span>{formatDurationHuman(calculatedTotal)} per day</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-charcoal mb-1.5">
              Rest Buffer Between Sessions
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="60"
                step="5"
                value={bufferMins}
                onChange={(e) => setBufferMins(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-white border border-sage-300 rounded-2xl text-base font-black text-charcoal min-h-[46px]"
              />
              <span className="text-xs font-black text-charcoal-muted whitespace-nowrap">Minutes rest</span>
            </div>
            <p className="text-[11px] text-charcoal-muted mt-1 font-medium">
              Used when finding smart free slots to ensure healthy rest between study sessions.
            </p>
          </div>

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
              <Check className="w-4 h-4 text-mustard-card stroke-[2.5]" />
              <span>Save Study Target</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
