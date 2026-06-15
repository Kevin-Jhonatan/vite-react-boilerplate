import { useState, useRef, useEffect } from "react";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface Props {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  trigger?: React.ReactNode;
}

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Select = ({ options, value, onChange, className, trigger }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const hasIcons = options.some((opt) => opt.icon !== undefined);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const defaultTrigger = hasIcons ? (
    <span className="flex items-center justify-center">
      {selectedOption?.icon ?? selectedOption?.label}
    </span>
  ) : (
    <>
      <span className="truncate">{selectedOption?.label ?? "Select..."}</span>
      <ChevronDown isOpen={isOpen} />
    </>
  );

  const triggerClass = hasIcons
    ? "p-2.5 flex items-center justify-center rounded-xl border border-border bg-card text-card-foreground hover:opacity-80 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
    : "flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card text-card-foreground text-sm font-semibold hover:opacity-80 transition-all duration-200 cursor-pointer shadow-sm";

  return (
    <div ref={containerRef} className={`relative inline-block z-30 ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={triggerClass}
      >
        {trigger ?? defaultTrigger}
      </button>

      {isOpen && (
        <ul className="absolute mt-2 min-w-[140px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden right-0">
          {options.map((option) => {
            const isActive = option.value === value;
            return (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 font-medium ${
                  isActive
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {option.icon && (
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    {option.icon}
                  </span>
                )}
                <span>{option.label}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;