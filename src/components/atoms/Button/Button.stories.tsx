import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
    textColor: "white",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", { name: /click Button/i });

    // Simulate click and check if the button is still enabled
    await userEvent.click(button);
    await expect(button).toBeEnabled();
  },
};

export const ClickAction: Story = {
  args: {
    ...Default.args,
    onClick: action("Clicked!"),
  },
};
