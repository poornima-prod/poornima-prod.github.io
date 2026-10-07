/* =========================================================================
   CASEBOOK ENTRIES: the only file you edit to add or change a case.
   Both pages read it: the casebook shows every entry; the home page shows
   the ones marked  featured: true  (in the order they appear here).

   EASIEST WAY TO ADD ONE
   Open casebook.html?new in your browser, fill in the form, click "Copy entry",
   then paste it on the line below "TOP OF LIST" and commit.

   RULES (if you edit by hand)
   - Each entry sits between { and } and ends with a comma.
   - Text goes between backticks (`like this`). Apostrophes and quotes are fine;
     just don't type a backtick inside the text.
   - A blank line starts a new paragraph; lines starting "- " become bullets.
   - Entries show in the order listed. Put new ones at the top.

   FIELDS
     title      Short and specific                                  (required)
     type       Case study | Problem statement | Teardown
     date       e.g. Oct 2026
     status     e.g. In progress, Proposed                          (optional)
     framework  The one framework that genuinely shaped the call    (optional)
     context    Where this happened, in a few words
     tags       Skills shown, e.g. [`Problem framing`, `Metrics`]
     summary    1–2 sentences: the problem and the insight. Shown on cards.
     result     One line that lands: an outcome, or the decision.   (optional)
     problem / found / approach / outcome / open   The full map     (found, outcome, open optional)
     link       A URL, or a PDF uploaded next to index.html         (optional)
     featured   true = show on the home page (keep it to 3)         (optional)
     draft      true = hidden everywhere until you remove this line (optional)
   ========================================================================= */
