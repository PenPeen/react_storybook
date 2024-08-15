import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CountDownButton } from "./CountDownButton";

const meta = {
  title: "Atoms/CountDownButton",
  component: CountDownButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { handleClick: fn() },
} satisfies Meta<typeof CountDownButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const NotRadius: Story = {
  args: {
    isRadius: false,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
