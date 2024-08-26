import React, { PropsWithChildren } from "react";
import styles from "./badge.module.css";

type BadgeType = "primary" | "info" | "success" | "warning" | "danger";

interface BadgeProps {
  type?: BadgeType;
  size?: "small" | "medium" | "large";
  link?: string;
  handleClick?: () => void;
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps & PropsWithChildren> = ({
  type = "primary",
  size = "medium",
  link,
  handleClick,
  children
}: BadgeProps) => {
  const mode = styles[`a_badge__${type}`];

  return (
    <span
      className={[styles.a_badge, styles[`a_badge__${size}`], mode].join(" ")}
      onClick={handleClick}
    >
      {link ? <a href={link}>{children}</a> : children}
    </span>
  );
};
