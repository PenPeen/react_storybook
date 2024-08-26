import { PropsWithChildren } from "react";
import styles from "./tag.module.css";

type TagPresentationalProps = {
  backgroundColor?: string;
  size: "small" | "medium" | "large";
  mode: string;
  ovaled?: string;
  handleOnClick?: () => void;
  children: React.ReactNode
};

const TagPresentational: React.FC<TagPresentationalProps & PropsWithChildren> = ({
  backgroundColor,
  size,
  mode,
  ovaled,
  handleOnClick,
  children
}) => {
  return (
    <button
      type='button'
      className={[styles.a_tag, styles[`a_tag__${size}`], mode, ovaled].join(
        " "
      )}
      style={{ backgroundColor }}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default TagPresentational;
