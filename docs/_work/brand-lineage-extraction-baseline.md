# Brand Lineage Extraction — Baseline Pullout (This Repository)

Goal: extract by chronology, then retain rationale for why pieces were not fully adopted.

## Chronology buckets (repo-internal)

1. **Phase A — Operational stabilization (2026-05-30)**
   - Evidence: `docs/STATUS.md`, `docs/RESULTS-PLAN.md`, `docs/SITE-TOOLING-GAPS.md`, `docs/HANDSHAKE.md`, `docs/PARTNER-BRIEF.md`
2. **Phase B — Locking and systemization (2026-05-31)**
   - Evidence: `docs/BRAND-VOICE.md`, `docs/CONTENT-SYSTEM.md`, `docs/CRM-AND-INTAKE.md`, `docs/DIRECTIVE.md`
3. **Phase C — Source re-import / corrective layer (2026-06-11)**
   - Evidence: `docs/brand-source/*.md`, `docs/AWLC-SERVICES-MASTER-FINAL.md`, `docs/FINAL-SOURCE-OF-TRUTH.md`
4. **Phase D — Current implementation state (ongoing)**
   - Evidence: `artifacts/*`, `lib/*`, `voice-audit-report.md`, `docs/_work/site-copy-inventory.md`

---

## Phase A pullout (first completed extraction set)

### Reusable copy blocks
- “Finish one lane end-to-end before opening new lanes.” (`docs/RESULTS-PLAN.md`)
- “The frame has no tool” gap framing for dead-end CTAs (`docs/SITE-TOOLING-GAPS.md`)
- “Done & verified” reporting pattern for session close clarity (`docs/STATUS.md`)

### Reusable tool components
- Handshake route + state logic:
  - `artifacts/api-server/src/routes/handshake.ts`
  - `artifacts/api-server/src/handshake/logic.ts`
  - `lib/db/src/schema/handshake.ts`
- Contact intake path (capture seam):
  - `artifacts/api-server/src/routes/contact.ts`
  - `lib/db/src/schema/contact.ts`

### Why parts were not fully used (explicit reasons)
- Multiple deploy paths created drift between “improved copy/tool” and “live path.”
- Persistence and notification paths were not consistently treated as one required pair.
- Gap docs captured issues, but were not enforced as a gated integration checklist.

---

## Phase B pullout (queued)

### Reusable copy blocks
- Observational, non-corporate tone constraints from `docs/BRAND-VOICE.md`
- Content transformation workflow stages from `docs/CONTENT-SYSTEM.md`

### Reusable tool/process components
- One-form, multi-service intake intent from `docs/CRM-AND-INTAKE.md`
- Client-record backbone requirements for dashboard and lifecycle tracking

### Known non-use reasons
- Scope size exceeded what was wired in one pass.
- Specs were treated as “docs complete” before execution state was fully closed.

---

## Phase C pullout (queued)

### Reusable copy blocks
- Founder-origin and lineage language from `docs/brand-source/dayna-voice-capture-2026-06-11.md`
- Outcome-focused conversion phrasing from `docs/brand-source/marketing-strategy-2026-06-11.md`

### Reusable tool/process components
- Nixed-copy constraints and content guardrails from source captures
- Pricing/service normalization inputs from `docs/AWLC-SERVICES-MASTER-FINAL.md`

### Known non-use reasons
- Late corrective imports conflicted with previously propagated values.
- Lack of a single reconciliation ledger caused repeated overwrite cycles.
