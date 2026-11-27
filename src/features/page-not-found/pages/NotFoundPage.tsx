import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <p className="text-xl text-muted-foreground">Página no encontrada</p>
      <Link
        to="/"
        className="mt-4 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
