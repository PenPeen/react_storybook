import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagContainer from "./TagContainer";

const meta = {
  title: "Atoms/Tag",
  component: TagContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Tag",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Tag",
  },
};

export const Oval: Story = {
  args: {
    label: "Tag",
    oval: true,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Tag",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Tag",
  },
};

export const bgRed: Story = {
  args: {
    label: "Tag",
    backgroundColor: "red",
  },
};
