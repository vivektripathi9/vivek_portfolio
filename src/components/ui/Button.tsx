import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const buttonVariants = {
  primary:
    "bg-[var(--foreground)] text-[var(--background)] hover:-translate-y-0.5 hover:bg-white",
  secondary:
    "border border-[var(--border)] bg-white/4 text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]",
  ghost:
    "text-[var(--foreground)] hover:-translate-y-0.5 hover:text-[var(--accent-strong)]",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`type-button inline-flex items-center justify-center rounded-full px-5 py-3 transition duration-300 ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
