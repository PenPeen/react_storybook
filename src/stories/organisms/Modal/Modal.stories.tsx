import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./ModalContainer";
import { fn } from "@storybook/test";
import { useModal } from "./useModal";
import { PropsWithChildren } from "react";

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
// type Story = StoryObj<typeof meta>;
type StoryWithHooks = StoryObj<typeof ModalWithHooks>;

export interface ModalAnyProps {
  openLabel?: string;
  cancelLabel?: string;
  okLabel?: string;
  isOpenButton?: boolean;
  isCloseButton?: boolean;
  isCancelButton?: boolean;
  isScrollable?: boolean;
  isOkButton?: boolean;
  handleOK?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalWithHooks: React.FC<ModalAnyProps & PropsWithChildren> = (args) => {
  const [showModal, handleOpenModal, handleCloseModal] = useModal();

  return (
    <>
      <Modal
        {...args}
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export const Default: StoryWithHooks = {
  render: () => {
    return (
      <ModalWithHooks>
        <h3>Modal</h3>
        <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
      </ModalWithHooks>
    );
  },
};

export const isOK: StoryWithHooks = {
  render: () => {
    return (
      <ModalWithHooks isCancelButton={false}>
        <h3>Modal</h3>
        <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
      </ModalWithHooks>
    );
  },
};

export const onlyContents: StoryWithHooks = {
  render: () => {
    return (
      <ModalWithHooks
        isCancelButton={false}
        isCloseButton={false}
        isOkButton={false}
      >
        <h3>Modal</h3>
        <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
      </ModalWithHooks>
    );
  },
};

export const CanScrollable: StoryWithHooks = {
  render: () => {
    return (
      <ModalWithHooks
        isCancelButton={false}
        isCloseButton={false}
        isOkButton={false}
        isScrollable
      >
        <h3>Modal</h3>
        <div>開閉状態の管理は"useModal.ts"カスタムフックを利用して行う</div>
      </ModalWithHooks>
    );
  },
};
