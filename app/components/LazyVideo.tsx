"use client";

import { useEffect, useRef, useState } from "react";

/** A muted, looping background video that only starts downloading when it's
 * about to scroll into view - visitors who never get that far don't pay for
 * it. The poster shows until then. */
export default function LazyVideo({ src, poster, className = "" }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} autoPlay muted loop playsInline preload="none" poster={poster} className={className}>
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
}
