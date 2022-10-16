import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import { TextInput, TextInputWrapperProps } from ".";

export default {
  title: "Component/InputText",
  component: TextInput.Wrapper,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Please type your email address" />,
    ],
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<TextInputWrapperProps>;

export const Default: StoryObj<TextInputWrapperProps> = {};

export const WithoutIcon: StoryObj<TextInputWrapperProps> = {
  args: {
    children: <TextInput.Input placeholder="Please type your email address" />,
  },
};
