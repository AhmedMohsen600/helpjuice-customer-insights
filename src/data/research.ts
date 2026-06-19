export type Insight = {
  title: string;
  insight: string;
  whyItMatters: string;
};

export type PainPoint = {
  pain: string;
  meaning: string;
  opportunity: string;
};

export type Competitor = {
  name: string;
  liked: string;
  disliked: string;
  lesson: string;
};

export type Opportunity = {
  title: string;
  problem: string;
  whyItMatters: string;
  direction: string;
};

export type ProductIdea = {
  title: string;
  signal: string;
  idea: string;
  impact: string;
};

export type ComplaintMapping = {
  complaint: string;
  realNeed: string;
  productIdea: string;
};

export type Source = {
  label: string;
  href: string;
};

export const executiveInsights: Insight[] = [
  {
    title: "Focused beats bundled",
    insight:
      "Helpjuice is strongest when buyers want a real knowledge base, not a full helpdesk suite.",
    whyItMatters:
      "Review discussions show teams often leave suite tools when the KB becomes trapped behind complexity or plan upgrades.",
  },
  {
    title: "Trust is the product gap",
    insight:
      "The market is not asking for more generic features. It is asking for answers users can find, verify, maintain, and move.",
    whyItMatters:
      "Search, AI governance, analytics, and export complaints are all trust problems in different clothing.",
  },
  {
    title: "The editor is daily work",
    insight:
      "Tables, paste behavior, images, file references, and long-document performance are repeated pain points.",
    whyItMatters:
      "A knowledge base lives or dies by whether support and docs teams can update it without friction.",
  },
  {
    title: "AI needs controls",
    insight:
      "Users like AI answers when they reduce repetitive tickets, but want analytics, feedback, citations, and training paths.",
    whyItMatters:
      "AI without governance creates doubt, especially when it becomes customer-facing.",
  },
  {
    title: "Analytics should prescribe action",
    insight:
      "Teams do not need prettier charts. They need to know which article, search, answer, or gap to fix next.",
    whyItMatters:
      "The clearest product opportunity is turning customer confusion into a prioritized content workflow.",
  },
];

export const lovedPatterns: Insight[] = [
  {
    title: "Easy setup",
    insight:
      "Users praise tools that let support teams publish a useful help center without a long implementation cycle.",
    whyItMatters:
      "Fast setup lowers the political risk of switching from Zendesk, Intercom, Confluence, or ad hoc docs.",
  },
  {
    title: "Strong support",
    insight:
      "Helpjuice, KnowledgeOwl, Document360, and Help Scout all earn trust when support is responsive and practical.",
    whyItMatters:
      "A KB migration is high-stakes; buyers value expert help almost as much as software features.",
  },
  {
    title: "Customization",
    insight:
      "Customers love when a help center looks like part of the product, not like a generic support portal.",
    whyItMatters:
      "Brand fit affects customer confidence before a user reads a single article.",
  },
  {
    title: "Search",
    insight:
      "Search is consistently treated as the core value of a KB, especially when the content library grows.",
    whyItMatters:
      "If users cannot find the answer, every other knowledge-base feature becomes secondary.",
  },
  {
    title: "Analytics",
    insight:
      "Users respond to analytics when it reveals article performance, search gaps, and content quality.",
    whyItMatters:
      "Teams need proof that documentation work reduces support load.",
  },
  {
    title: "Focused KB experience",
    insight:
      "Standalone KB tools win when teams do not want helpdesk bloat, agent-seat upgrades, or unrelated workflows.",
    whyItMatters:
      "The wedge is clarity: be the best knowledge base, then integrate with the rest of the stack.",
  },
];

