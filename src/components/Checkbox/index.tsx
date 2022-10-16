import * as CheckboxPrimive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimive.CheckboxProps {};
export function Checkbox(props : CheckboxProps) {
  return (
    <CheckboxPrimive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded flex items-center justify-center"
      {...props}
    >
      <CheckboxPrimive.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimive.Indicator>
    </CheckboxPrimive.Root>
  );
}
