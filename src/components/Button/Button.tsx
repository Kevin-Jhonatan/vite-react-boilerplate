import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, type = "button", ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`rounded-lg bg-accent px-4 py-2.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
