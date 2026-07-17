# Cross-Repo Synthesis — Standing Operating Model

Purpose: turn multi-repo evidence into one judged output instead of asking the client to manage the merge.

## Default rule

**Evidence in. Judgment out. Start-weighted. Drift-aware. Minimal escalation.**

## Selection rules

1. **Start over finish**
   - Treat the earliest clear expression of intent as the strongest signal.
   - Treat later end states as suspect when they reflect drift or trust-breaking changes.

2. **Repetition is not proof**
   - If wording shows up too often, inspect it as possible drift.
   - Do not preserve language just because it spread widely across repos or docs.

3. **Agent decides what stays**
   - Gather the evidence across repos.
   - Choose what to keep, what to drop, and what becomes canonical.
   - Do not hand the sorting burden back to the client unless there is a real unresolved conflict.

4. **Look for trust breaks**
   - Identify where the work stopped sounding like the original intent.
   - Favor the version closest to the original signal, not the most polished late version.

5. **One output, not a pile**
   - Deliver:
     - what was kept
     - what was removed
     - why
     - the recommended source of truth

6. **Minimal escalation**
   - Escalate only when there is:
     - a legal conflict
     - a business-critical contradiction
     - missing evidence
     - a truly subjective fork with no clear winner

## Required consolidation output

Every cross-repo consolidation should end with:

1. **Kept**
   - the selected copy, tools, or rules that remain in the canonical set
2. **Removed**
   - duplicates, drifted wording, trust-breaking late changes, or dead-end implementations
3. **Why**
   - the evidence-based reason each major keep/remove decision was made
4. **Recommended source of truth**
   - the single file, doc set, or implementation path that should be treated as canonical going forward
