import Reveal from "./Reveal";
import Snowfall from "./Snowfall";
import ChristmasTree from "./ChristmasTree";
import ShareGift from "./ShareGift";
import ShareStory from "./ShareStory";
import Countdown from "./Countdown";
import { BLACK_FRIDAY_END, offerCopy, type Offer } from "../offer";

/** The seasonal half-price campaign as a wrapped gift box: a red Christmas
 * present in December, a black-and-gold one for Black Friday. */
export default function OfferSection({ offer }: { offer: Offer }) {
  const bf = offer === "blackfriday";
  const copy = offerCopy[offer];

  return (
    <section id="gift" className="relative py-24 px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div
            className={`relative overflow-hidden rounded-[2.5rem] text-white shadow-2xl ${
              bf ? "bg-gradient-to-br from-zinc-950 via-zinc-900 to-black shadow-black/40" : "bg-gradient-to-br from-rose-700 via-red-600 to-rose-800 shadow-rose-900/30"
            }`}
          >
            {/* Wrapping paper: ribbon cross + soft glow */}
            <div aria-hidden="true" className="hidden md:block absolute inset-y-0 left-[30%] w-14 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 opacity-90" />
            <div aria-hidden="true" className="absolute inset-x-0 top-24 h-10 md:h-14 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 opacity-90" />
            <div
              aria-hidden="true"
              className={`absolute inset-0 ${
                bf
                  ? "bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.16),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(251,191,36,0.10),transparent_35%)]"
                  : "bg-[radial-gradient(circle_at_15%_85%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(255,220,120,0.25),transparent_35%)]"
              }`}
            />
            <Snowfall color={bf ? "bg-amber-300" : "bg-white"} />
            {/* Bow where the ribbons cross */}
            <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 md:left-[30%] md:-translate-x-[calc(50%-1.75rem)] top-24 -translate-y-[60%] w-40 h-24">
              <div className="absolute left-1 top-3 w-20 h-14 rounded-[50%] border-[10px] border-amber-300 -rotate-[20deg]" />
              <div className="absolute right-1 top-3 w-20 h-14 rounded-[50%] border-[10px] border-amber-300 rotate-[20deg]" />
              <div className="absolute left-1/2 top-1/2 w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200 to-amber-400 shadow-lg" />
            </div>

            <div className="relative grid md:grid-cols-[30%_1fr] gap-10 px-8 md:px-14 pt-48 pb-14 md:pt-44">
              <div className="relative flex justify-center items-end md:items-start">
                {bf ? (
                  <div className="gift-tag flex flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-yellow-200 via-amber-300 to-amber-500 text-zinc-950 px-10 py-8 shadow-2xl shadow-amber-500/20">
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">Black Friday</span>
                    <span className="text-7xl md:text-8xl font-black leading-none mt-2">50%</span>
                    <span className="text-sm font-bold uppercase tracking-[0.3em] mt-1">off</span>
                  </div>
                ) : (
                  <>
                    <ChristmasTree className="w-40 md:w-56 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />
                    <div className="gift-tag absolute -right-1 bottom-2 md:right-auto md:-left-2 md:top-48 md:bottom-auto inline-flex flex-col items-center justify-center rounded-3xl bg-white text-rose-700 px-6 py-4 shadow-xl">
                      <span className="text-4xl md:text-5xl font-black leading-none">50%</span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] mt-1">off</span>
                    </div>
                  </>
                )}
              </div>

              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200 mb-4">
                  {bf ? "Black Friday at Avdalyan Tech" : "A gift from all of us at Avdalyan Tech"}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                  {bf ? (
                    <>
                      Black Friday: <span className="text-amber-300">half price</span>{" "}on websites &amp; apps.
                    </>
                  ) : (
                    "Half price on websites & apps - all of December."
                  )}
                </h2>
                <p className="text-lg md:text-xl text-white/90 mt-6 leading-relaxed">
                  {bf
                    ? "Every website and app booked by November 30 is built at half our normal price. "
                    : "Our Christmas present to you: every website and app booked in December is built at half our normal price. "}
                  Websites from <span className="line-through text-white/60">$5,000</span> <span className="font-bold text-amber-200">$2,500</span>.
                </p>
                {bf ? (
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">Deal ends in</p>
                    <Countdown until={BLACK_FRIDAY_END} />
                  </div>
                ) : null}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
                  <a
                    href="#start"
                    className={`px-8 py-4 rounded-full font-semibold text-center hover:-translate-y-1 transition shadow-xl ${
                      bf ? "bg-gradient-to-r from-yellow-200 to-amber-400 text-zinc-950 hover:from-yellow-100 hover:to-amber-300" : "bg-white text-rose-700 hover:bg-amber-100"
                    }`}
                  >
                    {bf ? "Claim the deal" : "Unwrap your gift"} <span aria-hidden="true">→</span>
                  </a>
                  <ShareGift label={bf ? "Share the deal ✨" : "Share the gift 🎁"} title={copy.shareTitle} text={copy.shareText} />
                </div>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <ShareStory image={copy.storyImage} />
                  <p className="text-sm text-white/75">
                    {bf ? "Valid for websites and apps booked by November 30, 2026." : "Valid for websites and apps booked December 1-31, 2026."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
