import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import FileInputContainer from "./FileInputContainer";

const meta = {
  title: "Molecules/FileInput",
  component: FileInputContainer,
  parameters: {
    layout: "centered",
  },
  args: {
    handleFileSelect: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileInputContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "FIle",
    message: "※画像サイズは2.4MBまで",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "CustomLabel",
  },
};

export const WithMessage: Story = {
  args: {
    message: "WithMessage",
  },
};

export const WithHeading: Story = {
  args: {
    heading: "WithHeading",
  },
};
