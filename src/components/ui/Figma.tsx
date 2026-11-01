"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

/** Figma-style selection box: outline, four corner handles, and a name tag. */
export function SelectionFrame({
  label,
  children,
  active = true,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}) {
  const handle = "absolute h-2 w-2 border border-[#e3c285] bg-[#0a0a0b]";

  return (
    <div className={`relative ${className}`}>
      {label ? (
        <span className="label absolute -top-6 left-0 whitespace-nowrap !text-[0.65rem] !text-[#e3c285]">{label}</span>
      ) : null}
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
      >
        <span className="absolute inset-0 border border-[#e3c285]" />
        <span className={`${handle} -left-1 -top-1`} />
        <span className={`${handle} -right-1 -top-1`} />
        <span className={`${handle} -bottom-1 -left-1`} />
        <span className={`${handle} -bottom-1 -right-1`} />
      </span>
    </div>
  );
}

/** Multiplayer cursor with a name tag, drifting along a looping path. */
export function MultiplayerCursor({
  name,
  color,
  path,
  duration = 14,
  className = "",
}: {
  name: string;
  color: string;
  path: { x: string[]; y: string[] };
  duration?: number;
  className?: string;
}) {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-30 flex items-start ${className}`}
      animate={reduceMotion ? undefined : path}
      transition={{ duration, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
    >
      <svg width="20" height="22" viewBox="0 0 20 22" fill={color}>
        <path d="M1 1l6.2 18.5 2.9-7.6 7.9-2.6L1 1z" stroke="#0a0a0b" strokeWidth="1" />
      </svg>
      <span
        className="mt-4 -ml-1 rounded-full px-2.5 py-1 text-[0.7rem] font-medium whitespace-nowrap text-[#0a0a0b]"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </motion.div>
  );
}
