/** Background for the "Start a project" section: soft orange, rose and
 * amber light drifting slowly over a near-black base, in the site's own
 * colours. Pure CSS (see .gradient-blob in globals.css) - nothing to
 * download, and it stands still for visitors who prefer reduced motion. */
export default function GradientFlowBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-zinc-950">
      <div className="gradient-blob gradient-blob-a -top-1/3 -left-1/4 h-[44rem] w-[44rem] bg-orange-500/35" />
      <div className="gradient-blob gradient-blob-b top-1/4 -right-1/4 h-[40rem] w-[40rem] bg-rose-500/25" />
      <div className="gradient-blob gradient-blob-c -bottom-1/3 left-1/4 h-[38rem] w-[38rem] bg-amber-400/20" />
      {/* Fine grain so the gradients don't band on large screens. */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />
      <div className="absolute inset-0 bg-zinc-950/35" />
    </div>
  );
}
