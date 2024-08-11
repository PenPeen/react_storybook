import React, { PropsWithChildren } from "react";
import "./accordion.css";

type AccordionPresentationalProps = {
  label: string;
  mode: string;
  handleSummaryClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  contentRef: React.RefObject<HTMLDivElement>;
};

const AccordionPresentational: React.FC<
  PropsWithChildren<AccordionPresentationalProps>
> = ({ label, mode, handleSummaryClick, contentRef, children }) => {
  return (
    <details className={["m-accordion", mode].join(" ")}>
      <summary className="m-accordion__summary" onClick={handleSummaryClick}>
        <span className="m-accordion__summary-inner">
          {label}
          <span className="m-accordion__icon"></span>
        </span>
      </summary>
      <div className="m-accordion__content" ref={contentRef}>
        <div className="m-accordion__content-inner">{children}</div>
      </div>
    </details>
  );
};

export default AccordionPresentational;
