import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./IconItem";

const meta: Meta<typeof Icon> = {
  title: "Matching-Internship/Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    size: "sm",
  },
};
