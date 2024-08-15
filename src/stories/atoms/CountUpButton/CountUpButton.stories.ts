import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CountUpButton } from "./CountUpButton";

const meta = {
  title: "Atoms/CountUpButton",
  component: CountUpButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { handleClick: fn() },
} satisfies Meta<typeof CountUpButton>;

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
