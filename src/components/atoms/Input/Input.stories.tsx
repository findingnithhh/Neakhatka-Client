import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Input> = {
  title: "Neakhatka/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?page-id=1225%3A152&node-id=1225-153&viewport=522%2C444%2C0.5&t=1aoVjP62NaMA9BgZ-1&scaling=min-zoom",
    },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText(
      /Please type something.../i
    );

    // Simulate typing into the input field
    await userEvent.type(input, "Write to testing input");

    // Check if the input value has changed
    expect(input).toHaveValue("Write to testing input");
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "Please type something...",
  },
};
