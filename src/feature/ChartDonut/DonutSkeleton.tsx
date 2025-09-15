import type { FC } from 'react';

export const DonutSkeleton: FC = () => {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#3a3a3a" stopOpacity="1" />
          <stop offset="100%" stopColor="#3a3a3a" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="url(#gradient)"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="250"
        strokeDashoffset="0"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};
