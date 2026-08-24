import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="section-padding pb-20">
      <Container>
        <Reveal>
          <div className="panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="space-y-4">
                <Typography variant="eyebrow">Contact</Typography>
                <Typography
                  as="h2"
                  variant="display-sm"
                  className="max-w-3xl text-balance text-[var(--foreground)]"
                >
                  {siteConfig.contactHeadline}
                </Typography>
                <Typography variant="body-lg" className="max-w-2xl">
                  {siteConfig.contactDescription}
                </Typography>
              </div>

              <div className="space-y-5 lg:justify-self-end">
                <Button href={`mailto:${siteConfig.email}`} className="w-full sm:w-auto">
                  {siteConfig.email}
                </Button>
                <div className="flex flex-wrap gap-4">
                  {siteConfig.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="type-nav text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
