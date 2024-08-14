import type { Meta, StoryObj } from "@storybook/react";
import parse from "html-react-parser";

import Modal from "./ModalContainer";
import { fn } from "@storybook/test";

const meta = {
  title: "Organisms/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    handleOK: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: parse(`
      <h3>Modal</h3>
      <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
    `),
  },
};

export const isOK: Story = {
  args: {
    children: parse(`
      <h3>Modal</h3>
      <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
    `),
    isCancelButton: false,
  },
};

export const onlyContents: Story = {
  args: {
    children: parse(`
      <h3>Modal</h3>
      <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
    `),
    isCancelButton: false,
    isCloseButton: false,
    isOkButton: false,
  },
};
