import type { Meta, StoryObj } from "@storybook/react";
import { OurButton } from "./OurButton";

const meta: Meta<typeof OurButton> = {
  title: "Neakhatka/Atoms/OurButton",
  component: OurButton,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/1ck3QkLujqYR52ayf0evpX/Sabaicode-Admin-App?page-id=0%3A1&node-id=2516-52918&viewport=427%2C388%2C0.14&t=Lsg8HBbq14rfUDQy-1&scaling=min-zoom",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Primary Button",
    colorScheme: "primary",
  },
};
