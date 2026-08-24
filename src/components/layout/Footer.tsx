import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Typography variant="nav" className="text-[var(--foreground)]">
            {siteConfig.name}
          </Typography>
          <Typography variant="body-sm">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </Typography>
        </div>

        <Typography variant="caption">
          Replace this placeholder content with your real profile, projects, and contact details.
        </Typography>
      </Container>
    </footer>
  );
}
