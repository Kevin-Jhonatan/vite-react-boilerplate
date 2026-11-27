import { lazy, Suspense } from "react";
import MetricCard from "../../../components/MetricCard/MetricCard";
import { dashboardData } from "../data/dashboard";

const DashboardCharts = lazy(
  () => import("../components/DashboardCharts")
);

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Panel de Control</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Resumen general de tu cuenta y métricas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Usuarios Activos"
          value={dashboardData.metrics.activeUsers.toLocaleString("en-US")}
        />
        <MetricCard
          title="Ingresos"
          value={`$${dashboardData.metrics.revenue.toLocaleString("en-US")}`}
        />
        <MetricCard
          title="Tasa de Conversión"
          value={`${dashboardData.metrics.conversionRate}%`}
        />
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {[1, 2].map((chart) => (
              <div
                key={chart}
                className="h-80 animate-pulse rounded-xl border border-border bg-card"
              />
            ))}
          </div>
        }
      >
        <DashboardCharts data={dashboardData} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
