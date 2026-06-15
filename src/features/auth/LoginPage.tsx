import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-xl flex flex-col gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Iniciar Sesión</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Ingresa tus credenciales para acceder al panel.
        </p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Correo electrónico</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            className="px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-foreground"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            className="px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-foreground"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
