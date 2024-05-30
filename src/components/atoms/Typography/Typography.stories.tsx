import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Typography> = {
  title: "Neakhatka/Atoms/Typography",
  component: Typography,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?page-id=1225%3A2&node-id=1225-3&viewport=718%2C473%2C0.73&t=Vrh8phOE97DXQWbt-1&scaling=min-zoom",
    },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const typography = await canvas.getByText("Typography");

    // Verify typography properties
    expect(typography).toHaveStyle(`
      text-align: center;
      font-size: 1rem; /* base font size */
      font-weight: 500; /* medium variant */
    `);
  },
};
