import React, { PropsWithChildren } from "react";
import "./accordion.css";
import { AccordionContainerProps } from "./Accordion";

interface AccordionPresentationalProps extends AccordionContainerProps {
  mode: string;
  handleSummaryClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  contentRef: React.RefObject<HTMLDivElement>;
}

const AccordionPresentational: React.FC<
  PropsWithChildren<AccordionPresentationalProps>
> = ({
  label = "ファイルをアップロード",
  mode,
  handleSummaryClick,
  contentRef,
  children,
}) => {
  return (
    <details className={["m-accordion", mode].join(" ")}>
      <summary className='m-accordion__summary' onClick={handleSummaryClick}>
        <span className='m-accordion__summary-inner'>
          {label}
          <span className='m-accordion__icon'></span>
        </span>
      </summary>
      <div className='m-accordion__content' ref={contentRef}>
        <div className='m-accordion__content-inner'>{children}</div>
      </div>
    </details>
  );
};

export default AccordionPresentational;
