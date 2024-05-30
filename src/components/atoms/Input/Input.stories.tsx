import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Input> = {
  title: "Neakhatka/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Please type something...",
    onChange: action("changed"),
    onClick: action("clicked"),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Input is disabled",
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "Please type something...",
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: "Input with error",
  },
};