window.ENTRIES = [
  // ↓↓ TOP OF LIST: paste new entries on the line below this one ↓↓

  {
    title: `Knowing when not to automate`,
    type: `Case study`,
    date: `2026`,
    framework: `Jobs to be done`,
    context: `Clinical review workflow, neurosurgical planning`,
    tags: [`Problem framing`, `AI judgment`, `Validation design`],
    summary: `Reviewers wanted imaging outputs ranked by relevance automatically. “Relevant” turned out to be two jobs: geometry a machine can compute, and clinical judgment it shouldn’t take over.`,
    result: `Scoped an aid for the computable job; the clinical call stays with the reviewer.`,
    problem: `Specialist reviewers spent much of each review working out which of roughly twenty imaging outputs mattered for a patient’s lesion. The ask: rank them automatically.`,
    found: `“Relevant” was two jobs sharing one word. Which outputs sit near the lesion is geometry, and computable. Which ones matter for this surgery is clinical judgment, and varies by surgeon. A proximity ranking would also have surfaced the least trustworthy signal first, since known false positives cluster closest to the lesion.`,
    approach: `Scoped a deterministic spatial aid that shows the geometry and leaves the relevance call with the reviewer: the human stays in charge by design, not by disclaimer. Before going live, it runs silently on already-reviewed cases and is checked against what reviewers actually marked.`,
    open: `Whether spatial lookup is really where review time goes (not yet measured), and whether labels like “review first” anchor less experienced reviewers.`,
    link: `Case_Study_Knowing_When_Not_To_Automate.pdf`,
    featured: true,
  },

  {
    title: `Making release governance legible`,
    type: `Case study`,
    date: `2026`,
    status: `Proposed`,
    framework: `One-way vs two-way doors`,
    context: `Platform configuration across sites, markets and modules`,
    tags: [`Systems thinking`, `Data modelling`, `Governance`],
    summary: `Nobody could say exactly what each hospital was running. I separated what’s sold from what runs, and treated every change to a clinical output as a one-way door.`,
    result: `Proposed rule: a change to a clinical output ships as a new frozen version, never a runtime flag.`,
    problem: `Different markets, regulatory states, modules and customer configurations made it hard to say what each site was running, while single hospitals increasingly needed commercial, research and study work side by side.`,
    found: `Three internal documents described three incompatible versioning models. Packaging and versioning were being treated as one thing, and runtime flags were doing the job of approved releases.`,
    approach: `- Separate what’s sold (packages, entitlements) from what runs (pinned, reproducible versions)
      - One test for a new version: does the change alter what a clinician sees as a finding? If yes, it’s a one-way door and gets a frozen release; if not, a flag is fine
      - An engagement layer between customer and version, so one hospital can run several streams, each pinned per protocol
      - Routing that is deterministic at intake and fails closed whenever anything is ambiguous`,
    open: `Whether an urgent safety fix may override a contractual version pin: a policy call for regulatory leadership.`,
    featured: true,
  },

  {
    title: `From a chat channel to a routed case pipeline`,
    type: `Case study`,
    date: `2026`,
    framework: `RACI (ownership mapping)`,
    context: `Support operations`,
    tags: [`Operations design`, `Triage`, `Instrumentation`],
    summary: `Complaints and failures lived in one chat channel, with no owners and no way to spot repeats. I mapped every failure type to the team that closes it and moved intake to a tracked board.`,
    result: `Product failure rate fell 40% in two months.`,
    problem: `Customer complaints and processing failures were all posted in one shared chat channel. No one could say which cases were open, who owned them, or which kept coming back.`,
    found: `Classifying six weeks of threads (100+ cases) into ten failure types, each with an owning team, surfaced two hidden patterns: the most common failure clustered in one workflow at a few sites, and a status message was telling customers jobs had failed when the part they needed had succeeded.`,
    approach: `- A per-case board keyed on a non-identifying case ID, so no patient data enters the tracker
      - Support assigns severity and owns follow-up; failure-type tags make repeats countable
      - Closing a case asks for a link to whatever resolved it
      - The chat channel stays for coordination; the board is the record`,
    outcome: `With structured defect tracking in place, the product failure rate fell by 40% in two months.`,
    open: `Next: a reason code captured at intake, so the pattern data builds itself.`,
    featured: true,
  },

  {
    title: `The CRM request that was really a billing problem`,
    type: `Case study`,
    date: `2026`,
    framework: `Build vs buy`,
    context: `Commercial operations and finance`,
    tags: [`Problem framing`, `Buy vs build`, `Privacy by design`],
    summary: `A request to evaluate a CRM was really a billing and reconciliation problem. Splitting it into build and buy decisions unblocked most of the work straight away.`,
    result: `Three of five dashboards moved ahead without waiting on a vendor.`,
    problem: `Evaluate a CRM for the marketing team.`,
    found: `The real pain was downstream: finance reconciled usage-based invoices by hand and work orders lived in scattered files. Of three layers (metering, reconciling what’s invoiceable, a billing system of record), only the last was a buy decision. The review also surfaced a habit of treating every case as billable and correcting later.`,
    approach: `Leadership approved Zoho as the billing system of record, while everything clinical stays in our product. Opaque tokens keep patient identifiers out of the billing tool, and I pushed for data-sensitivity tagging before the database schema locked.`,
    open: `Surfacing billing through our own interface, so closing the month doesn’t mean switching systems.`,
  },

  {
    title: `Routing hospital data to the right customer`,
    type: `Problem statement`,
    date: `2026`,
    status: `In progress`,
    framework: `Failure modes (FMEA)`,
    context: `Imaging integration for a multi-site hospital group`,
    tags: [`Interoperability`, `Data integrity`, `Risk thinking`],
    summary: `Imaging studies were matched to customers using a free-text field that sites can change or leave blank. I mapped how routing could fail before scaling it.`,
    result: `Routing designed to fail closed: hold for review rather than guess.`,
    problem: `A multi-site hospital group shares one central imaging archive, so studies were routed to the right customer account using a free-text institution field.`,
    found: `That field is set by each site, can change without notice, and is sometimes missing. Inconsistent metadata like this can block adoption before a clinician sees any value.`,
    approach: `- Define behaviour for a missing or changed field
      - Deterministic routing at intake; fail closed on any ambiguous match
      - Identify scan types from the standard’s authoritative identifier, not loosely used tags
      - Keep de-duplication and series selection as separate steps`,
    open: `The fallback identifier when the institution field is missing.`,
  },

  {
    title: `Choosing an analytics stack for sensitive data`,
    type: `Problem statement`,
    date: `2026`,
    context: `Product analytics and observability`,
    tags: [`Metrics`, `Privacy`, `Decision brief`],
    summary: `Three analytics tools looked equal on paper. The deciding risk, session replay capturing patient imaging, wasn’t in any feature matrix.`,
    result: `Recommended PostHog, with explicit limits on what it may capture.`,
    problem: `Choose product analytics and observability tooling for a platform whose core screens display patient imaging.`,
    found: `Session replay in the monitoring stack couldn’t mask sensitive data drawn in a 3D canvas, exactly where the core viewer renders. Privacy risk lives in how events and replays are designed, not only in where data is hosted.`,
    approach: `A two-page decision brief comparing PostHog, Mixpanel and Amplitude, recommending PostHog with conditions on what it captures.`,
  },

  {
    title: `Three use cases, one messaging channel`,
    type: `Problem statement`,
    date: `2026`,
    framework: `Riskiest assumption first`,
    context: `WhatsApp Business integration`,
    tags: [`Scoping`, `Problem framing`],
    summary: `A brief proposed one messaging channel for three conflicting jobs. Testing the riskiest assumptions first flagged one as unworkable before any engineering time was spent.`,
    problem: `Use WhatsApp for urgent surgeon alerts, interactive selection of imaging outputs, and marketing, all at once.`,
    found: `Interactive selection needs scan viewing, which the channel can’t carry. Clinical alerts and marketing opt-outs pull in opposite directions, the brief had no success metrics, and everything depended on a verified surgeon phone registry that didn’t exist yet.`,
    approach: `Validate the remaining use cases with clinical partners before committing engineering time, and treat the phone registry as a phase-zero blocker.`,
  },

  {
    title: `Ledgerline: post-sales operations for a B2B fintech`,
    type: `Teardown`,
    date: `2026`,
    status: `In progress`,
    context: `Self-initiated project in a fictional B2B fintech company`,
    tags: [`Workflow automation`, `Customer health`, `Backlog`],
    summary: `Three connected mini-projects: support-ticket routing, a post-sales customer health dashboard, and a prioritised backlog.`,
    problem: `Add the problem here when it's ready.`,
    approach: `Add your approach here, then delete the draft line below.`,
    draft: true,
  },

];
