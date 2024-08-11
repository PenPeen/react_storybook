import { ChangeEventHandler, useRef } from "react";
import "./file-input.css";

type FileInputProps = {
  heading?: string;
  label?: string;
  message?: string;
  handleFileSelect?: ChangeEventHandler<HTMLInputElement>;
};

const FileInput: React.FC<FileInputProps> = ({
  heading,
  label = "ファイルをアップロード",
  message,
  handleFileSelect,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    if (inputRef.current === null) return;
    inputRef.current.click();
  };

  return (
    <>
      <div className="m-file-input">
        {heading && (
          <div className="m-file-input__heading">
            <label htmlFor="m-file-input__button">{heading}</label>
          </div>
        )}
        <div className="m-file-input__content">
          <input
            type="file"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleFileSelect}
          />
          <button
            className="m-file-input__button"
            id="m-file-input__button"
            onClick={handleButtonClick}
          >
            <img src="/file.svg" className="logo" alt="file logo" />
            <span>{label}</span>
          </button>
        </div>
        {message && (
          <div className="m-file-input__message">
            <span>{message}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default FileInput;
