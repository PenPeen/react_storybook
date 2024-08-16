import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
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
    label: "Button",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    label: "Button",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    label: "Button",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    label: "Button",
  },
};

export const Neutral: Story = {
  args: {
    type: "neutral",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Radius: Story = {
  args: {
    label: "Button",
    isRadius: true,
  },
};
