"use client";

import { useState } from "react";

const SERVICES = ["Website", "Web App", "Mobile App (iOS / Android)", "AI Automation", "Other"];
const BUDGETS = ["$5k–10k", "$10k–20k", "$20k–50k", "$50k–100k", "$100k+"];
const TIMELINES = ["As soon as possible", "1–3 months", "3–6 months", "Flexible"];

type Status = "idle" | "sending" | "sent" | "error";

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
        selected
          ? "bg-orange-500 border-orange-500 text-black"
          : "border-white/20 text-zinc-300 hover:border-white/50"
      }`}
    >
      {label}
    </button>
  );
}

export default function StartProjectForm() {
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function toggleService(service: string) {
    setServices((current) =>
      current.includes(service) ? current.filter((s) => s !== service) : [...current, service]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          phone: form.get("phone"),
          message: form.get("message"),
          website: form.get("website"), // honeypot - real visitors never see it
          services,
          budget,
          timeline,
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <p className="text-3xl font-bold text-white mb-3">Thank you.</p>
        <p className="text-zinc-400">
          We&apos;ve received your request and will get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
        <input name="name" required maxLength={100} placeholder="Your name *" className={inputClass} autoComplete="name" />
        <input name="email" type="email" required maxLength={200} placeholder="Email *" className={inputClass} autoComplete="email" />
        <input name="company" maxLength={100} placeholder="Company" className={inputClass} autoComplete="organization" />
        <input name="phone" maxLength={40} placeholder="Phone" className={inputClass} autoComplete="tel" />
      </div>

      {/* Honeypot: hidden from people, filled in by most spam bots. */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <fieldset>
        <legend className="text-sm uppercase tracking-widest text-zinc-500 mb-4">What do you need?</legend>
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((service) => (
            <Chip key={service} label={service} selected={services.includes(service)} onClick={() => toggleService(service)} />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Budget (USD)</legend>
        <div className="flex flex-wrap gap-3">
          {BUDGETS.map((option) => (
            <Chip key={option} label={option} selected={budget === option} onClick={() => setBudget(option)} />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Timeline</legend>
        <div className="flex flex-wrap gap-3">
          {TIMELINES.map((option) => (
            <Chip key={option} label={option} selected={timeline === option} onClick={() => setTimeline(option)} />
          ))}
        </div>
      </fieldset>

      <textarea
        name="message"
        required
        maxLength={5000}
        rows={5}
        placeholder="Tell us about your project *"
        className={`${inputClass} resize-none`}
      />

      {status === "error" && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-orange-500 text-black px-10 py-4 rounded-full font-semibold transition hover:bg-orange-400 hover:-translate-y-0.5 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
