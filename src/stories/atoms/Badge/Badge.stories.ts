import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "./Badge";

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
    label: "1",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    label: "1",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    label: "1",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    label: "1",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    label: "1",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "1",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "1",
  },
};

export const Link: Story = {
  args: {
    label: "1",
    link: "/",
  },
};
