"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

/** Oversized text band that drifts on its own and speeds up with scroll velocity. */
export function VelocityMarquee({ items, speed = 3 }: { items: readonly string[]; speed?: number }) {
  const reduceMotion = useHydratedReducedMotion();
  const position = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const x = useTransform(position, (value) => `${-(((value % 50) + 50) % 50)}%`);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    const direction = boost.get() < 0 ? -1 : 1;
    position.set(position.get() + direction * speed * (delta / 1000) * (1 + Math.abs(boost.get())));
  });

  const row = [...items, ...items];

  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line py-6 md:py-9">
      <motion.div className="flex w-max" style={{ x }}>
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="display-md flex shrink-0 items-center whitespace-nowrap">
            <span className={index % 2 ? "text-outline" : ""}>{item}</span>
            <span className="mx-6 text-[0.6em] text-accent md:mx-10">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
