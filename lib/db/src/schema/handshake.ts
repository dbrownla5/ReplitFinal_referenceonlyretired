import { pgTable, serial, text, boolean, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { contactSubmissions } from "./contact";

/**
 * The Handshake — a 9-step chain-of-custody workflow for a single client engagement.
 *
 * Steps (the `step` column moves forward through these, never skipping):
 *   1. intake        — agreement signed + record opened (the legal gate)
 *   2. day_before    — day-before pickup confirmation sent
 *   3. custody       — physical custody transferred at pickup
 *   4. inventory     — 48-hour count verification done
 *   5. evaluation    — 7–10 business-day evaluation underway
 *   6. report        — intake report (item list) sent to client
 *   7. consent       — 24-hour client consent window (client can pull items)
 *   8. review        — 4-day review period
 *   9. payout        — 30-day payout clock; closed when paid
 *
 * The gate: a record only reaches `intake` (open on the board) when
 * `agreementAccepted` is true AND `agreementTimestamp` is set. Submissions
 * without a signature are stored with `blocked = true` and kept off the board.
 */
export const HANDSHAKE_STEPS = [
  "intake",
  "day_before",
  "custody",
  "inventory",
  "evaluation",
  "report",
  "consent",
  "review",
  "payout",
  "closed",
] as const;
export type HandshakeStep = (typeof HANDSHAKE_STEPS)[number];

export const handshakes = pgTable("handshakes", {
  id: serial("id").primaryKey(),
  // Public, unguessable token used for the client-facing consent page (/consent/:token)
  token: text("token").notNull().unique(),
  contactSubmissionId: integer("contact_submission_id").references(() => contactSubmissions.id),

  // Client + engagement details (mirrors the intake form)
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email").notNull(),
  clientPhone: text("client_phone"),
  neighborhood: text("neighborhood"),
  summary: text("summary"),
  situation: text("situation"),
  bagsCount: text("bags_count"),
  estimatedItems: text("estimated_items"),
  urgency: text("urgency"),
  pickupMethod: text("pickup_method"),
  pickupTime1: text("pickup_time_1"),
  pickupTime2: text("pickup_time_2"),
  pickupRelease: boolean("pickup_release").default(false),
  courierNotes: text("courier_notes"),

  // The legal gate
  agreementAccepted: boolean("agreement_accepted").notNull().default(false),
  agreementTimestamp: timestamp("agreement_timestamp", { withTimezone: true }),
  signatureName: text("signature_name"),
  // true when stored without a valid signature — kept off the board, flagged
  blocked: boolean("blocked").notNull().default(false),

  // Workflow state
  step: text("step").notNull().default("intake"),

  // Per-step timestamps (audit-friendly; null until the step runs)
  dayBeforeAt: timestamp("day_before_at", { withTimezone: true }),
  custodyAt: timestamp("custody_at", { withTimezone: true }),
  inventoryAt: timestamp("inventory_at", { withTimezone: true }),
  evaluationAt: timestamp("evaluation_at", { withTimezone: true }),
  reportSentAt: timestamp("report_sent_at", { withTimezone: true }),
  consentDecisionAt: timestamp("consent_decision_at", { withTimezone: true }),
  reviewAt: timestamp("review_at", { withTimezone: true }),

  // Consent outcome
  consentDecision: text("consent_decision"), // "approved" | "changes" | null

  // Payout
  payoutDate: timestamp("payout_date", { withTimezone: true }),
  payoutPaidAt: timestamp("payout_paid_at", { withTimezone: true }),
  payoutClientTotalCents: integer("payout_client_total_cents"),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const ITEM_TIERS = ["standard", "contemporary", "designer", "luxury"] as const;
export type ItemTier = (typeof ITEM_TIERS)[number];

export const ITEM_DISPOSITIONS = ["list", "donate", "return", "biohazard"] as const;
export type ItemDisposition = (typeof ITEM_DISPOSITIONS)[number];

export const handshakeItems = pgTable("handshake_items", {
  id: serial("id").primaryKey(),
  handshakeId: integer("handshake_id").notNull().references(() => handshakes.id),
  description: text("description").notNull(),
  platform: text("platform"),
  tier: text("tier").notNull().default("standard"),
  disposition: text("disposition").notNull().default("list"),

  // Estimates shown in the intake report (cents)
  startPriceCents: integer("start_price_cents"),
  estSaleCents: integer("est_sale_cents"),
  estTurnDays: integer("est_turn_days"),

  // Client consent decision on this specific item
  clientPulled: boolean("client_pulled").notNull().default(false),

  // Actuals once sold (cents)
  soldGrossCents: integer("sold_gross_cents"),
  feesCents: integer("fees_cents"),
  shippingCents: integer("shipping_cents"),
  netClientCents: integer("net_client_cents"),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/** Immutable audit log — one row per action taken on a handshake. */
export const handshakeEvents = pgTable("handshake_events", {
  id: serial("id").primaryKey(),
  handshakeId: integer("handshake_id").notNull().references(() => handshakes.id),
  step: text("step").notNull(),
  action: text("action").notNull(),
  detail: jsonb("detail"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const insertHandshakeSchema = createInsertSchema(handshakes).omit({ id: true, createdAt: true, updatedAt: true });
export const insertHandshakeItemSchema = createInsertSchema(handshakeItems).omit({ id: true, createdAt: true });

export type Handshake = typeof handshakes.$inferSelect;
export type InsertHandshake = typeof handshakes.$inferInsert;
export type HandshakeItem = typeof handshakeItems.$inferSelect;
export type InsertHandshakeItem = typeof handshakeItems.$inferInsert;
export type HandshakeEvent = typeof handshakeEvents.$inferSelect;
