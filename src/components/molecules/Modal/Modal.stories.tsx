import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Neakhatka/Molecules/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?page-id=1227%3A60&node-id=1230-182&viewport=551%2C-204%2C0.78&t=JJBrD8h8pvlcuWSm-1&scaling=min-zoom",
    },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    corner: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
      },
    },
    children: { control: "none" },
  },
} as Meta;

const Template: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
        {/* Content inside the modal goes here */}
        <div className="bg-white p-8">
          <h1 className="flex justify-center flex-col items-center">
            {/* Example content */}
            <h2>Modal Content</h2>
          </h1>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
