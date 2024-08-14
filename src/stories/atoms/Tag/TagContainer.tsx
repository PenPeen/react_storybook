import styles from "./tag.module.css";
import TagPresentational from "./TagPresentational";

type TagContainerProps = {
  primary?: boolean;
  oval?: boolean;
  backgroundColor?: string;
  label: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const TagContainer: React.FC<TagContainerProps> = ({
  primary = true,
  oval = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const mode = primary ? styles.a_tag__primary : styles.a_tag__secondary;
  const ovaled = oval ? styles.a_tag__oval : undefined;

  return (
    <TagPresentational
      mode={mode}
      ovaled={ovaled}
      backgroundColor={backgroundColor}
      label={label}
      size={size}
      handleOnClick={onClick}
    />
  );
};

export default TagContainer;
