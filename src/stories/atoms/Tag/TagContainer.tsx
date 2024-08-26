import { PropsWithChildren } from "react";
import styles from "./tag.module.css";
import TagPresentational from "./TagPresentational";

type TagContainerProps = {
  primary?: boolean;
  oval?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode,
};

const TagContainer: React.FC<TagContainerProps & PropsWithChildren> = ({
  primary = true,
  oval = false,
  size = "medium",
  backgroundColor,
  onClick,
  children,
}) => {
  const mode = primary ? styles.a_tag__primary : styles.a_tag__secondary;
  const ovaled = oval ? styles.a_tag__oval : undefined;

  return (
    <TagPresentational
      mode={mode}
      ovaled={ovaled}
      backgroundColor={backgroundColor}
      size={size}
      handleOnClick={onClick}
    >
      {children}
    </TagPresentational>
  );
};

export default TagContainer;
