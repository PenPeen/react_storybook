import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import parse from "html-react-parser";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { handleClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: parse(`
      Button
    `),
  },
};

export const Success: Story = {
  args: {
    type: "success",
    children: parse(`
      Button
    `),
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: parse(`
      Button
    `),
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    children: parse(`
      Button
    `),
  },
};

export const Neutral: Story = {
  args: {
    type: "neutral",
    children: parse(`
      Button
    `),
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: parse(`
      Button
    `),
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: parse(`
      Button
    `),
  },
};

export const Radius: Story = {
  args: {
    children: parse(`
      Button
    `),
    isRadius: true,
  },
};

export const Full: Story = {
  args: {
    children: parse(`
      Button
    `),
    isFull: true,
  }
}
