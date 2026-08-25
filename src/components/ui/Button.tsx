"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const linkProps = {
    href,
    target: external ? ("_blank" as const) : undefined,
    rel: external ? "noopener noreferrer" : undefined,
  };

  if (variant === "primary") {
    return (
      <motion.div
        className="inline-flex"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <Link
          {...linkProps}
          className={`group relative inline-flex min-h-[2.5rem] items-center justify-center overflow-hidden bg-black px-8 py-3 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-white sm:text-[0.875rem] ${className}`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
          <span className="relative z-[1] font-medium text-white transition-colors duration-300 group-hover:text-black">
            {children}
          </span>
        </Link>
      </motion.div>
    );
  }

  const ghostOutline = {
    ghost: "text-black/70 hover:text-black",
    outline:
      "border border-black text-black hover:bg-black hover:text-white",
  } as const;

  return (
    <Link
      {...linkProps}
      className={`inline-flex items-center justify-center rounded-none px-8 py-3 text-[0.8rem] font-medium uppercase tracking-[0.08em] transition duration-300 sm:text-[0.875rem] ${ghostOutline[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
