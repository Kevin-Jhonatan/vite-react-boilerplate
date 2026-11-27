import type { FormHTMLAttributes } from "react";

export const Form = ({ className, children, ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className={`flex flex-col gap-4 ${className ?? ""}`} {...props}>
      {children}
    </form>
  );
};

export default Form;
