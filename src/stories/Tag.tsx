import "./tag.css";

type TagProps = {
  primary?: boolean;
  oval?: boolean;
  backgroundColor?: string;
  label: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const Tag: React.FC<TagProps> = ({
  primary = true,
  oval = false,
  size = "medium",
  backgroundColor,
  label,
}) => {
  const mode = primary ? "a-tag--primary" : "a-tag--secondary";
  const ovaled = oval && "a-tag--oval";

  return (
    <button
      type="button"
      className={["a-tag", `a-tag--${size}`, mode, ovaled].join(" ")}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};

export default Tag;
