import type { Source } from "@/data/research";

type SourceListProps = {
  sources: Source[];
};

export function SourceList({ sources }: SourceListProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {sources.map((source) => (
        <a
          key={source.href}
          href={source.href}
          target="_blank"
          rel="noreferrer"
          className="group rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition duration-200 hover:border-slate-300 hover:text-slate-950"
        >
          <span>{source.label}</span>
          <span className="ml-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-300 transition group-hover:text-slate-500">
            Source
          </span>
        </a>
      ))}
    </div>
  );
}
