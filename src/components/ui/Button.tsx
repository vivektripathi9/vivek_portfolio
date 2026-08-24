import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
};

const buttonVariants = {
  primary:
    "bg-[#9e8857] text-white hover:bg-[#9e6857] hover:text-white",
  ghost: "text-[#9e8857] hover:text-black",
  outline:
    "border border-[#9e8857] text-[#9e8857] hover:bg-[#9e8857] hover:text-white",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`type-button inline-flex items-center justify-center rounded-none px-8 py-3 transition duration-300 ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
