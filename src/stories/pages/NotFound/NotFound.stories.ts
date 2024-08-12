import type { Meta, StoryObj } from "@storybook/react";

import NotFound from "./NotFound";

const meta = {
  title: "Page/NotFound",
  component: NotFound,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    title: "Oh no!",
    message: "Sorry... It appears that an error of unknown cause has occurred.",
    link: "",
  },
};
