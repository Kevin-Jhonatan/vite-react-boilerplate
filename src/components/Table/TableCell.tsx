import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

interface TableCellProps {
  value: unknown;
  children: ReactNode;
}

export const TableCell = ({ value, children }: TableCellProps) => {
  const contentRef = useRef<HTMLSpanElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    if (typeof value !== "string" || !contentRef.current) {
      return;
    }

    const updateTruncation = () => {
      const element = contentRef.current;

      if (element) {
        setIsTruncated(element.scrollWidth > element.clientWidth);
      }
    };

    updateTruncation();
    window.addEventListener("resize", updateTruncation);

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateTruncation) : null;
    resizeObserver?.observe(contentRef.current);

    return () => {
      window.removeEventListener("resize", updateTruncation);
      resizeObserver?.disconnect();
    };
  }, [value]);

  if (typeof value !== "string") {
    return children;
  }

  return (
    <Tooltip content={value} disabled={!isTruncated} multiline placement="top">
      <span
        ref={contentRef}
        className={`block max-w-40 truncate sm:max-w-56 ${
          isTruncated ? "cursor-pointer" : ""
        }`}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default TableCell;
