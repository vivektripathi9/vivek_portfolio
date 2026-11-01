"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef, type MouseEvent } from "react";

import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MultiplayerCursor, SelectionFrame } from "@/components/ui/Figma";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { useIntroDone } from "@/hooks/useIntroDone";

const frames = [
  { name: "tryBello", image: "/projects/trybello.jpg", className: "left-[3%] top-[14%] w-[17vw]", depth: -22, scroll: -90, rotate: -4 },
  { name: "Stratus", image: "/projects/stratus.jpg", className: "right-[3%] top-[14%] w-[17vw]", depth: 26, scroll: -130, rotate: 4 },
  { name: "Tula Projects", image: "/projects/tulaprojects.jpg", className: "bottom-[7%] left-[4%] w-[15vw]", depth: 16, scroll: -200, rotate: 3 },
  { name: "NATUF", image: "/projects/natuf.jpg", className: "bottom-[7%] right-[4%] w-[15vw]", depth: -16, scroll: -240, rotate: -3, selected: true },
];

function FloatingFrame({
  frame,
  index,
  pointerX,
  pointerY,
  scroll,
  play,
}: {
  frame: (typeof frames)[number];
  index: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scroll: MotionValue<number>;
  play: boolean;
}) {
  const reduceMotion = useHydratedReducedMotion();
  const x = useTransform(pointerX, [-0.5, 0.5], [-frame.depth, frame.depth]);
  const pointerOffsetY = useTransform(pointerY, [-0.5, 0.5], [-frame.depth, frame.depth]);
  const y = useTransform(
    [pointerOffsetY, scroll],
    ([pointer, progress]) => (pointer as number) + (progress as number) * frame.scroll,
  );

  return (
    <motion.div className={`absolute ${frame.className}`} style={reduceMotion ? undefined : { x, y }}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8, rotate: frame.rotate * 3, y: 80 }}
        animate={play ? { opacity: 1, scale: 1, rotate: frame.rotate, y: 0 } : undefined}
        transition={{ duration: 1.4, delay: 0.25 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <SelectionFrame label={frame.selected ? `Frame / ${frame.name}` : undefined} active={Boolean(frame.selected)}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] shadow-[0_40px_90px_rgba(0,0,0,0.65)]">
            <Image src={frame.image} alt="" fill preload className="object-cover object-top" sizes="18vw" />
          </div>
        </SelectionFrame>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const play = useIntroDone();
  const reduceMotion = useHydratedReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.9], [1, 0]);

  function onMove(event: MouseEvent<HTMLElement>) {
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="canvas-dots relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-10 pt-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="aurora-blob -left-[10%] top-[8%] h-[52rem] w-[52rem] [--blob:rgba(122,95,42,0.5)]" />
        <span className="aurora-blob right-[2%] top-[30%] h-[46rem] w-[46rem] [--blob:rgba(63,58,120,0.45)] [animation-delay:-7s]" />
        <span className="aurora-blob bottom-[-20%] left-[35%] h-[40rem] w-[60rem] [--blob:rgba(227,194,133,0.16)] [animation-delay:-12s]" />
      </div>

      <div className="absolute inset-0 hidden lg:block">
        {frames.map((frame, index) => (
          <FloatingFrame
            key={frame.name}
            frame={frame}
            index={index}
            pointerX={pointerX}
            pointerY={pointerY}
            scroll={scrollYProgress}
            play={play}
          />
        ))}
        <MultiplayerCursor
          name="Vivek"
          color="#e3c285"
          className="left-[14%] top-[44%]"
          path={{ x: ["0vw", "4vw", "-6vw", "2vw"], y: ["0vh", "-8vh", "4vh", "10vh"] }}
        />
        <MultiplayerCursor
          name="You"
          color="#a5b4fc"
          className="left-[80%] top-[48%]"
          duration={18}
          path={{ x: ["0vw", "6vw", "-3vw", "4vw"], y: ["0vh", "-10vh", "6vh", "-4vh"] }}
        />
      </div>

      <motion.div className="relative z-20" style={reduceMotion ? undefined : { opacity: contentOpacity }}>
        <Container className="text-center">
          <motion.p
            className="label mb-6 flex items-center justify-center gap-3"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={play ? { opacity: 1 } : undefined}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#78dc96]" />
            {siteConfig.name} — {siteConfig.title}
          </motion.p>

          <TextReveal as="h1" className="display-xl !text-[clamp(3.1rem,min(10vw,18vh),11rem)]" text={siteConfig.heroHeadline} play={play} stagger={0.07} />

          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-md lg:hidden">
            <Image src="/projects/natuf.jpg" alt="" fill className="object-cover object-top" sizes="100vw" />
          </div>

          <motion.div
            className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-6 lg:mt-10"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={play ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="body-lg">{siteConfig.heroBio}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href={siteConfig.projectsHref}>See the work</Button>
              <Button href={siteConfig.whatsappUrl} variant="outline">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
