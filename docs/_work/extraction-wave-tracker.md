# Repository Extraction — Wave Tracker

Purpose: run repo extraction as evidence work, not truth declaration.

## Operating rule (locked for this run)

- No single repo/doc is final truth.
- Every source is evidence.
- Start state outranks finish state when finish shows trust-breaking drift.
- Repeated wording is not proof; repeated wording may be drift.
- Record rationale (why used / why not used), not just artifacts.
- Extract in chronology so lineage and drift are visible.
- The agent decides what stays, what goes, and what becomes canonical unless there is a real unresolved conflict.

## Wave execution

- [x] **Wave 1 — Inventory + scaffold**
  - [x] Create operating rule and wave tracker
  - [x] Create master evidence ledger format
  - [x] Create baseline foundation map shells
  - [x] Add first-pass entries from this repository
- [x] **Wave 2 — First chronological pullout (this repository baseline)**
  - [x] Define repository-internal chronology buckets
  - [x] Pull reusable copy fragments by bucket
  - [x] Pull reusable tool components by bucket
  - [x] Log drift / abandonment reasons per extracted item
- [ ] **Wave 3 — Cross-repo expansion**
  - [ ] Add next repositories into ledger using same fields
  - [ ] Merge duplicate fragments into one reusable parts bin
  - [ ] Score each tool for integration readiness
- [ ] **Wave 4 — Consolidation**
  - [ ] Publish merged copy library
  - [ ] Publish merged tool library
  - [ ] Publish pattern rules (do/don’t use)
  - [ ] Publish one recommended source of truth with what stayed, what was removed, and why

## Required ledger fields (per source)

1. source
2. date
3. brand context
4. copy fragments
5. tool fragments
6. confidence
7. why-not-used notes

## Decision standard for consolidation

- Weight earliest clear intent above later, polished end states.
- Treat overused language as a drift signal to inspect, not a confidence boost.
- Identify where trust breaks entered the lineage and avoid preserving those layers by default.
- Hand off one judged output, not an unresolved pile of options.
- Escalate only for legal conflicts, business-critical contradictions, missing evidence, or truly subjective forks with no clear winner.
