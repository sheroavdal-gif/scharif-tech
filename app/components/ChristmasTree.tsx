/** Decorative Christmas tree with a glowing star and twinkling ornaments. */
const ornaments = [
  [100, 92, "#fde68a"], [82, 120, "#ffffff"], [118, 132, "#fca5a5"],
  [70, 160, "#fde68a"], [128, 168, "#ffffff"], [100, 150, "#fca5a5"],
  [58, 200, "#ffffff"], [92, 192, "#fde68a"], [140, 206, "#fde68a"], [116, 214, "#ffffff"],
] as const;

export default function ChristmasTree({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="treeGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#14532d" />
        </linearGradient>
        <radialGradient id="starGlow">
          <stop offset="0" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="38" r="34" fill="url(#starGlow)" className="tree-star-glow" />
      <polygon points="100,50 140,110 120,110 160,170 136,170 176,234 24,234 64,170 40,170 80,110 60,110" fill="url(#treeGreen)" />
      {/* Garland */}
      <path d="M72 112 Q100 128 128 112 M58 172 Q100 194 142 172" stroke="#fde68a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
      <rect x="88" y="234" width="24" height="30" rx="3" fill="#78350f" />
      {ornaments.map(([cx, cy, color], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill={color} className="tree-light" style={{ animationDelay: `${(i * 0.37) % 2}s` }} />
      ))}
      <polygon points="100,18 106,34 123,34 109,44 115,60 100,50 85,60 91,44 77,34 94,34" fill="#fde047" />
    </svg>
  );
}
