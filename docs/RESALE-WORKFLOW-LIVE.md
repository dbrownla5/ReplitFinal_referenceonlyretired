# Resale Workflow + Database — what's done, what's yours to flip 🦝

*2026-06-14. Plain language. This is the resale Handshake going from "code that
exists" to "runs against a real database," per your `plan-HANDSHAKE-DASHBOARD.md`
(Supabase → Render → typed-signature gate). No new repo, no rebuild — your
existing engine, switched on.*

## What is proven (not claimed)

The whole resale chain was run end-to-end against a **real Postgres database**
using your actual API server (`artifacts/api-server`). A test bag went the full
distance and the rows were read straight back out of the database:

- **The legal gate works.** A signed intake opened a record; an **unsigned**
  intake was **blocked** and kept off the board. No signature, no pickup.
- **All nine steps advanced** — intake → day-before → custody → inventory →
  evaluation → report → consent → review → payout — each one written to an
  audit log (12 events on one bag).
- **The payout math is exact.** Designer item: $70 sold − $10 fees − $8 shipping
  = $52 net → 50% → **$26.00**, written to the record.
- **The payout date is a real first Monday.** Consent 6/14 + 30 days = 7/14
  (Tue) → **2026-07-20 (Mon)**. Exactly your rule.
- **Email fails safe.** With no Resend key, emails are logged, not sent — the
  workflow still completes, nothing crashes.

## Your database is ready (Supabase)

The schema is now live in your Supabase project **"ReplitFinal"** — four tables
(`handshakes`, `handshake_items`, `handshake_events`, `contact_submissions`),
**Row-Level Security on** every one (so client names, emails, and payouts are
never exposed through the public API). You can see them in the Supabase Table
Editor. DDL record: `docs/supabase-resale-schema.sql`.

## To turn it on for real — the switches only you have

1. **Deploy the backend to Render** (your chosen host). Render → New →
   Blueprint → connect this repo; it reads `render.yaml` and asks for the
   secrets below.
2. **`DATABASE_URL`** — Supabase → Project Settings → Database → *Connection
   string (URI)*. Paste it into Render. (This is the password I can't see.)
3. **`RESEND_API_KEY`** — turns on the real client emails. The flow works
   without it; emails just don't send yet.
4. **`AI_INTEGRATIONS_OPENAI_BASE_URL` / `..._API_KEY`** — needed only because
   the server imports the captions client at boot today (see follow-ups). Use
   your Replit AI values or any placeholder until Caption Studio is on.

That's it. The static site (Netlify) and the public form wiring are separate
steps; today you can open and run bags from the dashboard yourself.

## Two money rulings are YOURS (your law: flag, don't pick) ⚠️

1. **F1 — clothing & accessories split.** The repo currently reads **45% to the
   client / 55% WLC** (in `brand.ts`, `ResaleConsignmentPillar.tsx`,
   `FastBagFill.tsx`, `AgreementGate.tsx`, and the PDF generator). Your
   CLAUDE-LAW + audit say your ruling is **55% to the client / 45% WLC** — but
   your session memory says "Dayna 55/45" (you keep 55) and your **signed
   agreement** says client 45. These disagree, it's real money on every clothing
   sale, so **nothing was changed.** Tell me the direction and I flip all five
   spots in one pass.
2. **F5 — the payout tier math.** The backend pays by four tiers (client share
   **standard 40 / contemporary 45 / designer 50 / luxury 60**, `logic.ts`).
   Your public table is three (clothing 55 / designer 50 / furniture 50). They
   don't line up for clothing/standard. Until you rule, the auto-payout *amount*
   should stay advisory. (Designer matches at 50%, which is why the test bag was
   exact.)

## Follow-ups (small, not blocking)

- **Dashboard password.** `/api/handshake/dashboard` shows every client + payout
  with no auth today. Add a `DASHBOARD_PASSWORD` gate before it's public.
- **Decouple AI from boot.** Make the captions/voice client lazy so the resale
  backend boots on `DATABASE_URL` alone (no AI keys needed just to run resale).
- **Pre-existing:** Supabase had a stub `leads` table with an open "anon insert"
  policy (not created here) — worth tightening separately.

## How to re-prove it yourself (local, no secrets)

A local Postgres + the real server reproduces the whole run:
`pnpm --filter @workspace/db run push` (with `DATABASE_URL` set to a local PG),
then build/start `artifacts/api-server` and POST through
`/api/handshake/intake → /advance → /items → /send-report → /consent/:token → /:id/payout`.
