import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Component/Text",
  component: Text,
  args: {
    children: "Hello World",
    size: "md",
  },
  argTypes: {
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomTextTag: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (<p>Custom Text Tag</p>)
    },
    argTypes: { 
        children: { table: { disable: true } },
        asChild: { table: { disable: true } }
    },
};

