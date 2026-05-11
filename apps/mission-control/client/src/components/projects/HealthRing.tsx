interface HealthRingProps {
  value: number; // 0..100
  size?: number;
  stroke?: number;
}

export function HealthRing({ value, size = 56, stroke = 5 }: HealthRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (clamped / 100) * c;

  const tone = clamped >= 85 ? '#4ade80' : clamped >= 60 ? '#00F0FF' : clamped >= 40 ? '#FFB84D' : '#FF6B6B';

  return (
    <div
      role="img"
      aria-label={`Health score: ${clamped} out of 100`}
      className="relative inline-grid place-items-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--border-subtle)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={tone}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute text-sm font-mono font-semibold" style={{ color: tone }}>
        {clamped}
      </span>
    </div>
  );
}
