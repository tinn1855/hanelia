import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "scroll-m-20 tracking-tight text-foreground font-bold",
  {
    variants: {
      variant: {
        display: "text-5xl font-bold lg:text-6xl",
        h1: "text-4xl font-extrabold",
        h2: "text-3xl",
        h3: "text-2xl font-semibold",
        h4: "text-lg font-semibold",
        h5: "text-base font-semibold",
        h6: "text-sm font-semibold",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  }
);

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const variantToElement: Record<
  NonNullable<VariantProps<typeof headingVariants>["variant"]>,
  HeadingElement
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

function Heading({
  className,
  variant = "h1",
  asChild = false,
  as,
  ...props
}: React.ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean;
    as?: HeadingElement;
  }) {
  const Comp = asChild ? Slot : as ?? variantToElement[variant ?? "h1"];

  return (
    <Comp
      data-slot="heading"
      data-variant={variant}
      className={cn(headingVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Heading, headingVariants };
