# Master Evidence Ledger (Baseline: current active workspace checkout for this task)

This ledger is evidence-first. It does not declare a final brand truth.

| Source | Date | Brand context | Copy fragments (pullable) | Tool fragments (pullable) | Confidence | Why not used / drift reason |
|---|---|---|---|---|---|---|
| `docs/RESULTS-PLAN.md` | 2026-05-30 | Finish-one-lane strategy | “stop building, start selling”, single-lane prioritization framing | Prioritization rubric for lane selection | High | Strategy existed, but scattered across docs without one extraction ledger |
| `docs/SITE-TOOLING-GAPS.md` | 2026-05-30 | Tooling reality check | Gap language for “frame with no tools” | Contact endpoint gap list, DB orphaned-schema diagnosis, CI gaps | High | Findings documented but not converted into one canonical integration backlog |
| `docs/STATUS.md` | 2026-05-30 | Session-close operational snapshot | “Done & verified” summary phrasing | Verified command references + deploy seams | Medium | Historical snapshot; not continuously maintained as living baseline |
| `docs/BRAND-VOICE.md` | 2026-05-31 | Voice calibration layer | Core tone constraints and recognition-based phrasing guidance | Copy-audit criteria usable for filtering extracted copy | High | Treated as lockfile in prior runs; caused conflict with later/parallel docs |
| `docs/CONTENT-SYSTEM.md` | 2026-05-31 | Content transformation process | Process language for turning raw notes into publishable copy | Reusable content pipeline stages | High | Process and outputs were split across docs, not tied to tool execution checkpoints |
| `docs/CRM-AND-INTAKE.md` | 2026-05-31 | CRM/intake architecture | Intake explanations and service-routing language | Conditional intake model, client-record model, handshake integration intent | High | Large scope created partial implementations; no phased extraction tracker in-repo |
| `docs/brand-source/Brand-Foundation-Lines.md` | Source doc (imported by 2026-06-11 cycle) | Raw brand philosophy | Core truths and positioning lines | Voice calibration anchors for copy triage | Medium | Strong source lines got diluted by repeated paraphrase across derivative docs |
| `docs/brand-source/dayna-voice-capture-2026-06-11.md` | 2026-06-11 | Direct founder voice capture + lineage | Lineage (“Well Dressed → Well Lived”), “story over condition”, “competent support” language | Rule signals (nixed copy list, logo handling boundaries) | High | Not consistently used as first input; downstream files overrode nuances |
| `docs/brand-source/marketing-strategy-2026-06-11.md` | 2026-06-11 | Conversion structure | Outcome-sell copy, service-level “customer hears” phrasing | Ladder model for offer sequencing and page intent | High | Content fragments existed but were not systemically linked to page modules |
| `docs/AWLC-SERVICES-MASTER-FINAL.md` | 2026-06-11 upload | Services/pricing master evidence | Service naming + pricing copy blocks | Pricing/service matrix inputs for code constants | Medium | Conflicts with older constants caused drift loops instead of reconciliation log |
| `voice-audit-report.md` | 2026 run artifact | Voice compliance audit output | Page-level copy deltas and flagged phrasing | Audit method and pass/fail evidence for extraction filtering | High | Audit output not coupled to extraction backlog, so fixes remained one-off |
| `docs/_work/site-copy-inventory.md` | Current repo state | Current live-copy inventory | Page-by-page copy strings for reuse screening | Structured inventory format for future imports | High | Large inventory existed without chronology tags or “why not used” reasons |
| `artifacts/api-server/src/routes/contact.ts` | Current code | Contact lead-capture path | Intake confirmations and response messages | `/api/contact` processing seam | High | Missing durable persistence in some deployment paths produced dead-end behavior |
| `artifacts/api-server/src/routes/handshake.ts` | Current code | 9-step resale/intake workflow | Consent and workflow step labels | Handshake API endpoints and transitions | High | Built path was stronger than adjacent paths; mismatch created partial adoption |
| `artifacts/api-server/src/routes/voice.ts` | Current code | Voice audit engine | Voice-analysis response copy and diagnostics | `/api/voice/*` analysis endpoints | High | Tool existed but was underused in regular content-update cycles |
| `lib/db/src/schema/contact.ts` | Current code | Persistence schema | Contact field naming used in form language | `contact_submissions` schema + validation shape | High | Schema and runtime workflows were not always connected in deployment |
| `lib/db/src/schema/handshake.ts` | Current code | Workflow persistence | Step naming conventions | Handshake state storage model | High | End-to-end verification not always run after copy/tool edits |
| `artifacts/wlc-site/src/content/brand.ts` | Current code | Rendered brand constants | Reusable headline/service/price constants | Canonical constants import point for UI | High | Older pages/docs still carried hardcoded legacy values outside this file |

## Intake placeholders for external audits (Google Drive)

Use this exact row format when adding Drive audits:

- Source link format: use the full share URL (`https://drive.google.com/file/d/<FILE_ID>/view` or `https://drive.google.com/drive/folders/<FOLDER_ID>`).
- If the source is inside a Drive folder, append `#file=<FILE_ID>` in notes so the exact artifact is traceable.
- Keep one row per audit artifact (do not bundle multiple files into one row).

| Source | Date | Brand context | Copy fragments (pullable) | Tool fragments (pullable) | Confidence | Why not used / drift reason |
|---|---|---|---|---|---|---|
| `DRIVE_LINK_HERE` | YYYY-MM-DD | phase/brand | short extract list | short extract list | low/med/high | explicit non-use reason |
