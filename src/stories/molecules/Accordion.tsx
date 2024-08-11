import { PropsWithChildren, useEffect, useRef } from "react";
import "./accordion.css";
import {
  animTiming,
  closingAnimKeyframes,
  openingAnimKeyframes,
} from "../utlils/animations";

type AccordionProps = {
  primary?: boolean;
  label: string;
  duration?: number;
};

const IS_OPENED_CLASS = "m-accordion--opened";

const handleSummaryOnClick = (
  event: React.MouseEvent<HTMLInputElement>,
  details: HTMLDetailsElement,
  content: HTMLDivElement,
  duration: number
) => {
  event.preventDefault();
  if (details.dataset.animStatus === "running") {
    return;
  }

  details.dataset.animStatus = "running";
  details.classList.toggle(IS_OPENED_CLASS);

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

const Accordion: React.FC<AccordionProps & PropsWithChildren> = ({
  label,
  primary = true,
  duration = 300,
  children,
}) => {
  const mode = primary ? "m-accordion--primary" : "m-accordion--secondary";
  const contentRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      detailsRef.current = contentRef.current.parentNode as HTMLDetailsElement;
    }
  }, []);

  return (
    <details className={["m-accordion", mode].join(" ")}>
      <summary
        className="m-accordion__summary"
        onClick={(event: React.MouseEvent<HTMLInputElement>) =>
          handleSummaryOnClick(
            event,
            detailsRef.current!,
            contentRef.current!,
            duration
          )
        }
      >
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

export default Accordion;
