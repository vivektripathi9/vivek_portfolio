import { Typography } from "@/components/ui/Typography";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <Typography variant="eyebrow">{eyebrow}</Typography>
      <Typography as="h2" variant="h2" className="text-balance text-[var(--foreground)]">
        {title}
      </Typography>
      <Typography variant="body-md" className="text-balance">
        {description}
      </Typography>
    </div>
  );
}
