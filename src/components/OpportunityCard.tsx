import type { Opportunity } from "@/data/research";

type OpportunityCardProps = {
  opportunity: Opportunity;
  index: number;
};

export function OpportunityCard({ opportunity, index }: OpportunityCardProps) {
  return (
    <article className="grid gap-6 border-t border-slate-200 py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <div>
        <p className="font-mono text-sm text-slate-400">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          {opportunity.title}
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Problem
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">{opportunity.problem}</p>
        </div>
        <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Why it matters
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {opportunity.whyItMatters}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-950 p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Direction
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-100">
            {opportunity.direction}
          </p>
        </div>
      </div>
    </article>
  );
}
