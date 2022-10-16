import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ children, asChild }: ButtonProps) {
  const CustomButtonTagComponent = asChild ? Slot : "button";
  return (
    <CustomButtonTagComponent
      className={clsx("py-4 px-3 bg-cyan-500 rounded font-medium text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white")} 
    >
      {children}
    </CustomButtonTagComponent>
  );
}
