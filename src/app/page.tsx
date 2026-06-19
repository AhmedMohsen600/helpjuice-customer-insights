import { ComplaintMappingRow } from "@/components/ComplaintMappingRow";
import { CompetitorCard } from "@/components/CompetitorCard";
import { IdeaCard } from "@/components/IdeaCard";
import { PainPointCard } from "@/components/PainPointCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SourceList } from "@/components/SourceList";
import {
  complaintMappings,
  competitors,
  painPoints,
  productIdeas,
  sources,
} from "@/data/research";

const navItems = [
  { label: "Ideas", href: "#ideas" },
  { label: "Complaints", href: "#complaints" },
  { label: "Needs", href: "#build" },
  { label: "Competitors", href: "#competitors" },
  { label: "Sources", href: "#sources" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#ideas" className="text-sm font-semibold text-slate-950">
            Helpjuice customer insight brief
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

      <section id="ideas" className="bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Product ideas"
            title="Product ideas based on what customers actually ask for."
            description="A short set of practical moves: help users ask instead of read, make AI answers verifiable, improve weak documents, and turn feedback into a content workflow."
            level="h1"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {productIdeas.map((idea, index) => (
              <IdeaCard
                key={idea.title}
                idea={idea}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="complaints" className="px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="What customers complain about"
            title="The clearest complaints point to trust gaps."
            description="Reviewers rarely complain in roadmap language. They describe daily friction: broken formatting, weak search confidence, confusing pricing, risky migrations, and customization that needs too much help."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {painPoints.map((painPoint) => (
              <PainPointCard key={painPoint.pain} painPoint={painPoint} />
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="border-y border-slate-200 bg-white px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Build what customers ask for"
            title="From complaint to product direction."
            description="This translates review language into the job customers are really trying to do, then into a practical product move Helpjuice could explore."
          />
          <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:px-8">
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

      <section id="competitors" className="px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Competitor lessons"
            title="Competitor lessons worth acting on."
            description="The useful signal is not who is better. It is where buyers hit friction: bloat, brittle authoring, opaque pricing, weak portability, and support workflows that do not connect to knowledge work."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {competitors.map((competitor) => (
              <CompetitorCard key={competitor.name} competitor={competitor} />
            ))}
          </div>
        </div>
      </section>

      <footer id="sources" className="border-t border-slate-200 bg-white px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Sources reviewed
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Public review platforms, product community threads, and customer discussions.
              The page uses qualitative patterns only, not invented scores or claims.
            </p>
          </div>
          <SourceList sources={sources} />
        </div>
      </footer>
    </main>
  );
}
