# WLC MCP SERVER — SPEC v1
*Per mcp-builder skill. Purpose: give Claude (chat, Cowork, Claude Code) first-class tools over the WLC business systems — tomorrow and ongoing — instead of ad-hoc scraping/uploads.*

## Stack (mcp-builder recommendations)
TypeScript + MCP SDK · **Streamable HTTP, stateless JSON** (remote) · lives in `artifacts/api-server` as `/mcp` mount (same Postgres, same auth boundary as the dashboard — operator-token auth, NEVER public). Secrets via env. Actionable error messages with next-step suggestions. Concise tool descriptions; filtered/paginated results.

## Tools (comprehensive coverage + a few workflow tools)
**CRM / clients**
- `wlc_client_list` (query, filters: booked/inquired, date range, service, pagination)
- `wlc_client_get` (id → profile, notes, bookings, agreements, frequency)
- `wlc_client_note_add` (id, note)
**Intake / bookings**
- `wlc_intake_list` (status, path, since) · `wlc_intake_get`
- `wlc_booking_create` / `wlc_booking_update_status` (incl. Zelle mark-paid flow)
**Handshake / resale**
- `wlc_handshake_list` (step, client) · `wlc_handshake_get` (full chain-of-custody state)
- `wlc_handshake_advance` (id, step action) — guarded; mirrors dashboard actions only
- `wlc_inventory_search` (text/category/platform/status) · `wlc_inventory_add`
- `wlc_payout_summary` (period → per-client net, first-Monday schedule from the agreement)
**Business truth (Internal Living Dashboard domains)**
- `wlc_facts_get` / `wlc_facts_set` (identity, contact, services, payments — timestamped, source-attributed)
- `wlc_voice_get` (tone rules, banned list — serves enforcement in any future session)
- `wlc_handoff_create` (objective, approved facts, open questions → handoff packet record)
**Workflow tools (high-leverage composites)**
- `wlc_daily_brief` (Today screen as text: open asks, pending intakes, tickets, payouts due)
- `wlc_listing_draft` (inventory item → platform-routed, SEO listing text per LISTING-WORKFLOW)

## Non-goals v1
No client-facing tools · no payment execution (Zelle is manual by design) · no destructive deletes · no content posting (Content-Engine later).

## Definition of done
Claude Code can run the server locally (stdio) and deployed (HTTP), every tool returns useful errors when DB/env is missing, and a fresh Claude session can run `wlc_daily_brief` + `wlc_client_list` and operate the business without file uploads.
