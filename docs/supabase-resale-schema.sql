-- WLC Resale Handshake — database schema (record of what is live in Supabase)
-- Applied 2026-06-14 to Supabase project "ReplitFinal" (oyhxftbyjdtnmeofkkba)
-- via migration `wlc_resale_handshake_schema`.
--
-- Source of truth for the schema is the Drizzle definitions in
-- lib/db/src/schema/*.ts. This file is the generated DDL that those produce
-- (via `pnpm --filter @workspace/db run push`), kept here as a readable,
-- version-tracked record. RLS is enabled on every table (deny-by-default to the
-- public API; the backend connects via the service role and bypasses RLS).

CREATE TABLE public.contact_submissions (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text,
    neighborhood text,
    client_type text,
    summary text,
    situation text,
    bags_count text,
    urgency text,
    pickup_time_1 text,
    pickup_time_2 text,
    pickup_method text,
    pickup_release boolean DEFAULT false,
    courier_notes text,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.contact_submissions_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public.contact_submissions_id_seq OWNED BY public.contact_submissions.id;

CREATE TABLE public.handshake_events (
    id integer NOT NULL,
    handshake_id integer NOT NULL,
    step text NOT NULL,
    action text NOT NULL,
    detail jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.handshake_events_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public.handshake_events_id_seq OWNED BY public.handshake_events.id;

CREATE TABLE public.handshake_items (
    id integer NOT NULL,
    handshake_id integer NOT NULL,
    description text NOT NULL,
    platform text,
    tier text DEFAULT 'standard'::text NOT NULL,
    disposition text DEFAULT 'list'::text NOT NULL,
    start_price_cents integer,
    est_sale_cents integer,
    est_turn_days integer,
    client_pulled boolean DEFAULT false NOT NULL,
    sold_gross_cents integer,
    fees_cents integer,
    shipping_cents integer,
    net_client_cents integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.handshake_items_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public.handshake_items_id_seq OWNED BY public.handshake_items.id;

CREATE TABLE public.handshakes (
    id integer NOT NULL,
    token text NOT NULL,
    contact_submission_id integer,
    client_name text NOT NULL,
    client_email text NOT NULL,
    client_phone text,
    neighborhood text,
    summary text,
    situation text,
    bags_count text,
    estimated_items text,
    urgency text,
    pickup_method text,
    pickup_time_1 text,
    pickup_time_2 text,
    pickup_release boolean DEFAULT false,
    courier_notes text,
    agreement_accepted boolean DEFAULT false NOT NULL,
    agreement_timestamp timestamp with time zone,
    signature_name text,
    blocked boolean DEFAULT false NOT NULL,
    step text DEFAULT 'intake'::text NOT NULL,
    day_before_at timestamp with time zone,
    custody_at timestamp with time zone,
    inventory_at timestamp with time zone,
    evaluation_at timestamp with time zone,
    report_sent_at timestamp with time zone,
    consent_decision_at timestamp with time zone,
    review_at timestamp with time zone,
    consent_decision text,
    payout_date timestamp with time zone,
    payout_paid_at timestamp with time zone,
    payout_client_total_cents integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.handshakes_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public.handshakes_id_seq OWNED BY public.handshakes.id;

ALTER TABLE ONLY public.contact_submissions ALTER COLUMN id SET DEFAULT nextval('public.contact_submissions_id_seq'::regclass);
ALTER TABLE ONLY public.handshake_events ALTER COLUMN id SET DEFAULT nextval('public.handshake_events_id_seq'::regclass);
ALTER TABLE ONLY public.handshake_items ALTER COLUMN id SET DEFAULT nextval('public.handshake_items_id_seq'::regclass);
ALTER TABLE ONLY public.handshakes ALTER COLUMN id SET DEFAULT nextval('public.handshakes_id_seq'::regclass);

ALTER TABLE ONLY public.contact_submissions ADD CONSTRAINT contact_submissions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.handshake_events ADD CONSTRAINT handshake_events_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.handshake_items ADD CONSTRAINT handshake_items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.handshakes ADD CONSTRAINT handshakes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.handshakes ADD CONSTRAINT handshakes_token_unique UNIQUE (token);

ALTER TABLE ONLY public.handshake_events ADD CONSTRAINT handshake_events_handshake_id_handshakes_id_fk FOREIGN KEY (handshake_id) REFERENCES public.handshakes(id);
ALTER TABLE ONLY public.handshake_items ADD CONSTRAINT handshake_items_handshake_id_handshakes_id_fk FOREIGN KEY (handshake_id) REFERENCES public.handshakes(id);
ALTER TABLE ONLY public.handshakes ADD CONSTRAINT handshakes_contact_submission_id_contact_submissions_id_fk FOREIGN KEY (contact_submission_id) REFERENCES public.contact_submissions(id);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.handshakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.handshake_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.handshake_events ENABLE ROW LEVEL SECURITY;
