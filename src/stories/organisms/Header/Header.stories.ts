import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Header } from "./Header";

const meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};

export const WithNavlink: Story = {
  args: {
    navigations: [
      {
        text: "nav1",
        url: "/nav1",
      },
      {
        text: "nav2",
        url: "/nav2",
      },
      {
        text: "nav3",
        url: "/nav3",
      },
    ],
  },
};

export const Dark: Story = {
  args: {
    isDark: true,
    navigations: [
      {
        text: "nav1",
        url: "/nav1",
      },
      {
        text: "nav2",
        url: "/nav2",
      },
      {
        text: "nav3",
        url: "/nav3",
      },
    ],
  },
};
