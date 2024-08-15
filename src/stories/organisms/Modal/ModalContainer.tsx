import React, { PropsWithChildren, useEffect, useState } from "react";
import ModalPresentational from "./ModalPresentational";
import styles from "./modal.module.css";

export interface ModalProps {
  showModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  openLabel?: string;
  cancelLabel?: string;
  okLabel?: string;
  isOpenButton?: boolean;
  isCloseButton?: boolean;
  isCancelButton?: boolean;
  isOkButton?: boolean;
  isScrollable?: boolean;
  handleOK?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  modalRoot: HTMLDivElement;
}

const body = document.querySelector("body");

const Modal: React.FC<ModalProps & PropsWithChildren> = ({
  showModal,
  handleOpenModal,
  handleCloseModal,
  openLabel = "Open Modal",
  cancelLabel = "CANCEL",
  okLabel = "OK",
  children,
  isOpenButton = true,
  isCloseButton = true,
  isCancelButton = true,
  isOkButton = true,
  isScrollable = false,
  handleOK = () => {},
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLDivElement>();

  useEffect(() => {
    let root = document.getElementById("modal-portal") as HTMLDivElement;

    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "modal-portal");
      document.body.appendChild(root);
    }
    setModalRoot(root);

    return () => {
      document.body.removeChild(root);
    };
  }, []);

  useEffect(() => {
    if (body == undefined || isScrollable) return;

    if (showModal) {
      body.className = styles.o_modal__body_lock;
    } else {
      body.className = "";
    }
  }, [isScrollable, showModal]);

  return (
    <>
      <ModalPresentational
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openLabel={openLabel}
        cancelLabel={cancelLabel}
        okLabel={okLabel}
        children={children}
        isOpenButton={isOpenButton}
        isCloseButton={isCloseButton}
        isCancelButton={isCancelButton}
        isOkButton={isOkButton}
        isScrollable={isScrollable}
        handleOK={handleOK}
        modalRoot={modalRoot!}
      />
    </>
  );
};

export default Modal;
