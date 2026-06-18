import type { ComplaintMapping } from "@/data/research";

type ComplaintMappingRowProps = {
  mapping: ComplaintMapping;
  index: number;
};

export function ComplaintMappingRow({ mapping, index }: ComplaintMappingRowProps) {
  return (
    <div className="grid gap-4 border-t border-slate-200 py-5 md:grid-cols-[56px_1fr_1fr_1.2fr] md:items-start">
      <div className="font-mono text-xs text-slate-400">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:hidden">
          Customer complaint
        </p>
        <p className="text-sm font-medium leading-6 text-slate-950">
          {mapping.complaint}
        </p>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:hidden">
          Real need
        </p>
        <p className="text-sm leading-6 text-slate-600">{mapping.realNeed}</p>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:hidden">
          Better product idea
        </p>
        <p className="text-sm leading-6 text-slate-800">{mapping.productIdea}</p>
      </div>
    </div>
  );
}
