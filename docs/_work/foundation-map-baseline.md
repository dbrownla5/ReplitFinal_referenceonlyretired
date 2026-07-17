# Consolidated Foundation Map (Baseline: This Repository)

This map lists what is currently available to assemble, with readiness and integration cost.

Phase labels in this document map to the chronology buckets defined in `docs/_work/brand-lineage-extraction-baseline.md`.

## Available Copy Library (tagged)

| Item | Source | Phase | Use case | Readiness |
|---|---|---|---|---|
| Recognition-style homepage language | `docs/_work/site-copy-inventory.md` | D | Homepage / service intros | High |
| Gap diagnostic language (“frame with no tools”) | `docs/SITE-TOOLING-GAPS.md` | A | Product truth / implementation planning | High |
| Outcome-sell service phrasing | `docs/brand-source/marketing-strategy-2026-06-11.md` | C | Conversion copy / CTA framing | High |
| Core philosophy and positioning lines | `docs/brand-source/Brand-Foundation-Lines.md` | C | Messaging calibration | Medium |
| Voice constraints and banned-language guidance | `docs/BRAND-VOICE.md` | B | Editorial QA | High |
| Direct founder lineage language | `docs/brand-source/dayna-voice-capture-2026-06-11.md` | C | About/background credibility | High |

## Available Tool Library (tagged)

| Tool component | Source | Phase | Readiness | Integration cost |
|---|---|---|---|---|
| Contact API route | `artifacts/api-server/src/routes/contact.ts` | D | Built | Medium |
| Handshake API workflow | `artifacts/api-server/src/routes/handshake.ts` | D | Built | Medium |
| Handshake state engine | `artifacts/api-server/src/handshake/logic.ts` | D | Built | Low |
| Voice analysis API | `artifacts/api-server/src/routes/voice.ts` | D | Built | Low |
| Brand constants module | `artifacts/wlc-site/src/content/brand.ts` | D | Built | Low |
| Contact persistence schema | `lib/db/src/schema/contact.ts` | D | Built | Low |
| Handshake persistence schema | `lib/db/src/schema/handshake.ts` | D | Built | Low |
| OpenAPI contract package | `lib/api-spec/openapi.yaml` | D | Partial | Medium |

## Do / Don’t Use Rules (pattern-derived)

### Do
- Do treat every source as evidence and reconcile in the ledger first.
- Do extract by chronology before choosing what survives.
- Do link copy decisions to implementation paths (page/module/API), not just docs.
- Do keep one canonical location per fact in code constants where applicable.
- Do log non-use reasons immediately (duplicate, unresolved conflict, missing runtime path, or drift risk).

### Don’t
- Don’t treat “final/locked” wording as auto-authority without lineage check.
- Don’t merge copy or tool fragments without a source/date/context record.
- Don’t keep duplicate deploy paths untagged; they create silent non-use.
- Don’t close a wave without documenting what was intentionally not adopted and why.

## Glossary

- **Evidence:** any source artifact (doc/code/audit) treated as input, not final authority.
- **Phase:** chronology bucket used to preserve sequence when extracting material.
- **Readiness:** how close a fragment is to immediate reuse (`High`, `Medium`, `Partial`).
- **Integration cost:** relative effort to connect a fragment into the active lane (`Low`, `Medium`).
- **Drift risk:** facts or copy diverging across files without a reconciled canonical reference.
