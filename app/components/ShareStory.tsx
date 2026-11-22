"use client";

/** Instagram/Facebook/Snapchat stories only accept an image, not a link - so
 * this shares a ready-made vertical story image through the phone's share
 * sheet (pick Instagram -> Story). Where sharing files isn't supported
 * (desktop), it downloads the image instead. */
export default function ShareStory({ image, className = "" }: { image: string; className?: string }) {
  async function shareStory() {
    try {
      const blob = await (await fetch(image)).blob();
      const file = new File([blob], image.slice(1), { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file] });
        return;
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return; // user closed the sheet
    }
    const a = document.createElement("a");
    a.href = image;
    a.download = image.slice(1);
    a.click();
  }

  return (
    <button
      type="button"
      onClick={shareStory}
      className={`inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-white underline underline-offset-4 decoration-amber-200/50 transition ${className}`}
    >
      <span aria-hidden="true">📸</span> Post it to your story
    </button>
  );
}