export const painPoints: PainPoint[] = [
  {
    pain: "Editor, table, and paste friction",
    meaning:
      "Users are not asking for a prettier editor. They want tables, copied styles, images, and file references to behave like normal work tools.",
    opportunity:
      "Create a docs-grade editor with spreadsheet-like tables, smart paste cleanup, reusable blocks, and large-document performance.",
  },
  {
    pain: "AI search lacks feedback and training",
    meaning:
      "Admins want to know what users asked, what the AI used, whether the answer helped, and how to improve the next answer.",
    opportunity:
      "Build an AI Answer Lab with citations, usage analytics, thumbs up/down, unresolved-query clusters, and source-quality checks.",
  },
  {
    pain: "Pricing feels unpredictable",
    meaning:
      "Seat upgrades, AI outcomes, interaction billing, and plan gating make buyers worry that success will increase cost unexpectedly.",
    opportunity:
      "Use transparent KB-first pricing with unlimited readers, included AI allowance, hard caps, and clear upgrade boundaries.",
  },
  {
    pain: "Migration and export feel risky",
    meaning:
      "Users view their knowledge base as a business asset. API-only export and unclear redirect handling create lock-in anxiety.",
    opportunity:
      "Offer complete import/export, media portability, redirect mapping, broken-link scans, and launch previews.",
  },
  {
    pain: "Integration gaps become workflow gaps",
    meaning:
      "When feedback cannot become a Jira task or articles cannot surface in tickets, knowledge work leaves the flow of work.",
    opportunity:
      "Make Jira, Zendesk, Intercom, Freshdesk, Slack, Teams, Salesforce, and GitHub integrations part of the content loop.",
  },
  {
    pain: "Customization needs expert help",
    meaning:
      "Customers love branded KBs, but dislike CSS dependency, paid test environments, or fragile theme changes.",
    opportunity:
      "Ship a visual theme studio with staging preview, accessibility checks, version history, and rollback.",
  },
];

export const competitors: Competitor[] = [
  {
    name: "Document360",
    liked:
      "Structured documentation, versioning, responsive support, and a strong writing/publishing workflow.",
    disliked:
      "Editor lag in long docs, table formatting issues, limited design options, and pricing concerns for smaller teams.",
    lesson:
      "Win mature docs teams with governance, but make authoring and design flexibility feel lighter.",
  },
  {
    name: "Zendesk Guide",
    liked:
      "Deep ticket integration and a familiar support-suite workflow for teams already inside Zendesk.",
    disliked:
      "Clunky CMS experience, KB clutter, expensive AI/feature upgrades, and API-only article export.",
    lesson:
      "Helpjuice can win by staying KB-first while integrating cleanly with support workflows.",
  },
  {
    name: "Intercom Help Center / Fin",
    liked:
      "Polished in-app support, strong AI deflection, and a help experience close to the customer journey.",
    disliked:
      "Pricing predictability, reporting complexity, and export friction for large internal/article libraries.",
    lesson:
      "AI is loved when it resolves real questions, but it must be measurable, portable, and financially predictable.",
  },
  {
    name: "Help Scout Docs",
    liked:
      "Clean UI, easy onboarding, human support tone, Docs + Beacon integration, and lightweight article ratings.",
    disliked:
      "Advanced reporting and Docs depth can feel limited; editor changes have created frustration for some users.",
    lesson:
      "Simplicity is a strength only if power users do not hit a wall as the knowledge base matures.",
  },
  {
    name: "Freshdesk Knowledge Base",
    liked:
      "Affordable support operations, automation, ticket routing, and a KB included in the helpdesk workflow.",
    disliked:
      "Suite components can feel stitched together, customization/reporting can be gated, and glitches erode trust.",
    lesson:
      "Avoid suite bloat. Make the KB experience coherent even when it connects to ticketing and AI.",
  },
  {
    name: "KnowledgeOwl",
    liked:
      "Exceptional support, intuitive setup, customization, unlimited readers, and content review workflows.",
    disliked:
      "Reporting depth, WYSIWYG learning curve, and some layout workarounds for specialized presentation needs.",
    lesson:
      "Support quality and simple pricing build trust; deeper analytics can turn trust into expansion.",
  },
  {
    name: "Guru",
    liked:
      "Verified internal knowledge, Slack/browser workflow access, onboarding use cases, and trust in current content.",
    disliked:
      "Keyword-limited search, search performance at scale, analytics gaps, and per-user pricing concerns.",
    lesson:
      "Verification is powerful. Pair it with faster search and external/customer-facing publishing.",
  },
  {
    name: "Confluence",
    liked:
      "Collaboration, Jira integration, page history, templates, and internal wiki flexibility.",
    disliked:
      "Slow large pages, clutter, search relevance problems, formatting friction, and poor fit for public KBs.",
    lesson:
      "Internal collaboration is not the same as customer self-service. Keep the public KB clean and intentional.",
  },
];

