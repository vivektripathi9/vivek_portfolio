"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MultiplayerCursor, SelectionFrame } from "@/components/ui/Figma";
import {
  designGroups,
  designs,
  figmaDesigns,
  figmaEmbedUrl,
  pageDesigns,
  type Design,
  type FigmaDesign,
  type PageDesign,
} from "@/data/designs";
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

function FigmaViewer({ design, onClose }: { design: FigmaDesign; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      data-lenis-prevent
      onClose={onClose}
      aria-label={`${design.title} design`}
      className="fixed inset-0 m-auto h-[calc(100dvh-1.5rem)] max-h-none w-[calc(100vw-1.5rem)] max-w-none overflow-hidden rounded-2xl border border-line bg-[#111113] p-0 text-foreground backdrop:bg-black/85 md:h-[calc(100dvh-3rem)] md:w-[calc(100vw-3rem)]"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 md:px-6">
          <div className="flex min-w-0 items-baseline gap-3">
            <h2 className="display-sm truncate">{design.title}</h2>
            <p className="body-sm hidden sm:block">Drag to move. Scroll or pinch to zoom.</p>
          </div>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="min-h-11 shrink-0 rounded-full border border-line px-5 text-sm transition-colors hover:border-foreground"
          >
            Close
          </button>
        </div>
        <div className="relative min-h-0 flex-1">
          {loaded ? null : (
            <p className="label absolute inset-0 flex items-center justify-center">Loading design…</p>
          )}
          <iframe
            src={figmaEmbedUrl(design)}
            title={`${design.title} Figma design`}
            allowFullScreen
            onLoad={() => setLoaded(true)}
            className="relative h-full w-full border-0"
          />
        </div>
      </div>
    </dialog>
  );
}

function PageDesignViewer({ design, onClose }: { design: PageDesign; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [viewLabel, setViewLabel] = useState(design.views[0].label);
  const view = design.views.find((option) => option.label === viewLabel) ?? design.views[0];

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      data-lenis-prevent
      onClose={onClose}
      aria-label={`${design.title} design`}
      className="fixed inset-0 m-auto h-[calc(100dvh-1.5rem)] max-h-none w-[calc(100vw-1.5rem)] max-w-none overflow-hidden rounded-2xl border border-line bg-[#111113] p-0 text-foreground backdrop:bg-black/85 md:h-[calc(100dvh-3rem)] md:w-[calc(100vw-3rem)]"
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-6">
          <div className="flex min-w-0 items-baseline gap-3">
            <h2 className="display-sm truncate">{design.title}</h2>
            <p className="body-sm hidden sm:block">{design.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 rounded-full border border-line p-1" role="group" aria-label="Device">
              {design.views.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setViewLabel(option.label)}
                  aria-pressed={option.label === view.label}
                  className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${option.label === view.label ? "bg-accent text-on-accent" : "text-muted hover:text-foreground"}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="min-h-11 shrink-0 rounded-full border border-line px-5 text-sm transition-colors hover:border-foreground"
            >
              Close
            </button>
          </div>
        </div>
        <div key={view.label} tabIndex={0} aria-label={`${design.title} ${view.label} design, scrollable`} className="min-h-0 flex-1 overflow-y-auto bg-black/30">
          <div className="mx-auto w-full" style={{ maxWidth: view.width }}>
            {view.images.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`${design.title} ${view.label} design, part ${index + 1} of ${view.images.length}`}
                width={view.width}
                height={image.height}
                preload={index === 0}
                className="block h-auto w-full"
                sizes={`(max-width: ${view.width}px) 100vw, ${view.width}px`}
              />
            ))}
          </div>
        </div>
      </div>
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
  const [openFigma, setOpenFigma] = useState<FigmaDesign | null>(null);
  const [openPage, setOpenPage] = useState<PageDesign | null>(null);
  const [layerHover, setLayerHover] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const visible = designs.filter((design) => activeGroup === "All" || design.group === activeGroup);

  return (
    <section>
      <div className="pb-12 pt-36 md:pb-16 md:pt-48">
        <Container className="text-center">
          <p className="label mb-6">Designs — {String(pageDesigns.length + figmaDesigns.length).padStart(2, "0")}</p>
          <TextReveal as="h1" className="display-xl" text={"The *canvas*"} stagger={0.08} />
        </Container>
      </div>

      <div className="pb-16 md:pb-24">
        <Container>
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {pageDesigns.map((design) => (
              <li key={design.title}>
                <button
                  type="button"
                  onClick={() => setOpenPage(design)}
                  aria-label={`View ${design.title} design`}
                  className="group block w-full text-left"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-line transition-colors duration-300 group-hover:border-accent">
                    <Image
                      src={design.poster}
                      alt={`${design.title} design preview`}
                      fill
                      className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </span>
                  <span className="mt-4 flex items-center justify-between gap-4">
                    <span className="display-sm transition-colors group-hover:!text-accent">{design.title}</span>
                    <span className="label shrink-0">View design ↗</span>
                  </span>
                </button>
              </li>
            ))}
            {figmaDesigns.map((design) => (
              <li key={design.title}>
                <button
                  type="button"
                  onClick={() => setOpenFigma(design)}
                  aria-label={`View ${design.title} design`}
                  className="group block w-full text-left"
                >
                  <span className="canvas-dots relative block aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-300 group-hover:border-accent">
                    <Image
                      src={design.poster}
                      alt={`${design.title} design preview`}
                      fill
                      className="object-contain p-3 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </span>
                  <span className="mt-4 flex items-center justify-between gap-4">
                    <span className="display-sm transition-colors group-hover:!text-accent">{design.title}</span>
                    <span className="label shrink-0">View design ↗</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div className="pb-8">
        <Container>
          <p className="label">Design references — {String(designs.length).padStart(2, "0")}</p>
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
      {openFigma ? <FigmaViewer design={openFigma} onClose={() => setOpenFigma(null)} /> : null}
      {openPage ? <PageDesignViewer design={openPage} onClose={() => setOpenPage(null)} /> : null}
    </section>
  );
}
