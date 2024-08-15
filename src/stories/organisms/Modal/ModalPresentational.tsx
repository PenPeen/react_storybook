import React, { PropsWithChildren, useEffect, useState } from "react";
import ReactModal from "react-modal";
import closeLogo from "@/assets/close.svg";
import { Button } from "@/stories/atoms/Button/Button";
import { ModalProps } from "./ModalContainer";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";

const ModalPresentational: React.FC<ModalProps & PropsWithChildren> = ({
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
  handleOK = () => {},
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement>();

  useEffect(() => {
    let root = document.getElementById("portal-root");

    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "portal-root");
      document.body.appendChild(root);
    }
    setModalRoot(root);

    return () => {
      document.body.removeChild(root);
    };
  }, []);

  const modalContents = (
    <div className={styles.o_modal}>
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel='Modal'
        className={styles.o_modal__contents}
        overlayClassName={{
          base: styles.o_modal__overlay,
          afterOpen: styles.o_modal__overlay__open,
          beforeClose: styles.o_modal__overlay__before_open,
        }}
        ariaHideApp={false}
      >
        {isCloseButton && (
          <button
            type='button'
            className={styles.o_modal__close_button}
            onClick={handleCloseModal}
          >
            <img src={closeLogo} alt='close button' height={16} width={16} />
          </button>
        )}

        {children}

        {(isCancelButton || isOkButton) && (
          <div className={styles.o_modal__button_wrapper}>
            {isCancelButton && (
              <span className={styles.o_modal__cancel_button}>
                <Button handleClick={handleCloseModal} label={cancelLabel} />
              </span>
            )}
            {isOkButton && (
              <span className={styles.o_modal__ok_button}>
                <Button primary handleClick={handleOK} label={okLabel} />
              </span>
            )}
          </div>
        )}
      </ReactModal>
    </div>
  );

  return (
    <>
      {isOpenButton && (
        <span className={styles.o_modal__ok_button}>
          <Button primary handleClick={handleOpenModal} label={openLabel} />
        </span>
      )}
      {modalRoot && createPortal(modalContents, modalRoot)}
    </>
  );
};

export default ModalPresentational;
