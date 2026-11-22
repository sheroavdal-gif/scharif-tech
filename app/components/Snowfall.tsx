/** Soft falling snow inside its (relative, overflow-hidden) parent. Flake
 * positions come from a fixed formula, so server and client render the same
 * markup. Reduced-motion users get no snow (see `.snowflake` in globals.css). */
const flakes = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 3 + ((i * 7) % 5),
  duration: 8 + ((i * 13) % 9),
  delay: -((i * 11) % 17),
  drift: ((i * 5) % 30) - 15,
  opacity: 0.45 + ((i * 3) % 5) / 10,
}));

export default function Snowfall() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="snowflake absolute -top-3 rounded-full bg-white"
          style={
            {
              left: `${f.left}%`,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
              "--drift": `${f.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
