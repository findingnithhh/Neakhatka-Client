import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./MyButton";
import { action } from "@storybook/addon-actions"; // Import the action function
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof MyButton> = {
  title: "Neakhatka/Atoms/MyButton",
  component: MyButton,
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
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    children: "Primary Button",
    variant: "solid",
    colorScheme: "primary",
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /primary button/i });

    // Simulate click and check if the button is still enabled
    await userEvent.click(button);
    await expect(button).toBeEnabled();
  },
};

export const DisableButton: Story = {
  args: {
    children: "Primary Button",
    variant: "solid",
    colorScheme: "primary",
    size: "md",
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /primary button/i });

    // Check if the button is disabled
    await expect(button).toBeDisabled();
  },
};

export const LeftIconButton: Story = {
  args: {
    children: "Left Icon Button",
    variant: "solid",
    colorScheme: "success",
    // leftIcon: <Icon icon="add" size={24} />,
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /left icon button/i });

    // Simulate a click and check if the button is still enabled
    await userEvent.click(button);
    await expect(button).toBeEnabled();
  },
};

export const RightIconButton: Story = {
  args: {
    children: "Right Icon Button",
    variant: "solid",
    colorScheme: "error",
    // rightIcon: <Icon icon="cancel" size={24} />,
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /right icon button/i });

    // Simulate a click and check if the button is still enabled
    await userEvent.click(button);
    await expect(button).toBeEnabled();
  },
};

export const TopIconButton: Story = {
  args: {
    children: "Upload",
    variant: "outline",
    colorScheme: "primary",
    size: "md",
    // topIcon: <Icon icon="add" size={24} />,
  },
};

export const BottomIconButton: Story = {
  args: {
    children: "Upload",
    variant: "outline",
    colorScheme: "primary",
    // bottomIcon: <Icon icon="add" size={24} />,
  },
};

export const ButtonUploadFile: Story = {
  args: {
    children: "Upload",
    variant: "outline",
    colorScheme: "primary",
    isFileButton: true,
    // topIcon: <Icon icon="add" size={24} />,
    onFileSelect: (file) => {
      console.log("Selected file:", file.name);
    },
  },
};

export const ClickAction: Story = {
  args: {
    ...Default.args,
    children: "Click Button",
    variant: "outline",
    onClick: action("Clicked!"),
  },
  play: async ({ canvasElement }) => {
    // Access the canvas where your component renders
    const canvas = within(canvasElement);

    // Simulate a user click on the button
    await userEvent.click(
      canvas.getByRole("button", { name: /click button/i })
    );

    // Check if the action was called after the click
    await expect(
      canvas.getByRole("button", { name: /click button/i })
    ).toBeEnabled();
  },
};
