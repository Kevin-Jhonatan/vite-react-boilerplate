import {
  cloneElement,
  useId,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { createPortal } from "react-dom";

interface TooltipChildProps {
  "aria-describedby"?: string;
}

interface TooltipProps {
  content: string;
  children: ReactElement<TooltipChildProps>;
  disabled?: boolean;
  className?: string;
  desktopOnly?: boolean;
  multiline?: boolean;
  placement?: "right" | "top";
}

export const Tooltip = ({
  content,
  children,
  disabled = false,
  className,
  desktopOnly = false,
  multiline = false,
  placement = "right",
}: TooltipProps) => {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches,
  );
  const isEnabled = !disabled && (!desktopOnly || isDesktop);

  useEffect(() => {
    if (!desktopOnly) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      setIsVisible(false);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [desktopOnly]);

  useLayoutEffect(() => {
    if (!isEnabled || !isVisible || !triggerRef.current) {
      return;
    }

    const updatePosition = () => {
      const bounds = triggerRef.current?.getBoundingClientRect();

      if (!bounds) {
        return;
      }

      if (placement === "top") {
        const tooltipWidth =
          window.innerWidth < 640 ? window.innerWidth - 24 : 256;
        const centeredLeft = bounds.left + bounds.width / 2;

        setPosition({
          top: Math.max(bounds.top - 8, 8),
          left: Math.max(
            tooltipWidth / 2 + 12,
            Math.min(centeredLeft, window.innerWidth - tooltipWidth / 2 - 12),
          ),
        });
        return;
      }

      setPosition({
        top: bounds.top + bounds.height / 2,
        left: bounds.right + 12,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isEnabled, isVisible, multiline, placement]);

  if (!isEnabled) {
    return children;
  }

  const describedBy = children.props["aria-describedby"];
  const nextDescribedBy = describedBy ? `${describedBy} ${tooltipId}` : tooltipId;

  return (
    <span
      ref={triggerRef}
      className={`inline-flex ${className ?? ""}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible((visible) => !visible)}
      onFocusCapture={() => setIsVisible(true)}
      onBlurCapture={() => setIsVisible(false)}
    >
      {cloneElement(children, { "aria-describedby": nextDescribedBy })}
      {isVisible &&
        createPortal(
          <span
            id={tooltipId}
            role="tooltip"
            className={`pointer-events-none fixed z-[100] rounded-lg bg-foreground px-3 py-2 text-sm text-background shadow-lg ${
              placement === "top"
                ? "-translate-x-1/2 -translate-y-full after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-x-4 after:border-x-transparent after:border-t-4 after:border-t-foreground"
                : "-translate-y-1/2 after:absolute after:left-0 after:top-1/2 after:-translate-x-full after:-translate-y-1/2 after:border-y-4 after:border-y-transparent after:border-r-4 after:border-r-foreground"
            } ${
              multiline
                ? "w-max max-w-[calc(100vw-1.5rem)] whitespace-normal break-words text-left sm:max-w-64"
                : "whitespace-nowrap"
            }`}
            style={{ top: position.top, left: position.left }}
          >
            {content}
          </span>,
          document.body,
        )}
    </span>
  );
};

export default Tooltip;
