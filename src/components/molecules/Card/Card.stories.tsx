// Import necessary dependencies
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "./Card"; // Adjust the path accordingly

// Define meta information for Storybook
export default {
  title: "Neakhatka/Molecules/Card",
  component: Card,
  parameters: {
    // layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?page-id=1240%3A2592&node-id=1240-2593&viewport=587%2C541%2C0.29&t=AALjhwO35cW72Jwm-1&scaling=min-zoom",
    },
  },
  tags: ["autodocs"],
} as Meta;

// Define a default template for your Card component
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Define different stories with different props
export const Default = Template.bind({});
Default.args = {
  data: {
    id: "1",
    companyLogo: "/company.svg",
    companyName: "Example Company",
    peopleAmount: "100+ employees",
    jobTitle: "Software Engineer",
    salary: "$80,000 - $100,000",
    Emploment: "Full-time",
    location: "New York, NY",
    DeadLine: "June 30, 2024",
  },
};

export const Favorited = Template.bind({});
Favorited.args = {
  ...Default.args,
  iconType: "StarFill", // Updated iconType to "StarFill"
};

export const WithCloseIcon = Template.bind({});
WithCloseIcon.args = {
  ...Default.args,
  iconType: "close",
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  ...Default.args,
  className: "custom-card",
};

export const CustomOnClick = Template.bind({});
CustomOnClick.args = {
  ...Default.args,
  onClick: () => alert("Card clicked!"),
};
