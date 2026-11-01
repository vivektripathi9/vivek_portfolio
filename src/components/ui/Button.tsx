"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { Magnetic } from "@/components/motion/Magnetic";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
};

const variants = {
  primary: "bg-accent text-on-accent",
  outline: "border border-line text-foreground hover:border-foreground",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <Magnetic>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-7 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
      >
        <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[220%]">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute flex translate-y-[220%] items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </Link>
    </Magnetic>
  );
}
