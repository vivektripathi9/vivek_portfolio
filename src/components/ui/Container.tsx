import { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  wide?: boolean;
};

export function Container({
  children,
  className = "",
  as: Component = "div",
  wide = false,
}: ContainerProps) {
  return (
    <Component
      className={`container-site ${wide ? "container-site-wide" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
