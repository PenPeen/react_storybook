import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "./FileInput";
import { fn } from "@storybook/test";

const meta = {
  title: "Molecules/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  args: {
    handleFileSelect: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "FIle",
    message: "画像サイズは250MBまで",
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