export const opportunities: Opportunity[] = [
  {
    title: "Better editor experience",
    problem:
      "Real reviews mention tables, copy/paste, image handling, file references, long documents, and formatting stability.",
    whyItMatters:
      "The editor is where the knowledge base is maintained every week. Friction here becomes stale content later.",
    direction:
      "Build a structured editor with table blocks, smart paste, reusable components, file previews, and visual diffs.",
  },
  {
    title: "Search + AI answer trust",
    problem:
      "Users praise fast answers but ask for AI feedback, training, citations, and usage analytics.",
    whyItMatters:
      "AI support only scales if teams can understand and improve answer quality.",
    direction:
      "Combine semantic search, classic results, citations, answer feedback, source freshness, and admin review tools.",
  },
  {
    title: "Actionable analytics",
    problem:
      "Analytics are often passive: views, searches, and ratings without a clear next action.",
    whyItMatters:
      "Support teams need direction, not dashboards they have to interpret after the fact.",
    direction:
      "Create a knowledge health cockpit that prioritizes failed searches, stale articles, low-rated answers, and repeated tickets.",
  },
  {
    title: "Migration and portability",
    problem:
      "Zendesk and Intercom export paths can require API work; migration concerns appear in switching discussions.",
    whyItMatters:
      "Buyers trust products more when they know their knowledge is not trapped.",
    direction:
      "Offer import/export for articles, media, redirects, metadata, permissions, and article history with pre-launch validation.",
  },
  {
    title: "Customization without engineering dependency",
    problem:
      "Customers love branded KBs but dislike CSS-heavy workflows, paid staging, and fragile theme changes.",
    whyItMatters:
      "A CEO-facing help center must look trustworthy without creating engineering drag.",
    direction:
      "Create a visual theme editor with brand tokens, mobile preview, accessibility checks, staging, and rollback.",
  },
];

export const productIdeas: ProductIdea[] = [
  {
    title: "AI Agent for Document Questions",
    signal:
      "Long articles create time-to-answer friction even when the right answer already exists.",
    idea:
      "Let users ask a question inside an article or document set. The AI reads the full context, answers in plain language, and links the supporting passages.",
    impact:
      "Turns the knowledge base from a static archive into an answer layer without hiding the original documentation.",
  },
  {
    title: "Use Latest Frontend Technology",
    signal:
      "Customers judge knowledge software by speed, clarity, and reliability before they ever read the roadmap.",
    idea:
      "Use React, Next.js, TypeScript, and Tailwind CSS to keep the interface fast, accessible, responsive, and easier to evolve.",
    impact:
      "Gives search, AI answers, analytics, and admin workflows a polished foundation instead of feeling bolted on.",
  },
  {
    title: "Smarter Search Experience",
    signal:
      "Users complain when search misses obvious answers or returns too many weak results.",
    idea:
      "Improve ranking, typo tolerance, synonyms, filters, suggested results, and no-result handling so users reach the right answer faster.",
    impact:
      "Reduces support friction before a user ever opens a ticket.",
  },
  {
    title: "AI Answer Trust",
    signal:
      "AI answers are useful only when users and admins can trust where they came from.",
    idea:
      "Show cited sections, source links, freshness signals, and a clear fallback when the answer cannot be supported by the document.",
    impact:
      "Makes AI feel accountable instead of mysterious.",
  },
  {
    title: "Analytics-Based Content Improvements",
    signal:
      "Admins need to know what customers ask most and which content is not helping.",
    idea:
      "Surface common questions, failed searches, low-rated answers, weak articles, and content owners with suggested next actions.",
    impact:
      "Turns analytics from passive reporting into a content improvement workflow.",
  },
  {
    title: "Document Quality Score",
    signal:
      "Knowledge bases become stale when teams cannot see which documents are weak.",
    idea:
      "Score each document using clarity, completeness, age, broken links, user feedback, and whether AI can answer from it cleanly.",
    impact:
      "Gives teams a simple way to prioritize what to review next.",
  },
  {
    title: "Customer Feedback Loop",
    signal:
      "Helpful/not helpful feedback is one of the fastest ways to find content that needs attention.",
    idea:
      "Let users rate answers with reason tags like outdated, unclear, missing step, or wrong product, then route the issue into an admin review queue.",
    impact:
      "Connects customer frustration directly to article improvements.",
  },
  {
    title: "Smart Content Suggestions",
    signal:
      "Repeated questions and failed searches reveal missing articles before a team notices manually.",
    idea:
      "Suggest new articles or updates based on recurring questions, ticket patterns, negative ratings, and search failures.",
    impact:
      "Helps the knowledge base improve itself from real customer behavior.",
  },
];

