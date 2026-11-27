interface TableStateProps {
  message: string;
  className: string;
}

export const TableState = ({ message, className }: TableStateProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-border bg-card p-4 text-muted-foreground shadow-sm ${className}`}
    >
      {message}
    </div>
  );
};

export default TableState;
