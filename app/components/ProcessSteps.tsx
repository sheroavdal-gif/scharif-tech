"use client";

import { useEffect, useRef, useState } from "react";

/** The three Process steps joined by an orange line that draws itself as the
 * section scrolls into view; each step's dot lights up when the line reaches
 * it. Horizontal on desktop, vertical on mobile. Reduced-motion visitors see
 * the finished line straight away. */
export default function ProcessSteps({ steps }: { steps: string[][] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [thresholds, setThresholds] = useState<number[]>([0, 0.5, 1]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)");

    const measure = () => {
      const r = el.getBoundingClientRect();
      setThresholds(
        dotRefs.current.map((d) => {
          if (!d) return 0;
          const dr = d.getBoundingClientRect();
          return desktop.matches
            ? (dr.left + dr.width / 2 - r.left) / r.width
            : (dr.top + dr.height / 2 - r.top) / r.height;
        }),
      );
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Line starts when the steps' top passes 85% of the screen and is
      // complete when it reaches 40% (desktop) / its bottom reaches 75% (mobile).
      const p = reduced
        ? 1
        : desktop.matches
        ? (vh * 0.85 - r.top) / (vh * 0.45)
        : (vh * 0.75 - r.top) / r.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    desktop.addEventListener("change", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative grid md:grid-cols-3 gap-12 md:gap-10 mb-24 pl-10 md:pl-0">
      {/* Track + drawn line: horizontal (md+) */}
      <div className="hidden md:block absolute left-0 right-0 top-0 h-[2px] bg-zinc-900/10" />
      <div
        className="hidden md:block absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-orange-500 to-rose-500 shadow-[0_0_12px_rgba(255,106,0,0.6)]"
        style={{ transform: `scaleX(${progress})` }}
      />
      {/* Track + drawn line: vertical (mobile) */}
      <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-[2px] bg-zinc-900/10" />
      <div
        className="md:hidden absolute left-[7px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-orange-500 to-rose-500 shadow-[0_0_12px_rgba(255,106,0,0.6)]"
        style={{ transform: `scaleY(${progress})` }}
      />

      {steps.map(([number, title, text], i) => {
        const lit = progress > 0 && progress >= (thresholds[i] ?? 0) - 0.001;
        return (
          <div key={number} className="relative md:pt-8">
            <span
              ref={(d) => {
                dotRefs.current[i] = d;
              }}
              className={`absolute -left-10 top-1 md:left-0 md:-top-[7px] h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                lit
                  ? "border-orange-500 bg-orange-500 shadow-[0_0_0_6px_rgba(255,106,0,0.15),0_0_18px_rgba(255,106,0,0.7)]"
                  : "border-zinc-900/20 bg-[#f4efe7]"
              }`}
            />
            <div className={`transition-all duration-700 ${lit ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"}`}>
              <p className="font-mono text-orange-600 mb-4">[ {number} ]</p>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-zinc-700 leading-relaxed">{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
