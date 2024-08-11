import "./tag.css";

type TagPresentationalProps = {
  backgroundColor?: string;
  label: string;
  size: "small" | "medium" | "large";
  mode: string;
  ovaled?: string;
  handleOnClick?: () => void;
};

const TagPresentational: React.FC<TagPresentationalProps> = ({
  backgroundColor,
  label,
  size,
  mode,
  ovaled,
  handleOnClick,
}) => {
  return (
    <button
      type="button"
      className={["a-tag", `a-tag--${size}`, mode, ovaled].join(" ")}
      style={{ backgroundColor }}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

export default TagPresentational;
