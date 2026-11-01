"use client";

import type { MouseEvent, ReactNode } from "react";

/** Card with a soft light that tracks the pointer. */
export function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
