type SectionFallbackProps = {
  heightClassName?: string;
};

export default function SectionFallback({
  heightClassName = "min-h-24",
}: SectionFallbackProps) {
  return (
    <div
      className={`w-full ${heightClassName} animate-pulse rounded-3xl border border-white/10 bg-white/5`}
      aria-hidden="true"
    />
  );
}
