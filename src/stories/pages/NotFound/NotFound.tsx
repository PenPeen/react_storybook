import React from "react";

import styles from "./not_found.module.css";

type NotFoundProps = {
  title?: string;
  message?: string;
  link?: string;
  linkText?: string;
};

const NotFound: React.FC<NotFoundProps> = ({
  title = "404 Not Found",
  message = "The page you are looking for does not exist.",
  link = "/",
  linkText = "Site Top",
}) => {
  return (
    <div className={styles.p_not_found}>
      <h1>{title}</h1>
      <p>{message}</p>
      {link && (
        <a href={link} className={styles.p_not_found__top_link}>
          {linkText}
        </a>
      )}
    </div>
  );
};

export default NotFound;
