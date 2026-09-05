import Image from "next/image";
export default function Home() {
  const steps = [
    ["01", "Strategy", "We understand your company, your customers and what your website needs to achieve."],
    ["02", "Design", "We create a modern visual direction that fits your brand and makes your company look professional."],
    ["03", "Development", "We build the website with custom code, optimized for speed, mobile and future growth."],
  ];

  const included = [
    ["Custom-coded website", "Built from scratch with real code, not locked into simple templates."],
    ["Mobile optimized", "Looks clean and professional on phone, tablet and desktop."],
    ["Fast performance", "Optimized for speed, clarity and a smooth customer experience."],
    ["Agent 13 included", "Email and SMS automation included for one full year."],
    ["Multilingual communication", "Agent 13 can answer emails and SMS in multiple languages worldwide."],
    ["Business-focused structure", "Built to help visitors understand, trust and contact your company."],
  ];

  return (
  <main className="min-h-screen bg-[#f4efe7] text-white px-0 overflow-hidden relative before:content-[''] before:fixed before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(0,180,255,0.10),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(0,255,120,0.08),transparent_40%)] before:pointer-events-none after:content-[''] after:fixed after:inset-0 after:bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] after:bg-[size:80px_80px] after:pointer-events-none">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/NYC.mp4" type="video/mp4" />
</video>
</div>
<div className="absolute inset-0 bg-black/60"></div>
        <div className="hero-glow top-24 left-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
          <p className="text-sm text-zinc-750 mb-2">
  Welcome to Avdalyan.world — Where code meets ambition.
</p>
          <p className="text-orange-600 mb-6 font-semibold">
            Custom Websites • AI Automation • Agent 13 Included
          </p>

          <p className="text-2xl md:text-3xl font-semibold max-w-4xl mb-4">
            Avdalyan Tech LLC builds custom-coded websites, AI automation and
            mobile app / software products, including native iOS applications.
          </p>

          <a
            href="mailto:hello@avdalyan.world"
            className="text-orange-500 hover:text-orange-400 transition text-lg font-medium mb-10 inline-block"
          >
            hello@avdalyan.world
          </a>

          <p className="text-2xl text-white-700 max-w-3xl mb-10">
            We build custom-coded websites for businesses that want a stronger
            online presence, faster performance and intelligent automation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-16">
            
            <a
  href="https://wa.me/46700792148"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition hover:-translate-y-1 hover:shadow-xl"
>
  WhatsApp
</a>
            
          </div>

          <div className="overflow-hidden border-y border-black/10 py-4">
            <div className="marquee whitespace-nowrap text-sm font-bold tracking-widest text-zinc-350">
              CUSTOM CODE • AI AUTOMATION • AGENT 13 INCLUDED • EMAIL AUTOMATION • SMS AUTOMATION • FAST PERFORMANCE • CUSTOM CODE • AI AUTOMATION • AGENT 13 INCLUDED • EMAIL AUTOMATION • SMS AUTOMATION • FAST PERFORMANCE •
            </div>
          </div>
        </div>
        

      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover opacity-150"
  >
    <source src="/dubai city.mp4" type="video/mp4" />
  </video>
</div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <p className="text-orange-600 mb-4 font-semibold">How We Work</p>

          <h2 className="text-5xl md:text-7xl font-bold text-zinc-50 mb-16">
            Designed around your business.
            <br />
            Built from the ground up.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(([number, title, text]) => (
              <div
                key={title}
              className="premium-card bg-white/100 backdrop-blur rounded-3xl p-8 border border-black/10 min-h-[280px]"
              >
                <p className="text-orange-600 mb-8 font-bold">{number}</p>
                <h3 className="text-3xl font-bold mb-4 text-zinc-400 group-hover:text-orange-600 transition-colors">
  {title}
</h3>
                <p className="text-zinc-600 text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white -mx-6 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
  <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
</div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-cyan-400 mb-4 font-semibold">Timeline</p>

          <h2 className="text-5xl md:text-7xl font-bold mb-10">
            Your website can be ready
            <br />
            within 2–6 weeks.
          </h2>

          <p className="text-zinc-400 text-2xl max-w-3xl mb-16">
            Every company is different. Simple business websites can move fast,
            while larger builds with more pages, systems and integrations take more time.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-gold rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
              
              <h3 className="text-3xl font-bold mb-4">2 Weeks</h3>
              <p className="text-zinc-400">
                Clean company website with essential pages and contact flow.
              </p>
            </div>

            <div className="premium-gold rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">
              <h3 className="text-3xl font-bold mb-4">3–4 Weeks</h3>
              <p className="text-zinc-400">
                More advanced website with stronger design, sections and content structure.
              </p>
            </div>

            <div className="premium-gold rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
              <h3 className="text-3xl font-bold mb-4">5–6 Weeks</h3>
              <p className="text-zinc-400">
                Larger build with custom features, automation and business-specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
</div><Image
  src="/kuala.jpg"
  alt="Kuala Lumpur"
  fill
  className="object-cover opacity-500"
/><div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-orange-600 mb-4 font-semibold">Included</p>

          <h2 className="text-5xl md:text-7xl text-zinc-150 font-bold mb-16">
            More than a website
            <br />
            A smarter business setup.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {included.map(([title, text]) => (
              <div key={title} className="business-card bg-white rounded-3xl p-8 border border-black/10">
                <h3 className="text-3xl font-bold mb-4">{title}</h3>
                <p className="text-zinc-600 text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-black overflow-hidden py-4">
  <div className="city-track-left text-white/70 text-sm md:text-base font-bold tracking-[8px] whitespace-nowrap">
    <div className="city-track-left">
  <span className="pr-20">
    STOCKHOLM • DUBAI • JAKARTA • SINGAPORE • LONDON • NEW YORK • TOKYO • BALI • BERLIN • MOSCOW • PARIS • BANGKOK • LOS ANGELES • MIAMI • TORONTO • VANCOUVER • AMSTERDAM • COPENHAGEN • OSLO • HELSINKI • MADRID • BARCELONA • ROME • MILAN • ZURICH • VIENNA • ISTANBUL • DOHA • RIYADH • ABU DHABI • KUALA LUMPUR • SEOUL • HONG KONG • SHANGHAI • SYDNEY • MELBOURNE • CAPE TOWN •
  </span>

  <span className="pr-20">
    STOCKHOLM • DUBAI • JAKARTA • SINGAPORE • LONDON • NEW YORK • TOKYO • BALI • BERLIN • MOSCOW • PARIS • BANGKOK • LOS ANGELES • MIAMI • TORONTO • VANCOUVER • AMSTERDAM • COPENHAGEN • OSLO • HELSINKI • MADRID • BARCELONA • ROME • MILAN • ZURICH • VIENNA • ISTANBUL • DOHA • RIYADH • ABU DHABI • KUALA LUMPUR • SEOUL • HONG KONG • SHANGHAI • SYDNEY • MELBOURNE • CAPE TOWN •
  </span>
</div>
  </div>
</div>

      <section className="py-28 bg-[#0b0b0b] px-6">
        
<p className="text-cyan-400 text-sm font-semibold mb-4">
  Built by S. Avdalyan
</p>

<h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
  The Person Behind Agent 13
</h2>

<p className="text-zinc-300 text-xl leading-relaxed max-w-4xl">
  Behind Agent 13 is a builder focused on creating custom-coded websites,
  AI automation systems and digital products designed to help modern
  companies automate, scale and grow faster.
</p>
</section>

      <footer className="py-16 bg-[#0b0b0b] border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white">Avdalyan Tech LLC</h3>
        </div>
      </footer>
    </main>
  );
}