"use client";

import { useState } from "react";

const SHARE_URL = "https://avdalyan.world/#gift";
const SHARE_TEXT = "Half price on websites & apps all of December - a Christmas gift from Avdalyan Tech 🎁";

/** "Share the gift" button: opens the phone's native share sheet where there
 * is one, otherwise shows links to the usual social networks + copy link. */
export default function ShareGift() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = encodeURIComponent(SHARE_URL);
  const text = encodeURIComponent(SHARE_TEXT);
  const links = [
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`],
    ["X", `https://twitter.com/intent/tweet?text=${text}&url=${url}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${url}`],
    ["WhatsApp", `https://wa.me/?text=${text}%20${url}`],
  ];

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "A Christmas gift from Avdalyan Tech", text: SHARE_TEXT, url: SHARE_URL });
        return;
      } catch (err) {
        if ((err as Error).name === "AbortError") return; // user closed the sheet
      }
    }
    setOpen((v) => !v);
  }

  async function copy() {
    await navigator.clipboard.writeText(SHARE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={share}
        className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/40 px-8 py-4 rounded-full font-semibold text-center hover:bg-white/20 transition"
      >
        Share the gift <span aria-hidden="true">🎁</span>
      </button>
      {open ? (
        <div className="absolute z-20 left-0 bottom-full mb-3 flex flex-wrap gap-2 rounded-2xl bg-white p-3 shadow-2xl w-max max-w-[18rem]">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-full px-4 py-2 transition"
            >
              {label}
            </a>
          ))}
          <button type="button" onClick={copy} className="text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-full px-4 py-2 transition">
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
