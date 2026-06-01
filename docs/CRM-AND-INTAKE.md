# CRM & Intake — Canonical Spec
*Locked 2026-05-31 from Dayna. This is the backbone of the business. Build to this. Does NOT need to be built overnight — see phases at the end.*

## The core model: ONE intake form, conditional branching

There is **one intake form**, not a separate form per service. The questions branch — **each answer leads to a conditional next question** — so the same form handles every service path. The path the client takes only changes *which follow-up questions* appear and *what happens after submit*.

**Every submission — every path — captures into the CRM database.** No inquiry is ever just an email. Even people who reach out and don't book are captured.

## What each path triggers after submit

- **Fast Bag Pickup (resale) path** → in addition to the client record, it **opens a chain-of-custody workflow ticket** (the existing handshake) that **stays open for the entire chain of custody, through the sale process, to completion.** This is the only path that needs the full resale workflow ticket.
- **Reset / House Call / Legacy / general paths** → capture the client record and the booking/inquiry. **No resale chain-of-custody ticket, and no resale agreement**, unless and until the work turns into taking items for resale.
- **Conditional agreement rule:** a home visit does **not** require a resale agreement up front. The resale agreement only triggers **once Dayna decides she's actually taking clothes/items** for resale — at that point the e-sign resale agreement is generated for that client.

## The CRM (the real ask — "like Nordstrom's in-house CRM tool")

All intake flows feed a **client-record database** Dayna can work from. She must be able to:
- **Sort/filter clients** by who reached out and **when**.
- See **who booked vs. who didn't**.
- **Track clients over time** — make notes on them, see **how often they book** (booking frequency / history).
- **Tie it to a calendar** (bookings, follow-ups, pickups, sale milestones).
- All inside the **internal dashboard already built** (extend `/api/handshake/dashboard` into this CRM, behind auth).

Reference point: Nordstrom's custom in-house clienteling/CRM tool — a salesperson's view of their clients, history, notes, and outreach. That's the spirit; built for Dayna's business.

## Agreements = e-sign documents, attached to the profile

- Agreements (starting with the resale chain-of-custody agreement) are **e-signature documents.**
- A signed agreement is **stored on / attached to the client's profile** in the CRM, and Dayna can also **upload/attach** documents to a profile manually.
- Viewable and managed from her internal dashboard.

## What already exists (build ON these, don't rebuild)
- **Handshake** = the resale chain-of-custody workflow ticket (intake gate → custody → inventory → evaluation → report → consent → review → payout). This is the "Fast Bag Pickup ticket."
- **Ops dashboard** at `/api/handshake/dashboard` — extend into the full CRM.
- **Contact + handshake intake** both persist to the database; intake email-falls-back if the DB is off (never lose a lead).
- **Client records:** `contact_submissions` + `handshakes` tables exist; unify them into one client model.

## Suggested phases (not overnight)
1. **One conditional intake form** + every submission creates/updates a **client record** in the CRM (all paths). Fast Bag path also opens the existing handshake ticket.
2. **CRM dashboard:** client list with sort/filter (reached-out date, booked vs. not), per-client profile with notes + booking history/frequency.
3. **Calendar** tie-in (bookings, follow-ups, pickups, sale milestones).
4. **E-sign agreements** generated on the resale path (and when a visit converts to taking items), stored/attached to the client profile, plus manual document upload.

## Rules for whoever builds this
- One form, conditional branching — never separate forms per service.
- Every path writes to the CRM. Capturing the lead is non-negotiable.
- Only the resale path needs the chain-of-custody ticket + resale agreement; other paths stay light until they convert.
- Build on the existing handshake + dashboard; unify `contact_submissions` and `handshakes` into one client record model.
