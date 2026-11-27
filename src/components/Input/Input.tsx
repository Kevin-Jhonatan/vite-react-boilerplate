import {
  type Control,
  Controller,
  type FieldError,
  type FieldValues,
  type Path,
} from "react-hook-form";
import type { InputHTMLAttributes } from "react";

interface InputProps<TFieldValues extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  error?: FieldError;
}

export const Input = <TFieldValues extends FieldValues,>({
  name,
  control,
  label,
  error,
  id,
  ...props
}: InputProps<TFieldValues>) => {
  const inputId = id ?? String(name);
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={inputId}
            {...field}
            {...props}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            className={`rounded-lg border border-border bg-background px-4 py-2.5 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
              error ? "border-red-500 focus:ring-red-500" : ""
            } ${props.className ?? ""}`}
          />
        )}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};
export default Input;
