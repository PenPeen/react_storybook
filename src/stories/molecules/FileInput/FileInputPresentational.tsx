import { ChangeEventHandler } from "react";
import styles from "./file-input.module.css";
import { FileInputContainerProps } from "./FileInputContainer";

interface FileInputPresentationalProps extends FileInputContainerProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleButtonClick: () => void;
  handleFileSelect?: ChangeEventHandler<HTMLInputElement>;
}

const FileInputPresentational: React.FC<FileInputPresentationalProps> = ({
  heading,
  label,
  message,
  handleButtonClick,
  handleFileSelect,
  inputRef,
}) => {
  return (
    <>
      <div className={styles.m_file_input}>
        {heading && (
          <div className={styles.m_file_input__heading}>
            <label htmlFor={styles.m_file_input__button}>{heading}</label>
          </div>
        )}
        <div className={styles.m_file_input__content}>
          <input
            type='file'
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleFileSelect}
          />
          <button
            className={styles.m_file_input__button}
            id={styles.m_file_input__button}
            onClick={handleButtonClick}
          >
            <img src='/file.svg' className='logo' alt='file logo' />
            <span>{label}</span>
          </button>
        </div>
        {message && (
          <div className={styles.m_file_input__message}>
            <span>{message}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default FileInputPresentational;