export const complaintMappings: ComplaintMapping[] = [
  {
    complaint: "Tables are hard to edit.",
    realNeed: "Customers need confidence while authoring structured support content.",
    productIdea: "Spreadsheet-like table block with responsive preview and CSV import.",
  },
  {
    complaint: "AI answers need training.",
    realNeed: "Teams need trust, control, and a way to improve answer quality.",
    productIdea: "AI Answer Lab with feedback, citations, confidence, and retraining queue.",
  },
  {
    complaint: "Analytics are passive.",
    realNeed: "Support and docs teams need direction on what to fix next.",
    productIdea: "Knowledge health cockpit with prioritized content tasks.",
  },
  {
    complaint: "Migration is risky.",
    realNeed: "Buyers need confidence that content, links, media, and SEO survive a switch.",
    productIdea: "Import/export and redirect wizard with validation before launch.",
  },
  {
    complaint: "Customization needs help.",
    realNeed: "Teams need brand control without engineering dependency.",
    productIdea: "Visual theme editor with staging preview, accessibility checks, and rollback.",
  },
  {
    complaint: "Search returns too much or misses obvious answers.",
    realNeed: "Users need relevant answers, not just indexed content.",
    productIdea: "Semantic search with exact-match controls, filters, synonyms, and no-result analytics.",
  },
];

export const sources: Source[] = [
  {
    label: "Helpjuice on G2",
    href: "https://www.g2.com/products/helpjuice/reviews",
  },
  {
    label: "Helpjuice on TrustRadius",
    href: "https://www.trustradius.com/products/helpjuice/reviews",
  },
  {
    label: "Helpjuice on Software Advice",
    href: "https://www.softwareadvice.com/crm/helpjuice-profile/",
  },
  {
    label: "Document360 on G2",
    href: "https://www.g2.com/products/document360/reviews",
  },
  {
    label: "Zendesk Guide discussion on Reddit",
    href: "https://www.reddit.com/r/technicalwriting/comments/18x0w4q/any_new_thoughts_on_zendesk_guide/",
  },
  {
    label: "Intercom export community thread",
    href: "https://community.intercom.com/knowledge-6/export-of-internal-articles-7633",
  },
  {
    label: "Help Scout on TrustRadius",
    href: "https://www.trustradius.com/products/help-scout/reviews",
  },
  {
    label: "Freshdesk on Capterra",
    href: "https://www.capterra.com/p/124981/Freshdesk/reviews/",
  },
  {
    label: "KnowledgeOwl on Software Advice",
    href: "https://www.softwareadvice.com/help-desk/knowledgeowl-profile/reviews/",
  },
  {
    label: "Guru on G2",
    href: "https://www.g2.com/products/guru/reviews",
  },
  {
    label: "Confluence on G2",
    href: "https://www.g2.com/products/confluence/reviews",
  },
  {
    label: "Helpjuice on Product Hunt",
    href: "https://www.producthunt.com/p/helpjuice",
  },
];
