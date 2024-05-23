import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Neakhatka/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?page-id=1227%3A60&node-id=1230-182&viewport=551%2C-204%2C0.78&t=JJBrD8h8pvlcuWSm-1&scaling=min-zoom",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Button",
    colorScheme: "primary",
    size: "md",
    colorOutline: "none",
    rounded: "none",
  },
};

export const ClickAction: Story = {
  args: {
    ...Default.args,
    children: "Click Button",
    onClick: action("Clicked!"),
  },
};