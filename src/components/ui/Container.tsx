import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return <Component className={`container-site ${className}`}>{children}</Component>;
}
