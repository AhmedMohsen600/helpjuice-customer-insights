import { ComplaintMappingRow } from "@/components/ComplaintMappingRow";
import { CompetitorCard } from "@/components/CompetitorCard";
import { InsightCard } from "@/components/InsightCard";
import { OpportunityCard } from "@/components/OpportunityCard";
import { PainPointCard } from "@/components/PainPointCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SourceList } from "@/components/SourceList";
import {
  complaintMappings,
  competitors,
  executiveInsights,
  lovedPatterns,
  opportunities,
  painPoints,
  sources,
} from "@/data/research";

const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Love", href: "#love" },
  { label: "Complaints", href: "#complaints" },
  { label: "Competitors", href: "#competitors" },
  { label: "Opportunities", href: "#opportunities" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-tight text-slate-950">
            Helpjuice Review Intelligence
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-500 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="mb-8 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                Public reviews, competitor research, and customer discussions
              </div>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                What knowledge base customers really want.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
                A concise customer-review intelligence brief for Helpjuice: what users
                praise, what frustrates them, and where a focused knowledge base product
                can earn more trust.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                The central finding
              </p>
              <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-slate-950">
                The market gap is not more features. It is trust, clarity, and
                maintainability.
              </p>
              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {["Editor quality", "AI answer trust", "Actionable analytics", "Portability"].map(
                  (item) => (
                    <div
                      key={item}
                      className="py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="summary" className="px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Executive summary"
            title="Helpjuice already has the right wedge."
            description="Real review patterns show Helpjuice is respected because it is focused, customizable, searchable, and well-supported. The opportunity is to make that focus feel even more trustworthy at scale."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {executiveInsights.map((insight, index) => (
              <InsightCard key={insight.title} insight={insight} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="love" className="border-y border-slate-200 bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="What customers love"
            title="The praise is practical, not flashy."
            description="The words users repeat are simple: easy, responsive, searchable, customizable, organized. Those are not marketing adjectives; they are retention drivers."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lovedPatterns.map((insight) => (
              <InsightCard key={insight.title} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <section id="complaints" className="px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="What customers complain about"
            title="The complaints are usually deeper than the feature name."
            description="When users say search, editor, AI, analytics, or pricing is frustrating, they are often describing a loss of confidence in their ability to keep knowledge useful."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {painPoints.map((painPoint) => (
              <PainPointCard key={painPoint.pain} painPoint={painPoint} />
            ))}
          </div>
        </div>
      </section>

      <section id="competitors" className="border-y border-slate-200 bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Competitor lessons"
            title="Every competitor is teaching the same lesson from a different angle."
            description="The strongest products create trust through ease, workflow fit, and support. The weakest moments come from bloat, brittle authoring, opaque pricing, or weak portability."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {competitors.map((competitor) => (
              <CompetitorCard key={competitor.name} competitor={competitor} />
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Opportunity map"
            title="Five places to turn customer frustration into product advantage."
            description="These are not speculative roadmap ideas. Each one maps to repeated review complaints across Helpjuice and the broader knowledge base category."
          />
          <div>
            {opportunities.map((opportunity, index) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Build what customers ask for"
            title="Complaint to need to product idea."
            description="The strongest product moves come from translating literal complaints into the underlying customer job."
          />
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:px-8">
            <div className="hidden grid-cols-[56px_1fr_1fr_1.2fr] border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:grid">
              <span />
              <span>Customer complaint</span>
              <span>Real need</span>
              <span>Better product idea</span>
            </div>
            {complaintMappings.map((mapping, index) => (
              <ComplaintMappingRow
                key={mapping.complaint}
                mapping={mapping}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Final recommendation
            </p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Become the easiest knowledge base to trust, maintain, and improve.
            </h2>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-slate-300">
            <p>
              Helpjuice already has a strong position because it is focused and trusted.
              The next opportunity is to make that trust operational: better authoring,
              better AI governance, better analytics, safer customization, and cleaner
              portability.
            </p>
            <p className="mt-6">
              The product promise can stay simple: help teams understand what customers
              cannot find, fix it faster, prove whether the fix worked, and keep control
              of their knowledge as they grow.
            </p>
          </div>
        </div>
      </section>

      <footer className="px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Sources reviewed
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Public review platforms, product community threads, and customer discussions.
              Insights are qualitative signals, not invented quantitative claims.
            </p>
          </div>
          <SourceList sources={sources} />
        </div>
      </footer>
    </main>
  );
}
