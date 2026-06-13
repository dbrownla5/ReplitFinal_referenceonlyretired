# CLAUDE CODE HANDOFF — The Well Lived Citizen
*2026-06-12. The persistent workflow. Read top to bottom before touching anything.*

## Who you're working with
Read `docs/WORKING-WITH-DAYNA.md` in the repo FIRST. Non-negotiable register: warm jam session, explain as you go, catch errors before she does, never claim done when it isn't, batch deploys (each costs money), plain language, the raccoon stays 🦝.

## Repos
- **`dbrownla5/ReplitFinal`** = THE live source of truth. Site: `artifacts/wlc-site` (React/Vite, content in `src/content/brand.ts`), API: `artifacts/api-server`, Netlify auto-deploys from `main` → batch + merge ONCE.
- `dbrownla5/Well_Livedv5.1` = previous generation. EVIDENCE ONLY under the guard rails in `memory/context/builds.md`. Never copy identity strings, pricing, or copy from it.

## Source-of-truth hierarchy (conflicts resolve downward, never sideways)
1. Dayna's live word in-session (flag if it contradicts a lock — don't silently adopt)
2. `wlc-resale-agreement.md` — LEGAL lock for all resale terms (incl. first-Monday payouts, 35/65 low-value tier)
3. This bundle: `.claude/brand-voice-guidelines.md` + `CLAUDE.md` + `memory/` (today's locks: identity, hero, Fast Books, Flex Blocks, pricing architecture, pillar names, move voice)
4. Repo `docs/`: CRM-AND-INTAKE.md (backbone) · AWLC-SERVICES-MASTER · BRAND-VOICE · SERVICES-PRICING (correct its commission notation + flex blocks to today's locks)
5. Everything else = archive.

## Today's locked truth (apply everywhere)
Identity: **The Well Lived Citizen** (no "Co" — ended April), DBA of Well Dressed Citizen LLC, **thewelllivedcitizen.com**, dayna@thewelllivedcitizen.com. Hero: CHAOS WRANGLER. / PROFESSIONAL PROBLEM SOLVER. + "Is there a person who…" subhero. Pillars: Home Organization & Move Support · House Calls · Legacy Inventory & Cataloging · Resale & Consignment, taglines: "Get the project moving." · "Help for the things that don't fit neatly into a category." · "Understand what's there before decisions become urgent." · "Turn the pile into action." Fast Books: 4-Hr Reset $495 · House Call $350 · Quick Resale Pickup · Move Wrap-Up/Closeout. Pricing: hourly · $1,200 Move-In Day · projects. Flex Blocks 2/4/6 hr at rate, never expire. Commission per legal agreement.

## Build order
1. **Copy deploy**: replace homepage + 4 pillar pages + pricing from `WLC-SITE-COPY-FINAL.md` into `brand.ts`. Sweep: "Co", dead names, payout language, commission table, $495 price onto the Fast Book card. ONE batch, ONE deploy.
2. **CRM phases 1–5** per `CRM-BUILD-PLAN.md` (build ON the handshake engine — never rebuild it). Prereq from STATUS.md: provision Postgres, set `DATABASE_URL`, `RESEND_API_KEY`, `PUBLIC_SITE_URL`, run db push. ROTATE the API key committed in `.replit`.
3. **MCP server** per `WLC-MCP-SPEC.md` in api-server.
4. **Reseller Studio** artifact (placement decision is final: sibling artifact, Clerk, shared Postgres).

## Definition of done (per FOLDER_3 + STATUS)
Lock pages — do NOT endlessly rewrite. Launch imperfectly. Done = deployed, persistent, and stated plainly; never "done" while anything is half-wired.
