import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";


export interface TextInputWrapperProps {
  children: ReactNode;
}

function TextInputWrapper({ children }: TextInputWrapperProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

TextInputWrapper.displayName = "TextInput.Wrapper";

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
}
TextInputIcon.displayName = "TextInput.Icon";
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputText(props: InputTextProps) {
  return (
    <input
      className={"bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"} 
      {...props}
    />
  );
}

InputText.displayName = "TextInput.Input";

export const TextInput = {
  Wrapper: TextInputWrapper,
  Input: InputText,
  Icon: TextInputIcon,
};
