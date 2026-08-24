import { ElementType, ReactNode } from "react";

const typographyVariants = {
  "display-xl": "type-display-xl",
  "display-lg": "type-display-lg",
  "display-md": "type-display-md",
  "display-sm": "type-display-sm",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  h5: "type-h5",
  h6: "type-h6",
  "body-lg": "type-body-lg",
  "body-md": "type-body-md",
  "body-sm": "type-body-sm",
  eyebrow: "type-eyebrow",
  caption: "type-caption",
  small: "type-small",
  nav: "type-nav",
  button: "type-button",
} as const;

export type TypographyVariant = keyof typeof typographyVariants;

type TypographyProps = {
  as?: ElementType;
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
};

export function Typography({
  as: Component = "p",
  variant,
  children,
  className = "",
}: TypographyProps) {
  return (
    <Component className={`${typographyVariants[variant]} ${className}`.trim()}>
      {children}
    </Component>
  );
}
