import type { ProductIdea } from "@/data/research";

type IdeaCardProps = {
  idea: ProductIdea;
  index: number;
  featured?: boolean;
};

export function IdeaCard({ idea, index, featured = false }: IdeaCardProps) {
  return (
    <article
      className={[
        "group rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]",
        featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-400">
          Idea {String(index + 1).padStart(2, "0")}
        </span>
        {featured ? (
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
            Highest leverage
          </span>
        ) : (
          <span className="h-2 w-2 rounded-full bg-slate-300 transition group-hover:bg-slate-500" />
        )}
      </div>
      <h3 className="max-w-xl text-xl font-semibold leading-tight text-slate-950 md:text-2xl">
        {idea.title}
      </h3>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Research signal
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{idea.signal}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Product idea
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{idea.idea}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Why it matters
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-800">{idea.impact}</p>
        </div>
      </div>
    </article>
  );
}
