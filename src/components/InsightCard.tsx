import type { Insight } from "@/data/research";

type InsightCardProps = {
  insight: Insight;
  index?: number;
};

export function InsightCard({ insight, index }: InsightCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        {typeof index === "number" ? (
          <span className="font-mono text-xs text-slate-400">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : (
          <span className="h-px w-8 bg-slate-200" />
        )}
        <span className="h-2 w-2 rounded-full bg-slate-300 transition group-hover:bg-slate-500" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
        {insight.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-slate-600">{insight.insight}</p>
      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Why it matters
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">{insight.whyItMatters}</p>
      </div>
    </article>
  );
}
