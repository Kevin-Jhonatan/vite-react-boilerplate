import LoginForm from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="w-full max-w-md bg-card border border-border rounded-2xl p-4 shadow-xl flex flex-col gap-4 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Iniciar Sesión</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Ingresa tus credenciales para acceder al panel.
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
