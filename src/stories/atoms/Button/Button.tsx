import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "a-button--primary" : "a-button--secondary";

  return (
    <button
      type="button"
      className={["a-button", `a-button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
