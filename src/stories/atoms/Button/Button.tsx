import React, { PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonType = "primary" | "success" | "warning" | "danger" | "neutral";

interface ButtonProps {
  children: React.ReactNode
  type?: ButtonType;
  size?: "small" | "medium" | "large";
  isRadius?: boolean;
  isSolid?: boolean;
  isFull?: boolean;
  isDisabled?: boolean;
  handleClick?: () => void;
}

export const Button: React.FC<ButtonProps & PropsWithChildren> = ({
  type = "primary",
  size = "medium",
  isRadius = false,
  isSolid = false,
  isFull = false,
  isDisabled = false,
  handleClick,
  children,
}: ButtonProps) => {
  const mode = styles[`a_button__${type}`];
  const solid = isSolid && styles[`a_button__${type}_solid`];
  const radius = isRadius && styles.a_button__radius;
  const full = isFull && styles.a_button__full;

  return (
    <button
      type='button'
      disabled={isDisabled}
      className={[
        styles.a_button,
        styles[`a_button__${size}`],
        mode,
        solid,
        radius,
        full
      ].join(" ")}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
