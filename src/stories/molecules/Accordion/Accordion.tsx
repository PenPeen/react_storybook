import {
  animTiming,
  closingAnimKeyframes,
  openingAnimKeyframes,
} from "@/stories/utlils/animations";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import AccordionPresentational from "./AccordionPresentational";
import styles from "./accordion.module.css";

export interface AccordionContainerProps {
  isOpen?: boolean;
  primary?: boolean;
  label: string;
  duration?: number;
}

const IS_OPENED_CLASS = styles.m_accordion__opened;

const AccordionContainer: React.FC<
  AccordionContainerProps & PropsWithChildren
> = ({ isOpen = false, primary = true, label, duration = 300, children }) => {
  const mode = primary
    ? styles.m_accordion__primary
    : styles.m_accordion__secondary;
  const contentRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      detailsRef.current = contentRef.current.parentNode as HTMLDetailsElement;
      if(detailsRef.current && isOpen) {
        detailsRef.current.classList.add(IS_OPENED_CLASS);
      }
    }
  }, []);

  const handleSummaryOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (
      !detailsRef.current ||
      detailsRef.current.dataset.animStatus === "running"
    ) {
      return;
    }

    const details = detailsRef.current;
    details.dataset.animStatus = "running";
    details.classList.toggle(IS_OPENED_CLASS);

    const content = contentRef.current!;
    if (details.open) {
      const closingAnim = content.animate(
        closingAnimKeyframes(content),
        animTiming(duration)
      );
      closingAnim.onfinish = () => {
        details.removeAttribute("open");
        details.dataset.animStatus = "";
      };
    } else {
      details.setAttribute("open", "true");
      const openingAnim = content.animate(
        openingAnimKeyframes(content),
        animTiming(duration)
      );
      openingAnim.onfinish = () => {
        details.dataset.animStatus = "";
      };
    }
  };

  return (
    <AccordionPresentational
      isOpen = {isOpen}
      label={label}
      mode={mode}
      handleSummaryClick={handleSummaryOnClick}
      contentRef={contentRef}
      children={children}
    />
  );
};

export default AccordionContainer;
