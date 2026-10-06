// "Start a project" form -> email to hello@avdalyan.world via Resend
// (https://resend.com). Needs RESEND_API_KEY set in Vercel's environment
// variables. Until the avdalyan.world domain is verified in Resend, mail is
// sent from Resend's shared onboarding address, which may only deliver to the
// Resend account's own email - so create the account with
// hello@avdalyan.world.

const TO = "hello@avdalyan.world";
const FROM = process.env.CONTACT_FROM ?? "Avdalyan.world <onboarding@resend.dev>";

const SERVICES = new Set(["Website", "Web App", "Mobile App (iOS / Android)", "AI Automation", "Other"]);
const BUDGETS = new Set(["$5k–10k", "$10k–20k", "$20k–50k", "$50k–100k", "$100k+"]);
const TIMELINES = new Set(["As soon as possible", "1–3 months", "3–6 months", "Flexible"]);

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in: almost certainly a bot. Pretend it worked.
  if (text(body.website, 200)) return Response.json({ ok: true });

  const name = text(body.name, 100);
  const email = text(body.email, 200);
  const company = text(body.company, 100);
  const phone = text(body.phone, 40);
  const message = text(body.message, 5000);
  const services = Array.isArray(body.services) ? body.services.filter((s): s is string => typeof s === "string" && SERVICES.has(s)) : [];
  const budget = BUDGETS.has(text(body.budget, 20)) ? text(body.budget, 20) : "";
  const timeline = TIMELINES.has(text(body.timeline, 30)) ? text(body.timeline, 30) : "";

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please fill in your name, a valid email and a short description." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact form: RESEND_API_KEY is not set");
    return Response.json({ error: "The form isn't available right now - please email hello@avdalyan.world." }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "–"],
    ["Phone", phone || "–"],
    ["Services", services.join(", ") || "–"],
    ["Budget", budget || "–"],
    ["Timeline", timeline || "–"],
  ];
  const html = `<h2>New project request</h2><table>${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p><b>Project</b></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Project request: ${name}${company ? ` (${company})` : ""}${budget ? ` - ${budget}` : ""}`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject:\n${message}`,
    }),
  });
  if (!response.ok) {
    console.error("contact form: Resend error", response.status, await response.text().catch(() => ""));
    return Response.json({ error: "Couldn't send right now - please email hello@avdalyan.world." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
