import type { PainPoint } from "@/data/research";

type PainPointCardProps = {
  painPoint: PainPoint;
};

export function PainPointCard({ painPoint }: PainPointCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between gap-5">
        <h3 className="max-w-sm text-xl font-semibold text-slate-950">
          {painPoint.pain}
        </h3>
        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
          Opportunity
        </span>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            What customers really mean
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{painPoint.meaning}</p>
        </div>
        <div className="border-t border-slate-200 pt-4 md:border-l md:border-t-0 md:pl-4 md:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Product move
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-800">{painPoint.opportunity}</p>
        </div>
      </div>
    </article>
  );
}
