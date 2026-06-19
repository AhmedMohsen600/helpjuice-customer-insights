type SectionHeaderProps = {
  kicker?: string;
  title: string;
  description?: string;
  level?: "h1" | "h2";
};

export function SectionHeader({
  kicker,
  title,
  description,
  level = "h2",
}: SectionHeaderProps) {
  const headingClassName =
    "font-display text-balance text-3xl font-semibold leading-[1.08] tracking-normal text-slate-950 md:text-5xl";

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {kicker}
        </p>
      ) : null}
      {level === "h1" ? (
        <h1 className={headingClassName}>{title}</h1>
      ) : (
        <h2 className={headingClassName}>{title}</h2>
      )}
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
