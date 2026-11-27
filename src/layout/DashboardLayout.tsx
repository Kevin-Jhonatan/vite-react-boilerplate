import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/Theme/ThemeToggle";
import DashboardSidebar from "./components/DashboardSidebar";

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <DashboardSidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onClose={() => setIsSidebarOpen(false)}
        onToggleCollapse={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="relative h-16 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between px-4 shrink-0 z-10">
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isSidebarOpen}
            className="rounded-lg p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 font-bold text-accent md:hidden">
            MiApp
          </div>
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
