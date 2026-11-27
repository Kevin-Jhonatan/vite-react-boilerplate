import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

export const ChartCard = ({ title, children }: ChartCardProps) => (
  <section className="min-w-0 rounded-xl border border-border bg-card p-4 shadow-sm">
    <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
    <div className="h-72">{children}</div>
  </section>
);

export default ChartCard;

