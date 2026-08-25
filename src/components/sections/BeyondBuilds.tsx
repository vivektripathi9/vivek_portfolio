import { Typography } from "@/components/ui/Typography";

const extras = ["UI/UX tweaks", "Speed ops", "Custom features"];

export function BeyondBuilds() {
  return (
    <div className="grid gap-5 border-t border-black/10 pt-10 sm:gap-8 sm:pt-12 md:grid-cols-2 md:items-start md:gap-16 md:pt-14">
      <Typography as="h3" variant="h2" className="max-w-sm text-black">
        Beyond the full builds
      </Typography>
      <div className="max-w-xl space-y-5">
        <Typography variant="body-md" className="text-black/70">
          I&apos;ve also partnered with dozens of other Shopify brands on critical
          features, performance work, and targeted UI refinements that moved the
          numbers without a full rebuild.
        </Typography>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {extras.map((item) => (
            <li
              key={item}
              className="type-caption text-black/40"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
