import React from "react";

import "./not_found.css";

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
    <div className='p-not-found'>
      <h1>{title}</h1>
      <p>{message}</p>
      {link && (
        <a href={link} className='p-not-found__top-link'>
          {linkText}
        </a>
      )}
    </div>
  );
};

export default NotFound;
