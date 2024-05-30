import React from "react";
import { Meta, Story } from "@storybook/react";
import CardTip from "./CardTip";

export default {
  title: "Neakhatka/Molecules/CardTip",
  component: CardTip,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?page-id=1240%3A2592&node-id=2770-3536&viewport=587%2C541%2C0.29&t=AALjhwO35cW72Jwm-1&scaling=min-zoom",
    },
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story = (args) => <CardTip {...args} />;

export const Default = Template.bind({});
Default.args = {};
