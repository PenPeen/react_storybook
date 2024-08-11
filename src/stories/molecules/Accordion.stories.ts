import type { Meta, StoryObj } from "@storybook/react";
import parse from "html-react-parser";
import Accordion from "./Accordion";

const meta = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Q. アコーディオンの作成は簡単ですか？",
    children: parse(`
      <strong>Answer</strong>
      <div>少し大変でした。</div>
    `),
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Q. アコーディオンの作成は簡単ですか？",
    children: parse(`
      <strong>Answer</strong>
      <div>少し大変でした。</div>
    `),
  },
};
