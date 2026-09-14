import Link from "next/link";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-zinc-300">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-orange-500 hover:text-orange-400 transition text-sm font-medium"
        >
          ← avdalyan.world
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-2">
          {title}
        </h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: {lastUpdated}</p>

        <div className="space-y-10 legal-prose">{children}</div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-zinc-500">
          <p>
            Questions? Contact{" "}
            <a
              href="mailto:hello@avdalyan.world"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              hello@avdalyan.world
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
