type SectionHeaderProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-balance text-4xl font-normal leading-[1.04] tracking-normal text-slate-950 md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
