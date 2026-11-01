"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MultiplayerCursor, SelectionFrame } from "@/components/ui/Figma";
import { designGroups, designs, type Design } from "@/data/designs";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function DesignPreview({ design, onClose }: { design: Design; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      data-lenis-prevent
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) ref.current?.close();
      }}
      aria-label={`${design.title} preview`}
      className="m-auto w-[min(100%-2rem,72rem)] overflow-hidden rounded-2xl border border-line bg-[#111113] p-0 text-foreground backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[16/9] bg-black/40">
          <Image src={design.image} alt={`${design.title} preview`} fill className="object-contain" sizes="72rem" />
        </div>
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display-sm">{design.title}</h2>
            <p className="body-sm mt-1">
              By {design.author}. {design.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {design.figmaUrl ? <Button href={design.figmaUrl}>Open in Figma</Button> : null}
            <Button href={design.sourceUrl} variant="outline">
              View on GitHub
            </Button>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="min-h-12 rounded-full px-5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </dialog>
  );
}

function CanvasFrame({
  design,
  canvas,
  draggable,
  highlighted,
  onOpen,
  index,
}: {
  design: Design;
  canvas: React.RefObject<HTMLDivElement | null>;
  draggable: boolean;
  highlighted: boolean;
  onOpen: () => void;
  index: number;
}) {
  const reduceMotion = useHydratedReducedMotion();
  const dragged = useRef(false);
  const [hover, setHover] = useState(false);

  return (
    <motion.li
      drag={draggable}
      dragConstraints={canvas}
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={() => {
        dragged.current = true;
      }}
      whileDrag={{ scale: 1.03, zIndex: 20, cursor: "grabbing" }}
      initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.94 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={draggable ? "relative cursor-grab" : "relative"}
    >
      <SelectionFrame label={`Frame / ${design.title}`} active={hover || highlighted}>
        <div
          onPointerDown={() => {
            dragged.current = false;
          }}
          onClick={() => {
            if (!dragged.current) onOpen();
          }}
          className="group block w-full cursor-inherit"
        >
          <span className="relative block aspect-[16/10] overflow-hidden bg-black/40 shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
            <Image
              src={design.image}
              alt=""
              fill
              draggable={false}
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </span>
        </div>
      </SelectionFrame>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <button type="button" onClick={onOpen} aria-label={`Preview ${design.title}`} className="text-left text-sm hover:text-accent">
          {design.title} <span className="text-soft">by {design.author}</span>
        </button>
        <p className="label shrink-0">{design.group}</p>
      </div>
    </motion.li>
  );
}

export function DesignsShowcase() {
  const [activeGroup, setActiveGroup] = useState<(typeof designGroups)[number]>("All");
  const [selected, setSelected] = useState<Design | null>(null);
  const [layerHover, setLayerHover] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const visible = designs.filter((design) => activeGroup === "All" || design.group === activeGroup);

  return (
    <section>
      <div className="pb-12 pt-36 md:pb-16 md:pt-48">
        <Container className="text-center">
          <p className="label mb-6">Design references — {String(designs.length).padStart(2, "0")}</p>
          <TextReveal as="h1" className="display-xl" text={"The *canvas*"} stagger={0.08} />
        </Container>
      </div>

      <div className="border-y border-line lg:grid lg:grid-cols-[17rem_1fr]">
        <aside className="border-b border-line p-5 lg:border-b-0 lg:border-r">
          <div className="lg:sticky lg:top-28">
            <p className="label mb-3">Pages</p>
            <div className="flex flex-wrap gap-1 lg:flex-col">
              {designGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setActiveGroup(group)}
                  aria-pressed={group === activeGroup}
                  className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${group === activeGroup ? "bg-accent text-on-accent" : "text-muted hover:bg-surface hover:text-foreground"}`}
                >
                  {group}
                </button>
              ))}
            </div>

            <p className="label mb-3 mt-8 hidden lg:block">Layers</p>
            <ul className="hidden lg:block">
              {visible.map((design) => (
                <li key={design.title}>
                  <button
                    type="button"
                    onClick={() => setSelected(design)}
                    onMouseEnter={() => setLayerHover(design.title)}
                    onMouseLeave={() => setLayerHover(null)}
                    className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <span aria-hidden="true" className="h-2.5 w-2.5 border border-accent" />
                    {design.title}
                  </button>
                </li>
              ))}
            </ul>

            <p className="body-sm mt-8 hidden lg:block">Drag any frame around the canvas. Click to open it.</p>
          </div>
        </aside>

        <div ref={canvasRef} className="canvas-dots relative overflow-hidden p-6 pt-12 md:p-14">
          <MultiplayerCursor
            name="Vivek"
            color="#e3c285"
            className="left-[20%] top-[12%] hidden lg:flex"
            path={{ x: ["0%", "180%", "60%", "240%"], y: ["0%", "300%", "900%", "1400%"] }}
            duration={22}
          />
          <ul key={activeGroup} className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {visible.map((design, index) => (
              <CanvasFrame
                key={design.title}
                design={design}
                canvas={canvasRef}
                draggable={desktop}
                highlighted={layerHover === design.title}
                onOpen={() => setSelected(design)}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>

      {selected ? <DesignPreview design={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
