import { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return <Component className={`container-site ${className}`}>{children}</Component>;
}
