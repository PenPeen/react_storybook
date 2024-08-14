import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  isRadius?: boolean;
  handleClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  isRadius,
  handleClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? "a-button--primary" : "a-button--secondary";
  const radius = isRadius && "a-button--radius";

  return (
    <button
      type='button'
      className={["a-button", `a-button--${size}`, mode, radius].join(" ")}
      style={{ backgroundColor }}
      {...props}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
