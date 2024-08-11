import { ChangeEventHandler, useRef } from "react";
import "./file-input.css";
import FileInputPresentational from "./FileInputPresentational";

type FileInputContainerProps = {
  heading?: string;
  label?: string;
  message?: string;
  handleFileSelect?: ChangeEventHandler<HTMLInputElement>;
};

const FileInputContainer: React.FC<FileInputContainerProps> = ({
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
    <FileInputPresentational
      heading={heading}
      label={label}
      message={message}
      handleFileSelect={handleFileSelect}
      handleButtonClick={handleButtonClick}
      inputRef={inputRef}
    />
  );
};

export default FileInputContainer;
