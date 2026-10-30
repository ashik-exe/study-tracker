import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-mustard-card shrink-0" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />;
      default:
        return <Info className="w-4 h-4 text-sage-300 shrink-0" />;
    }
  };

  return (
    <aside
      aria-label="Notification"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm animate-in slide-in-from-top duration-200"
    >
      <div className="flex items-center justify-between p-3.5 bg-charcoal text-cream-surface rounded-2xl shadow-modal border border-white/10 text-xs font-bold">
        <div className="flex items-center gap-2.5">
          {getIcon()}
          <span>{toast.message}</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-white/60 hover:text-white rounded-lg transition"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
