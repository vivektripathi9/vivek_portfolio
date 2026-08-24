import { Typography } from "@/components/ui/Typography";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <Typography as="h2" variant="eyebrow" className={`mb-8 md:mb-10 ${className}`}>
      {title}
    </Typography>
  );
}
