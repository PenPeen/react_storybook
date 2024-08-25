import type { Meta, StoryObj } from "@storybook/react";
import parse from "html-react-parser";
import AccordionContainer from "./Accordion";

const meta = {
  title: "Molecules/Accordion",
  component: AccordionContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionContainer>;

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

export const isOpend: Story = {
  args: {
    isOpen: true,
    label: "Q. アコーディオンの作成は簡単ですか？",
    children: parse(`
      <strong>Answer</strong>
      <div>少し大変でした。</div>
    `),
  },
};
