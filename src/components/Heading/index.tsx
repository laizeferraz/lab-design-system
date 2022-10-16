import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}
export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const CustomHeadingTagComponent = asChild ? Slot : "h2";
  return (
    <CustomHeadingTagComponent
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-xxl": size === "lg",
      })}
    >
      {children}
    </CustomHeadingTagComponent>
  );
}
