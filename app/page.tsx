import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Reveal from "./components/Reveal";
import GradientFlowBackground from "./components/GradientFlowBackground";
import PhoneMock from "./components/PhoneMock";
import SpotlightCard from "./components/SpotlightCard";
import StartProjectForm from "./components/StartProjectForm";
import OfferSection from "./components/OfferSection";
import HeroCube from "./components/HeroCube";
import BlueprintBackground from "./components/BlueprintBackground";
import ProcessSteps from "./components/ProcessSteps";
import { currentOffer, offerCopy } from "./offer";

// Re-render hourly so the seasonal campaign (see offer.ts) switches on its own.
export const revalidate = 3600;

// Share preview (Facebook, LinkedIn, iMessage...) follows the current campaign.
export function generateMetadata(): Metadata {
  const offer = currentOffer();
  if (!offer) return {};
  const c = offerCopy[offer];
  return {
    metadataBase: new URL("https://www.avdalyan.world"),
    openGraph: {
      title: c.ogTitle,
      description: c.ogDescription,
      url: "https://www.avdalyan.world/#gift",
      siteName: "Avdalyan Tech",
      images: [{ url: c.ogImage, width: 1200, height: 630, alt: c.ogTitle }],
      type: "website",
    },
    twitter: { card: "summary_large_image", title: c.ogTitle, description: c.ogDescription, images: [c.ogImage] },
  };
}

