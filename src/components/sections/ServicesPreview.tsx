"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label mb-5">Services</p>
            <TextReveal className="display-lg" text={"What I can\n*build* for you"} />
          </div>
          <Button href="/services" variant="outline">
            All services
          </Button>
        </div>

        <ul className="mt-14 border-b border-line">
          {services.map((service) => (
            <li key={service.id} className="border-t border-line">
              <Reveal>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative grid items-center gap-2 overflow-hidden py-6 md:grid-cols-12 md:gap-6 md:py-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
                  />
                  <span className="label relative transition-colors duration-300 group-hover:!text-on-accent md:col-span-1 md:pl-4">
                    {service.number}
                  </span>
                  <span className="display-md relative transition-all duration-500 group-hover:translate-x-3 group-hover:!text-on-accent md:col-span-6">
                    {service.title}
                  </span>
                  <span className="body-sm relative pr-4 transition-colors duration-300 group-hover:!text-on-accent md:col-span-4">
                    {service.summary}
                  </span>
                  <span className="relative hidden justify-end pr-4 transition-colors duration-300 group-hover:text-on-accent md:col-span-1 md:flex">
                    <ServiceGlyph name={service.icon} className="h-6 w-6" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
