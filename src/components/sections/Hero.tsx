import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="section-padding pt-10 md:pt-14">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div className="space-y-8">
            <Reveal>
              <Tag label={siteConfig.availability} />
            </Reveal>

            <Reveal delay={0.08} className="space-y-6">
              <Typography
                as="h1"
                variant="display-xl"
                className="max-w-5xl text-balance text-[var(--foreground)]"
              >
                {siteConfig.heroIntro}
              </Typography>
              <Typography variant="body-lg" className="max-w-2xl text-balance">
                {siteConfig.heroDescription}
              </Typography>
            </Reveal>

            <Reveal delay={0.14} className="flex flex-wrap gap-4">
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="secondary">
                Book a Discovery Call
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="panel rounded-[2rem] p-6 md:p-7">
              <div className="space-y-8">
                <div className="space-y-3">
                  <Typography variant="eyebrow">Profile</Typography>
                  <Typography as="p" variant="h3" className="text-[var(--foreground)]">
                    {siteConfig.name}
                  </Typography>
                  <Typography variant="body-md">{siteConfig.title}</Typography>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/4 p-4">
                    <Typography variant="caption">Base</Typography>
                    <Typography as="p" variant="h5" className="mt-2 text-[var(--foreground)]">
                      {siteConfig.location}
                    </Typography>
                  </div>
                  <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/4 p-4">
                    <Typography variant="caption">Focus</Typography>
                    <Typography as="p" variant="h5" className="mt-2 text-[var(--foreground)]">
                      UX-driven frontend systems
                    </Typography>
                  </div>
                </div>

                <div className="space-y-3 rounded-[1.25rem] border border-[var(--border)] bg-[var(--accent-soft)] p-5">
                  <Typography variant="caption">Selected Capability</Typography>
                  <Typography as="p" variant="h4" className="text-[var(--foreground)]">
                    End-to-end portfolio, landing page, and product UI execution.
                  </Typography>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
