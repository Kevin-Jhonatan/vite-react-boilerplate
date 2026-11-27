import MetricCard from "../../../components/MetricCard/MetricCard";

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
        <MetricCard title="Usuarios Activos" value="1,234" />
        <MetricCard title="Ingresos" value="$12,345" />
        <MetricCard title="Tasa de Conversión" value="4.5%" />
      </div>

      <div className="bg-card border border-border rounded-xl p-4 shadow-sm h-80 flex items-center justify-center">
        <p className="text-muted-foreground">Área para gráfico o tabla principal</p>
      </div>
    </div>
  );
};

export default DashboardPage;
