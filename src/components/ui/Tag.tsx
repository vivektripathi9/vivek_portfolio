type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="type-caption inline-flex rounded-full border border-[var(--border)] bg-white/4 px-3 py-1.5 text-[var(--foreground)]">
      {label}
    </span>
  );
}
