import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Matching-Internship/Atoms/Typography",
  component: Typography,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
    align: "center",
    fontSize: "base",
    variant: "medium",
  },
};
