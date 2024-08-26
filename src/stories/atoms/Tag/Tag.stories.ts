import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagContainer from "./TagContainer";
import parse from "html-react-parser";

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
    children: parse('Tag'),
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    children: parse('Tag'),
  },
};

export const Oval: Story = {
  args: {
    children: parse('Tag'),
    oval: true,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: parse('Tag'),
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: parse('Tag'),
  },
};

export const bgRed: Story = {
  args: {
    children: parse('Tag'),
    backgroundColor: "red",
  },
};