const nav = [
  ["Services", "#services"],
  ["Products", "#products"],
  ["Pricing", "#pricing"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
];

const cities =
  "STOCKHOLM • DUBAI • JAKARTA • SINGAPORE • LONDON • NEW YORK • TOKYO • BALI • BERLIN • MOSCOW • PARIS • BANGKOK • LOS ANGELES • MIAMI • TORONTO • VANCOUVER • AMSTERDAM • COPENHAGEN • OSLO • HELSINKI • MADRID • BARCELONA • ROME • MILAN • ZURICH • VIENNA • ISTANBUL • DOHA • RIYADH • ABU DHABI • KUALA LUMPUR • SEOUL • HONG KONG • SHANGHAI • SYDNEY • MELBOURNE • CAPE TOWN •";

const services = [
  {
    tag: "Web",
    title: "Websites & Web Apps",
    line: "Custom-coded, fast, built to convert.",
    items: ["Company websites", "Web applications", "Customer portals", "Internal tools", "E-commerce"],
  },
  {
    tag: "Mobile",
    title: "Mobile Apps",
    line: "iOS and Android, from idea to launch.",
    items: ["iOS apps", "Android apps", "Backend & APIs", "In-app purchases & push notifications", "App Store & Google Play launch"],
  },
  {
    tag: "AI",
    title: "AI & Automation",
    line: "Intelligence built in, not bolted on.",
    items: ["AI assistants", "Workflow automation", "Email & SMS automation", "API & CRM integrations"],
  },
];

const products = [
  {
    name: "Viska",
    // Same as the App Store name, so searching for it finds the right app.
    title: "Viska - Secure Messenger",
    kind: "Messaging app · iOS",
    text: "An end-to-end encrypted messenger for 1:1 and group chats, photos, video and voice messages - no phone number required. Available in 10 languages.",
    accent: "from-orange-400 to-rose-500",
    slug: "viska",
    appStoreUrl: "https://apps.apple.com/app/id6815266943",
    // Optional short status note shown under the card's button. Remove when done.
    notice: "Server update in progress - Viska may be briefly unavailable. We'll be back shortly.",
  },
  {
    name: "Kelvix",
    title: "Kelvix",
    kind: "Product scanner · iOS",
    text: "Scan a product's barcode to see ingredient warnings, packaging safety and a 0-100 health score - with an AI coach that answers your questions about it.",
    accent: "from-emerald-400 to-cyan-500",
    slug: "kelvix",
    // Set once an app is live; without it the card says "Coming soon".
    appStoreUrl: "https://apps.apple.com/app/id6826600822",
  },
];

const pricing = [
  { title: "Website", price: "From $5,000", text: "A custom-coded company website with essential pages, contact flow and mobile-first design.", featured: true },
  { title: "Web App", price: "Custom quote", text: "Portals, dashboards and internal tools - priced by scope after a short discovery call.", featured: false },
  { title: "Mobile App", price: "Custom quote", text: "iOS and Android apps with backend, accounts and in-app purchases - priced by scope.", featured: false },
  { title: "AI & Automation", price: "Custom quote", text: "Assistants, automation and integrations added to new or existing systems.", featured: false },
];

const steps = [
  ["01", "Strategy", "We understand your company, your customers and what your product needs to achieve."],
  ["02", "Design", "A modern visual direction that fits your brand and makes your company look professional."],
  ["03", "Development", "Built with custom code, optimized for speed, mobile and future growth."],
];

const timeline = [
  ["1–2 weeks", "Clean company website with essential pages and contact flow."],
  ["3–4 weeks", "More advanced website with stronger design, sections and content structure."],
  ["5–6 weeks", "Larger build with custom features, automation and business-specific needs."],
];

const faqs = [
  ["How much does a project cost?", "Websites start at $5,000. Apps, web apps and AI projects are quoted individually - tell us about your project in the form below and we'll send you a clear price."],
  ["How long does it take?", "A typical website takes 1–6 weeks depending on size and features. Apps and larger systems are planned together with you, and you get a timeline before we start."],
  ["Do you build mobile apps?", "Yes - apps for both iOS and Android, including the backend behind them. Viska and Kelvix are our own apps, built from the ground up."],
  ["Do you work with clients worldwide?", "Yes. We work remotely with companies all over the world - reach us by email or through the form below."],
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.25em] mb-6 ${light ? "text-orange-400" : "text-orange-600"}`}>{children}</p>
  );
}

/** Looks for a product screenshot in public/products/ (e.g. viska.png) -
 * drop a file there and it replaces the gradient placeholder. */
function productImage(slug: string): string | null {
  for (const ext of ["png", "jpg", "jpeg", "webp"]) {
    if (existsSync(path.join(process.cwd(), "public", "products", `${slug}.${ext}`))) return `/products/${slug}.${ext}`;
  }
  return null;
}

function CityMarquee() {
  return (
    <div className="bg-zinc-950 overflow-hidden py-5">
      <div className="city-track-left text-white/75 text-sm md:text-base font-bold tracking-[8px] whitespace-nowrap">
        <span className="pr-20">{cities}</span>
        <span className="pr-20">{cities}</span>
      </div>
    </div>
  );
}

// Each app has its own legal pages. Viska's keep their original URLs - they're
// already linked from the App Store and the app itself.
const LEGAL_LINKS = [
  {
    app: "Viska",
    links: [
      ["Privacy Policy", "/privacy"],
      ["Terms of Use", "/terms"],
      ["Community Guidelines", "/community-guidelines"],
    ],
  },
  {
    app: "Kelvix",
    links: [
      ["Privacy Policy", "/kelvix/privacy"],
      ["Terms of Use", "/kelvix/terms"],
      ["Community Guidelines", "/kelvix/community-guidelines"],
    ],
  },
];

export default function Home() {
  const offer = currentOffer();
  const navItems = offer ? [[offerCopy[offer].nav, "#gift"], ...nav] : nav;
  return (
    <main className="min-h-screen bg-[#f4efe7] text-zinc-900 relative before:content-[''] before:fixed before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.14),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(0,180,255,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(0,255,120,0.10),transparent_40%)] before:pointer-events-none after:content-[''] after:fixed after:inset-0 after:bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] after:bg-[size:80px_80px] after:pointer-events-none">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-lg">
            Avdalyan <span className="text-orange-500">Tech</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-zinc-600">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-zinc-950 transition">
                {label}
              </a>
            ))}
          </nav>
          <a href="#start" className="bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-600 transition shadow-lg shadow-orange-500/30">
            Start a project
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pb-20 pt-28 text-white bg-[#050505]">
        {/* Dark stage: soft top light + a faint diagonal light streak */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute -left-1/4 right-0 top-[62%] h-40 -rotate-6 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/60" />
        <div className="hero-glow top-24 left-10" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-6 lg:gap-10">
          <HeroCube className="order-first lg:order-last w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[560px] aspect-square mx-auto lg:translate-x-24" />
          <div>
            <p className="text-white/70 mb-6">Avdalyan Tech LLC — where code meets ambition.</p>
            <h1 className="hero-title text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent pb-2">
              We build software that <span className="text-orange-400">performs.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mt-8">
              Custom-coded websites, mobile apps for iOS and Android, and AI automation - for companies that want to move faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#start" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-orange-600 hover:-translate-y-1 transition shadow-xl shadow-orange-500/30">
                Start a project
              </a>
              <a href="#products" className="bg-white/10 backdrop-blur border border-white/30 px-8 py-4 rounded-full font-semibold text-center hover:bg-white/20 transition">
                See our work
              </a>
            </div>
          </div>
        </div>
      </section>

      <CityMarquee />

      {offer ? <OfferSection offer={offer} /> : null}

      {/* Services */}
      <section id="services" className="relative py-32 px-6 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-16">We engineer. You grow.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 120}>
                <SpotlightCard className="h-full rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8">
                  <p className="text-xs font-mono text-orange-600 mb-6">[ {service.tag} ]</p>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-500 mb-8">{service.line}</p>
                  <ul className="space-y-2 text-zinc-700">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-orange-500">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative py-32 px-6 scroll-mt-16 overflow-hidden">
        <div className="hero-glow top-10 right-20" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Our products</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6">Built by us, from the ground up.</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mb-16">
              We don&apos;t just build for clients - we design, build and run our own apps. The same standard goes into every project.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Reveal key={product.name} delay={index * 150}>
                <SpotlightCard className="group h-full rounded-3xl border border-black/10 bg-white p-10 flex flex-col gap-10">
                  <PhoneMock name={product.name} accent={product.accent} image={productImage(product.slug)} />
                  <div>
                    <p className="text-sm text-zinc-500 mb-2">{product.kind}</p>
                    <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{product.text}</p>
                    {"appStoreUrl" in product && product.appStoreUrl ? (
                      <a
                        href={product.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-700 transition-colors rounded-full px-5 py-2"
                      >
                        Download on the App Store
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <p className="mt-6 inline-block text-sm font-semibold text-orange-600 bg-orange-100 rounded-full px-4 py-1.5">
                        Coming soon to the App Store
                      </p>
                    )}
                    {"notice" in product && product.notice ? (
                      <p className="mt-4 flex items-start gap-2 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-2.5">
                        <span aria-hidden="true">ℹ︎</span>
                        <span>{product.notice}</span>
                      </p>
                    ) : null}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-32 px-6 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-16">Clear prices, in USD.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 100}>
                <SpotlightCard
                  className={`h-full rounded-3xl p-8 flex flex-col border ${
                    plan.featured ? "bg-gradient-to-br from-orange-500 to-rose-500 text-white border-transparent shadow-xl shadow-orange-500/30" : "bg-white/80 border-black/10"
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-4 ${plan.featured ? "text-white/90" : "text-zinc-500"}`}>{plan.title}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <p className={`text-sm leading-relaxed flex-1 ${plan.featured ? "text-white/90" : "text-zinc-600"}`}>{plan.text}</p>
                  <a href="#start" className={`mt-8 text-sm font-semibold transition ${plan.featured ? "text-white hover:text-white/80" : "text-orange-600 hover:text-orange-500"}`}>
                    Get a quote <span className="card-arrow">→</span>
                  </a>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process + timeline */}
      <section id="process" className="relative py-32 px-6 scroll-mt-16 overflow-hidden">
        <BlueprintBackground />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-16">We think before we build.</h2>
          </Reveal>
          <ProcessSteps steps={steps} />
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-10">A website can be live within 1–6 weeks.</h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map(([time, text], index) => (
              <Reveal key={time} delay={index * 120}>
                <SpotlightCard className="h-full rounded-3xl border border-black/10 bg-white/90 p-8">
                  <p className="text-3xl font-bold text-orange-600 mb-3">{time}</p>
                  <p className="text-zinc-600">{text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-32 px-6 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">Good questions.</h2>
          </Reveal>
          <Reveal>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-lg md:text-xl font-semibold">
                    {question}
                    <span className="text-orange-500 text-2xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-zinc-600 leading-relaxed mt-4 pr-10">{answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CityMarquee />

      {/* Start a project */}
      <section id="start" className="relative py-32 px-6 scroll-mt-16 overflow-hidden text-white">
        <GradientFlowBackground />
        <div className="relative max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel light>Start a project</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to build?</h2>
            <p className="text-zinc-300 text-lg mb-14">
              Tell us what you need. We reply within 1–2 business days - or reach us directly at{" "}
              <a href="mailto:hello@avdalyan.world" className="text-orange-400 hover:text-orange-300">
                hello@avdalyan.world
              </a>
              .
            </p>
          </Reveal>
          <StartProjectForm />
        </div>
      </section>

      {/* About */}
      <section className="relative py-28 px-6">
        <Reveal className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Avdalyan Tech LLC</h2>
          <p className="text-zinc-700 text-xl leading-relaxed max-w-4xl">
            Avdalyan Tech LLC is focused on creating custom-coded websites, AI automation systems and digital
            products — including native mobile apps — designed to help modern companies automate, scale and grow faster.
          </p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Avdalyan Tech LLC</h3>
            <a href="mailto:hello@avdalyan.world" className="text-zinc-400 hover:text-orange-400 transition">
              hello@avdalyan.world
            </a>
          </div>
          <div className="flex flex-col gap-8 md:min-w-[26rem]">
            {LEGAL_LINKS.map(({ app, links }) => (
              <div key={app}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{app}</p>
                <div className="my-3 h-px bg-white/15" />
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
                  {links.map(([label, href]) => (
                    <a key={href} href={href} className="hover:text-orange-400 transition">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
