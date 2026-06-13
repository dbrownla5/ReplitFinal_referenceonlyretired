# CRM BUILD PLAN — Reconciled Single Source
*2026-06-12. Reconciles the three CRM visions into one build order. Canonical spec: `docs/CRM-AND-INTAKE.md` in ReplitFinal (locked 5/31, "the backbone of the business"). The Internal Living Dashboard spec and Reseller Studio decisions fold INTO it as phases, not parallel builds.*

## Correction of record
The intake architecture is NOT Formspree. Canonical: **one conditional intake form → every submission writes to the CRM database** ("no inquiry is ever just an email"), email via Resend as notification/fallback. Formspree references in v5.1 and the static build are prior generations. The static HTML build's dead `YOUR_FORM_ID` is moot — that build's form gets replaced by the repo intake, not patched.

## What already EXISTS in ReplitFinal (verified in STATUS.md — build ON, never rebuild)
- **Handshake engine**: 9-step resale chain-of-custody (signed intake gate → custody → inventory → evaluation → report → consent → payout), unit-tested, persisted, Resend-wired.
- **Ops dashboard** at `/api/handshake/dashboard`.
- **AgreementGate** + `/bag-pickup` + `/consent/:token` signed-intake flow.
- Tables: `contact_submissions`, `handshakes`.
- Webhook seam (`WEBHOOK_URL`/`WEBHOOK_SECRET`, env-only).

## Build order (each phase shipped fully; from the canonical spec + placement decisions)
1. **Unified conditional intake** — one form, branching per path (Fast Bag → opens handshake ticket; Reset/House Call/Legacy/general → client record + booking only). Dedupe into ONE client model (unify contact_submissions + handshakes). Agreement triggers ONLY when items are actually taken.
2. **Business Dashboard v1 (the Nordstrom-style cockpit)** — clients list w/ search/sort/filter · client profile (notes, status, booking history/frequency) · tickets board · calendar · at-a-glance Today screen. Fold in Internal-Living-Dashboard domains here: Business Facts, Voice & Brand, Requests/Needs checklist, Handoff packets.
3. **Client Portal v1** — magic-link auth, row-scoped: bookings, service status, resale inventory status, messages, photo upload.
4. **Payments** — Zelle now (amount + tag shown, client marks sent, Dayna confirms paid; Money view), provider-agnostic so Stripe drops in when the EIN reactivates. Never hardcode keys.
5. **E-sign agreements, full build** — template versioned from wlc-resale-agreement.md, populated per client, audit trail (name/ISO timestamp/IP/UA/doc hash), signed PDF stored on profile, Resend copies, Draft→Sent→Viewed→Signed status, manual doc upload.
6. **Reseller Studio module** (per placement decision, May 2026): new artifact `artifacts/reseller-studio`, Clerk operator auth, same Postgres w/ client_id/job_id tenancy. v1: photo→AI item ID, master inventory + dedup, SEO listing generator, platform routing, household/job tracking.
7. **Polish**: notifications, reporting, calendar deepening. Content-Engine (brain/briefs/posts) remains a separate product on the same patterns.

## Hard rules carried from the canonical spec
One form, never per-service forms · every path captures the lead · only resale needs the chain-of-custody ticket · client sees only their own rows (server-enforced) · dashboard never exposed to clients · DB is system of record, webhook best-effort · secrets in env only (and rotate the API key currently committed in `.replit` — flagged in STATUS).
