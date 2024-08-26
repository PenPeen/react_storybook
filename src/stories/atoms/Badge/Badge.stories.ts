import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "./Badge";
import parse from "html-react-parser";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { handleClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: parse(`
      1
    `),
  },
};

export const Info: Story = {
  args: {
    type: "info",
    children: parse(`
      1
    `),
  },
};

export const Success: Story = {
  args: {
    type: "success",
    children: parse(`
      1
    `),
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: parse(`
      1
    `),
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    children: parse(`
      1
    `),
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: parse(`
      1
    `),
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: parse(`
      1
    `),
  },
};

export const Link: Story = {
  args: {
    children: parse(`
      1
    `),
    link: "/",
  },
};
