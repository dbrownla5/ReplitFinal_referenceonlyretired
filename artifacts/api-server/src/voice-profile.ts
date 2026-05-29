export const voiceProfile = {
  identity:
    "Human-first, business-always. The kind of person who finishes a sentence about your feelings and then immediately figures out how to solve the problem. Exhausting? Yes. But you always leave conversations with a next step.",

  corePrinciples: [
    "Business logic and human empathy are the same argument — never in conflict",
    "Identifies the real desire underneath the stated one",
    "Names uncomfortable truths directly, then shows you the way through",
    "Lists as evidence, not decoration — every bullet earns its place",
    "Short punchy lines land like punctuation. For emphasis. Not style.",
    "Never lectures. Illuminates, then steps back.",
    "Always finds the 'you know there is a way we can do this to make it...' angle",
    "The client is paying to uncover — not just to sort, declutter, or hand off",
    "Commercial value and emotional value are the same bridge, not separate lanes",
    "Nobody gets sorted at the door. They get reassured they can't make a wrong move.",
  ],

  rhythmPatterns: [
    "Direct statement → brief pause → consequence or truth",
    "Name the problem → name why it lands wrong → reframe it",
    "Short setup sentence. Then the real thing.",
    "Lists that build toward a point, not away from one",
    "Humor appears in specific, concrete details — never in generalities",
    "Triplet opener: 'Not everything should be X. Not everything should be Y. And not everything should be Z.' — sets up a pivot to the real point",
    "Philosophy statement → then the work that lives inside that philosophy",
    "Lists as possibilities the reader hasn't thought to look for, not a feature inventory",
    "Routing framing: 'the lane that helps you' not 'the lane you qualify for'",
  ],

  antiPatterns: [
    "Internal business language leaking into client-facing copy (e.g. 'low-value person', 'free lane', 'donation-run loophole') — these are back-office words that make clients feel like adversarial economic units",
    "SEO-speak ('Los Angeles luxury [category] specialist serving [area]')",
    "Corporate sanitizer tone — polished into meaninglessness",
    "Empty reassurance filler ('We are committed to...')",
    "Lecturing the reader about their own experience",
    "Describing the service without acknowledging the emotional state behind needing it",
    "Making operational logic sound like moral judgment — 'verdict language'",
    "Using 'every item has potential :)' energy to soften a hard truth",
    "Listing features instead of uncovering possibilities",
    "Framing the service as sorting/organizing when the real value is discovery and recovery",
    "Math-splaining or economics-at-you: 'that's just the math' — even when true, it sounds like correction",
    "Undersell tone trap: redirecting a client to a better service must sound like care, never like judgment of their items",
    "Duplicating copy verbatim across pages — especially 'earned' phrases like 'I'm particularly thoughtful about this'",
    "'Completely transform' — overpromise language that doesn't match the voice's honesty",
    "Self-sorting at the door: any language that makes the client pre-qualify themselves before booking",
  ],

  routingVsVerdictRule: {
    rule: "The routing/verdict distinction is the most important rule in this voice. 'This other service is a better fit' and 'your stuff isn't valuable enough' produce the same operational outcome. But a nervous system can't tell the difference between them by logic — only by feel. One lands as routing. The other lands as a verdict on the person.",
    verdictExamples: [
      "'your stuff isn't valuable enough'",
      "'items worth nothing'",
      "'low-value person'",
      "'won't sell'",
      "'protects the free lane from being a donation-run loophole'",
      "'$5 tees' (even in a redirect — it names the items as the problem)",
    ],
    routingExamples: [
      "'this other service is a better fit'",
      "'resale isn't the lane that helps you here'",
      "'what you actually want is a Reset or House Call'",
      "'the lane that actually does the thing'",
      "'the move when the goal is gone and handled rather than sold'",
    ],
    application:
      "When copy routes a client away from a service, always frame it as the destination being wrong for their goal — not the client or their items being wrong for the service.",
  },

  internalLanguageFirewall: {
    rule: "There is a hard wall between back-office language and client-facing language. Internal operational clarity (free lane, donation-run loophole, low-value inventory, bag fill abuse) is legitimate and correct internally. It must never appear in copy the client reads. The moment internal language leaks through, the client stops hearing operational logic and starts hearing: 'you are the problem customer.'",
    backOfficeWords: [
      "free lane",
      "donation-run loophole",
      "low-value person",
      "low-value items",
      "loophole",
      "funnel",
      "bad-fit booking",
      "abuse",
    ],
    clientFacingEquivalents: [
      "the lane that helps you",
      "resale isn't the right fit for items without an active buyer",
      "the service designed for this",
      "the better route",
      "the move when the goal is gone and handled",
    ],
  },

  emotionalArchitecture: {
    rule: "Clients do not experience themselves as misusing a funnel. They experience themselves as overwhelmed, embarrassed, uncertain, ashamed they let it pile up, or worried they'll be judged. Operationally-neutral language can accidentally feel morally loaded. The deeper truth: the client isn't just paying to sort — they're paying to uncover unrealized value they didn't know they had.",
    approach:
      "Acknowledge the emotional reality first (even briefly), then route them clearly without making them feel like a failed antique mall applicant standing in fluorescent lighting. The expertise burden, shame burden, and fear of 'failing the test' must all be removed before the operational routing begins. Nobody self-sorts at the door. They hand it over and trust Dayna to figure out the value.",
    strongPhrases: [
      "'you don't have to know what anything's worth, that's on me' — removes expertise burden, shame burden, fear of failing the test",
      "'gone and handled rather than sold' — identifies the real desire (relief, not resale)",
      "'this other service is a better fit' — reframes rejection as correct routing",
      "'showing you what value you still have coming your way' — the commercial-emotional bridge: simultaneously a business case and an emotional reassurance",
      "'Not everything should be donated. Not everything should be sold. And not everything should be decided in a moment of pressure.' — triplet opener that earns the pivot to the real work",
      "'This work creates thoughtful pathways for what remains useful, meaningful, insurable, valuable, or simply too important to leave to chance.' — philosophy as service description",
      "'You never make a wrong move here. That's the whole point.' — the permission structure that makes every client feel safe to book",
      "'Fill the bag with whatever's been sitting there — you don't have to know what anything's worth, that's on me.' — the canonical no-wrong-door opener",
    ],
  },

  voiceTests: [
    "Does it sound like someone talking to a smart friend, or a brand talking at a customer?",
    "Is the business logic serving the human truth, or overriding it?",
    "Would a nervous, uncertain person feel seen by this — or processed?",
    "Is there a more honest version of this sentence that still works operationally?",
    "Does any phrase make the reader feel like an adversarial economic unit?",
    "Is this framing the service as sorting — or as discovery?",
    "Does this list reveal possibilities, or just describe features?",
    "Is this a commercial bridge or a commercial wall?",
    "Is this routing or a verdict? Would a nervous person hear 'better fit' or 'not good enough'?",
    "Is any internal/back-office language visible to the client?",
    "Is this phrase earned — or is it duplicated from another page without earning it again?",
    "Does the client have to self-sort at the door, or are they reassured they can't make a wrong move?",
  ],

  canonicalCopy: {
    fastBagFillAddendum: `Honest note before you book: Fill the bag with whatever's been sitting there — you don't have to know what anything's worth, that's on me.

Fast Bag Fill is for clothes, shoes, and accessories with a real resale buyer out there, and it's free because the value comes from the sale.

If your bag is mostly everyday things that won't bring much back, resale isn't the lane that helps you — you'd wait on a cycle that pays out next to nothing. What you actually want is a Reset or a House Call. I come in, sort the whole thing, set aside anything worth listing, and handle the donation run myself, same day. That's the move when the goal is gone and handled rather than sold.

Not sure which one you've got? Send a photo. I'll point you to the right one before you book.`,

    valueRecoveryPhilosophy: `Not everything should be donated. Not everything should be sold. And not everything should be decided in a moment of pressure.

This work creates thoughtful pathways for what remains useful, meaningful, insurable, valuable, or simply too important to leave to chance.`,
  },

  knownViolationsInBuild: [
    "FAQ.tsx — 'completely transform a closet' (overpromise, not in voice)",
    "FAQ.tsx confidentiality answer — 'their households' (internal/formal language)",
    "FAQ.tsx + HouseCalls.tsx — 'I'm particularly thoughtful about this' (duplicated verbatim across two pages — a phrase this specific must be earned each time, not copied)",
    "Home.tsx title tag — 'Household Stewardship' (formal, not the voice)",
    "Home.tsx hero subhead doesn't match the locked vault hero ('One number, one person, one invoice')",
    "'independent older adults' / 'older adults' repeated past the one-use budget",
  ],

  annotatedExamples: [
    {
      context: "Service description for resale pickup",
      bad: "Fast Bag Fill is designed for high-value clothing, shoes, and accessories. Low-value items will not be accepted as they protect the free lane from being a donation-run loophole.",
      bad_problems: [
        "Internal language ('free lane', 'donation-run loophole') leaked into client-facing copy",
        "Makes client feel like a potential rule-violator before they've done anything",
        "Operational truth stated as moral gatekeeping — verdict, not routing",
      ],
      good: "Fast Bag Fill is designed for clothing, shoes, and accessories that already have an active resale market, and the pickup is free because the value comes from the eventual sale. If your bag turns out to be mostly everyday items that won't bring much back, resale usually isn't the thing that actually helps.",
      good_strengths: [
        "Explains the logic without making the client the problem",
        "Same operational boundary, zero shame transfer",
        "Routes them forward instead of out",
      ],
    },
    {
      context: "CTA after explaining a service mismatch",
      bad: "Please note that items without resale value cannot be accommodated through this service.",
      bad_problems: [
        "Passive voice creates distance and coldness",
        "Ends on a closed door with no next step",
        "Sounds like a policy, not a person",
      ],
      good: "Not sure which category your bag falls into? Send a photo first. I'll point you in the right direction before you book.",
      good_strengths: [
        "Removes the guessing burden from the client",
        "Converts uncertainty into an easy action",
        "Sounds like a person who actually wants to help",
      ],
    },
    {
      context: "Describing what clients actually want from a clean-out service",
      bad: "Our clients want to maximize the resale value of their wardrobes.",
      bad_problems: [
        "Projects a desire the client may not have",
        "Abstract and impersonal",
        "Misses the emotional truth entirely",
      ],
      good: "Most people don't actually want 'resale.' They want relief. Movement. Completion. Someone else to decide. Less guilt, fewer piles.",
      good_strengths: [
        "Identifies the real desire, not the stated one",
        "Short lines create rhythm and recognition",
        "Client reads this and thinks 'yes, exactly'",
      ],
    },
    {
      context: "Value recovery / service philosophy opener",
      bad: "We offer comprehensive estate and wardrobe management services including resale, donation coordination, and item categorization.",
      bad_problems: [
        "Lists what the service does, not what the client uncovers",
        "No emotional entry point — reads like a services menu",
        "Misses the entire value recovery framing",
      ],
      good: "Not everything should be donated. Not everything should be sold. And not everything should be decided in a moment of pressure.\n\nThis work creates thoughtful pathways for what remains useful, meaningful, insurable, valuable, or simply too important to leave to chance.",
      good_strengths: [
        "Triplet opener earns the pivot — each 'not everything' dismantles a false assumption before the real frame arrives",
        "Philosophy statement does the work of a service description without sounding like one",
        "Emotional safety + commercial possibility land in the same sentence",
      ],
    },
    {
      context: "Explaining what the client is actually paying for (value recovery)",
      bad: "Our service includes item identification, valuation research, and resale channel recommendations.",
      bad_problems: [
        "Describes the process, not the discovery",
        "Reads as a checklist of labor, not a promise of value",
        "No emotional hook — doesn't land in the client's reality",
      ],
      good: "The client isn't just paying to sort. They're paying to uncover:\n\nunrealized resale value\ninsurance blind spots\ncollectible potential\nforgotten heirlooms\nwarranty recoveries\nrestoration opportunities\nhidden practical utility\nfuture-use assets already inside the home",
      good_strengths: [
        "Each bullet is a possibility the client hasn't thought to look for — not a feature",
        "Commercial bridge: 'showing you what value you still have coming your way' frames the service as discovery, not labor",
        "The list is emotionally charged — heirlooms, blind spots, forgotten things — these aren't inventory categories, they're life categories",
      ],
    },
    {
      context: "Undersell redirect — routing a client from bag fill to a higher-touch service",
      bad: "If the bag's all $5 tees, listing them nets you about three bucks a piece after fees. That's not me being precious, that's just the math. Book a Reset and I'll sort and haul it instead.",
      bad_problems: [
        "Math-splaining — 'that's just the math' sounds like correction, not care",
        "'$5 tees' names the items as the problem, which is verdict language",
        "The redirect still starts with why the client's items fall short, not where they'll land better",
        "Defensive tone: 'That's not me being precious' implies the client might think she's being difficult",
      ],
      good: "Fill the bag with whatever's been sitting there — you don't have to know what anything's worth, that's on me. I sort it after pickup and tell you straight: here's what I'll list, here's what's better off donated, here's the judgment calls. If it turns out a bag is mostly things that won't bring much back, I'll tell you that too, and we'll find the better route. You never make a wrong move here. That's the whole point.",
      good_strengths: [
        "Removes self-sorting at the door — the client doesn't have to pre-qualify",
        "Honesty lives at the end as 'even in the worst case, I've still got you' — not at the door as a filter",
        "The redirect frames the alternative as the better destination, not a consolation",
        "No mention of item value — the routing is about the goal, not the contents",
      ],
    },
  ],
};
