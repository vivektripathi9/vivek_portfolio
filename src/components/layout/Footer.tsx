import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white/75 md:py-12">
      <Container>
        <Typography variant="caption" className="text-center !text-white/75">
          Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}
