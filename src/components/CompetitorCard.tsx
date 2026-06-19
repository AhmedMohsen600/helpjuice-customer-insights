import type { Competitor } from "@/data/research";

type CompetitorCardProps = {
  competitor: Competitor;
};

export function CompetitorCard({ competitor }: CompetitorCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
      <h3 className="text-xl font-semibold text-slate-950">
        {competitor.name}
      </h3>
      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
            Users like
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{competitor.liked}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-700">
            Users dislike
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{competitor.disliked}</p>
        </div>
      </div>
      <div className="mt-6 border-t border-slate-100 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Lesson for Helpjuice
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-800">{competitor.lesson}</p>
      </div>
    </article>
  );
}
