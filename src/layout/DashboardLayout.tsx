import { Outlet, Link, useLocation } from "react-router-dom";
import ThemeToggle from "../components/Theme/ThemeToggle";

export const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border shrink-0">
          <h1 className="text-xl font-bold tracking-tight text-accent">MiApp</h1>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
          <Link
            to="/"
            className={`px-4 py-2.5 rounded-lg font-medium transition-colors ${location.pathname === "/"
              ? "bg-accent/10 text-accent"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
          >
            Dashboard
          </Link>
        </nav>
        <div className="p-4 border-t border-border shrink-0">
          <Link
            to="/login"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Cerrar sesión
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between px-4 shrink-0 z-10">
          <div className="md:hidden font-bold text-accent">MiApp</div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>

        <main
          className="flex-1 p-4 overflow-y-auto scroll-smooth touch-pan-y"
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorY: "contain",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
