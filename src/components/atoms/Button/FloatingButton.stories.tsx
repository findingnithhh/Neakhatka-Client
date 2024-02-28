import type { Meta, StoryObj } from "@storybook/react";
import { FloatingButton } from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "Matching-Internship/Atoms/FloatingButton",
  component: FloatingButton,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  args: {
    children: "+",
    colorScheme: "primary",
    className:
      "fixed rounded-full w-[60px] h-[60px] flex justify-center items-center",
    position: "top-left",
  },
};
