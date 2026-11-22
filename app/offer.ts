/** Seasonal campaign on the home page, picked by date (Stockholm time):
 * Black Friday until Nov 30, Christmas Dec 1-31, nothing after that.
 * The home page re-renders hourly (`revalidate` in page.tsx), so the switch
 * happens on its own. Delete this file and its uses once the campaign is over. */
export type Offer = "blackfriday" | "christmas";

export const BLACK_FRIDAY_END = "2026-11-30T23:00:00Z"; // Dec 1 00:00 Stockholm
const CHRISTMAS_END = "2026-12-31T23:00:00Z"; // Jan 1 00:00 Stockholm

export function currentOffer(now = Date.now()): Offer | null {
  if (now < Date.parse(BLACK_FRIDAY_END)) return "blackfriday";
  if (now < Date.parse(CHRISTMAS_END)) return "christmas";
  return null;
}

export const offerCopy = {
  blackfriday: {
    nav: "Black Friday",
    shareTitle: "Black Friday at Avdalyan Tech",
    shareText: "Black Friday: half price on websites & apps until November 30 - Avdalyan Tech 🖤",
    ogTitle: "Black Friday: half price on websites & apps",
    ogDescription: "Every website and app booked by November 30 is built at half our normal price.",
    ogImage: "/og-black-friday.png",
    storyImage: "/story-black-friday.png",
  },
  christmas: {
    nav: "December gift",
    shareTitle: "A Christmas gift from Avdalyan Tech",
    shareText: "Half price on websites & apps all of December - a Christmas gift from Avdalyan Tech 🎁",
    ogTitle: "Half price on websites & apps - all of December",
    ogDescription: "A Christmas gift from Avdalyan Tech: every website and app booked in December is built at half our normal price.",
    ogImage: "/og-december-gift.png",
    storyImage: "/story-december-gift.png",
  },
} as const;
