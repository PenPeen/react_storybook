import "./tag.css";
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
  const mode = primary ? "a-tag--primary" : "a-tag--secondary";
  const ovaled = oval ? "a-tag--oval" : undefined;

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
