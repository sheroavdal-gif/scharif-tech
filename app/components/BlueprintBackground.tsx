/** Background for the Process section: a faint architect's blueprint (fine +
 * major grid, dimension lines, a crosshair) with a soft orange light sweeping
 * across it. Pure CSS/SVG - nothing to download; the sweep stands still for
 * visitors who prefer reduced motion (see .blueprint-sweep in globals.css). */
export default function BlueprintBackground() {
  const line = "rgba(24,24,27,0.10)";
  const accent = "rgba(234,88,12,0.45)";
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid, faded out toward the edges */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(24,24,27,0.09) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(24,24,27,0.09) 1px, transparent 1px)",
            "linear-gradient(rgba(24,24,27,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(24,24,27,0.04) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
          backgroundPosition: "center",
        }}
      />

      {/* Dimension lines + crosshair, drawn like annotations on a drawing */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <defs>
          <marker id="bp-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={accent} />
          </marker>
        </defs>
        <g strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none">
          <line x1="80" y1="70" x2="920" y2="70" stroke={accent} markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" vectorEffect="non-scaling-stroke" />
          <line x1="80" y1="55" x2="80" y2="85" stroke={accent} vectorEffect="non-scaling-stroke" />
          <line x1="920" y1="55" x2="920" y2="85" stroke={accent} vectorEffect="non-scaling-stroke" />
          <line x1="960" y1="160" x2="960" y2="860" stroke={line} markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" vectorEffect="non-scaling-stroke" />
          <line x1="30" y1="540" x2="200" y2="540" stroke={line} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
          <line x1="800" y1="930" x2="980" y2="930" stroke={line} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
      <div className="absolute right-[6%] bottom-[12%] h-28 w-28 rounded-full border border-orange-600/25">
        <div className="absolute left-1/2 -top-4 -bottom-4 w-px bg-orange-600/25" />
        <div className="absolute top-1/2 -left-4 -right-4 h-px bg-orange-600/25" />
        <div className="absolute inset-6 rounded-full border border-dashed border-zinc-900/15" />
      </div>
      <p className="absolute left-[8%] top-[3.5%] font-mono text-[10px] tracking-[0.2em] text-orange-700/60">SCALE 1:1 — PLAN</p>
      <p className="absolute right-[6%] bottom-[5%] font-mono text-[10px] tracking-[0.2em] text-zinc-500/70">REV. 03 · AVDALYAN TECH</p>

      {/* Soft orange light sweeping slowly across the drawing */}
      <div className="blueprint-sweep absolute inset-y-0 w-[45%] bg-[linear-gradient(90deg,transparent,rgba(255,106,0,0.10),transparent)]" />
    </div>
  );
}
