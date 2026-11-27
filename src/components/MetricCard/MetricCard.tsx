import type { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
}

export const MetricCard = ({ title, value, description, icon }: MetricCardProps) => {
  return (
    <article className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <p className="mt-2 text-3xl font-bold">{value}</p>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
    </article>
  );
};

export default MetricCard;
