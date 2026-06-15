export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Panel de Control</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Resumen general de tu cuenta y métricas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Usuarios Activos</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Ingresos</h3>
          <p className="text-3xl font-bold mt-2">$12,345</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Tasa de Conversión</h3>
          <p className="text-3xl font-bold mt-2">4.5%</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-80 flex items-center justify-center">
        <p className="text-muted-foreground">Área para gráfico o tabla principal</p>
      </div>
    </div>
  );
};

export default DashboardPage;
