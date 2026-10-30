import React from 'react';
import { Home, BookOpen, Calendar, BarChart3 } from 'lucide-react';

export default function BottomNav({ activeNav = 'routine', onNavChange }) {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
    { id: 'routine', label: 'Routine', icon: Calendar },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
  ];

  return (
    <nav
      aria-label="Navigation"
      className="fixed bottom-0 left-0 right-0 z-30 bg-cream-surface/95 backdrop-blur-md border-t border-sage-300/60 py-2 px-4 shadow-[0_-4px_24px_rgba(26,33,24,0.03)]"
    >
      <div className="max-w-md sm:max-w-xl lg:max-w-3xl mx-auto flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;

          return (
            <button
              key={item.id}
              data-nav-id={item.id}
              aria-label={`Navigate to ${item.label}`}
              onClick={() => onNavChange(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 sm:px-4 rounded-2xl transition-all min-h-[46px] group cursor-pointer ${
                isActive
                  ? 'text-charcoal font-bold'
                  : 'text-charcoal-muted hover:text-charcoal font-medium'
              }`}
            >
              <div
                className={`w-9 h-7 rounded-full flex items-center justify-center transition-all ${
                  isActive ? 'bg-sage-200/70 text-olive-card scale-105' : 'text-charcoal-muted group-hover:text-charcoal'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              </div>
              <span className={`text-[11px] leading-tight mt-0.5 ${isActive ? 'font-bold text-charcoal' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
