import React, { PropsWithChildren } from "react";
import ReactModal from "react-modal";
import closeLogo from "@/assets/close.svg";
import { Button } from "@/stories/atoms/Button/Button";
import { ModalProps } from "./ModalContainer";

interface ModalPresentationalProps extends ModalProps {
  showModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const ModalPresentational: React.FC<
  ModalPresentationalProps & PropsWithChildren
> = ({
  openLabel = "Open Modal",
  cancelLabel = "CANCEL",
  okLabel = "OK",
  children,
  isOpenButton = true,
  isCloseButton = true,
  isCancelButton = true,
  isOkButton = true,
  handleOK = () => {},
  showModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  return (
    <div className='o-modal'>
      {isOpenButton && (
        <span className='o-modal__ok_button'>
          <Button primary handleClick={handleOpenModal} label={openLabel} />
        </span>
      )}
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel='Modal'
        className='o-modal__contents'
        overlayClassName='o-modal__overlay'
        ariaHideApp={false}
      >
        {isCloseButton && (
          <button
            type='button'
            className='o-modal__close_button'
            onClick={handleCloseModal}
          >
            <img src={closeLogo} alt='close button' height={16} width={16} />
          </button>
        )}

        {children}

        {(isCancelButton || isOkButton) && (
          <div className='o-modal__button_wrapper'>
            {isCancelButton && (
              <span className='o-modal__cancel_button'>
                <Button handleClick={handleCloseModal} label={cancelLabel} />
              </span>
            )}
            {isOkButton && (
              <span className='o-modal__ok_button'>
                <Button primary handleClick={handleOK} label={okLabel} />
              </span>
            )}
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default ModalPresentational;
