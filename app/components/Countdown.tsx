"use client";

import { useEffect, useState } from "react";

/** "Ends in 3d 04h 12m 09s" ticking down to `until`. Renders nothing on the
 * server (the time would be stale by the time the page is read). */
export default function Countdown({ until }: { until: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = Date.parse(until);
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [until]);

  if (left === null || left === 0) return null;
  const s = Math.floor(left / 1000);
  const parts: [number, string][] = [
    [Math.floor(s / 86400), "days"],
    [Math.floor((s % 86400) / 3600), "hours"],
    [Math.floor((s % 3600) / 60), "min"],
    [s % 60, "sec"],
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3" aria-label="Time left of the offer">
      {parts.map(([value, label]) => (
        <div key={label} className="min-w-[3.6rem] sm:min-w-[4.25rem] rounded-2xl border border-amber-300/30 bg-white/5 px-2 sm:px-3 py-2 text-center">
          <div className="text-2xl md:text-3xl font-bold tabular-nums text-amber-200">{String(value).padStart(2, "0")}</div>
          <div className="text-[0.6rem] uppercase tracking-[0.15em] text-white/60">{label}</div>
        </div>
      ))}
    </div>
  );
}
