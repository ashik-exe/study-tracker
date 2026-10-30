import React from 'react';

export default function CircularProgress({
  percent = 0,
  size = 48,
  strokeWidth = 4,
  color = '#3D4739',
  trackColor = '#E6EDE2',
  showLabel = true,
  labelClassName = 'text-xs font-bold text-charcoal',
  className = '',
}) {
  const safePercent = Math.min(100, Math.max(0, Number(percent) || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (safePercent / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          className="transition-colors"
        />
        {/* Filled Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showLabel && (
        <span
          className={`absolute inset-0 flex items-center justify-center text-center font-mono leading-none select-none ${labelClassName}`}
        >
          {Math.round(safePercent)}%
        </span>
      )}
    </div>
  );
}
