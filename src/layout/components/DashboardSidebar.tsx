import { ChevronLeft, ChevronRight, Home, LogOut, Users as UsersIcon, X, type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import Tooltip from "../../components/Tooltip/Tooltip";

const navigationItems: { label: string; to: string; icon: LucideIcon }[] = [
  { label: "Dashboard", to: "/", icon: Home },
  { label: "Usuarios", to: "/users", icon: UsersIcon },
];

interface DashboardSidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

export const DashboardSidebar = ({
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
}: DashboardSidebarProps) => {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        aria-label="Menú principal"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 flex-col border-r border-border bg-card transition-[transform,width] duration-200 md:static md:z-auto md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "md:w-20" : "md:w-64"}`}
      >
        <div
          className={`flex h-16 items-center justify-between border-b border-border px-4 ${
            isCollapsed ? "md:justify-center" : ""
          }`}
        >
          <h1 className={`text-xl font-bold tracking-tight text-accent ${isCollapsed ? "md:sr-only" : ""}`}>
            MiApp
          </h1>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Cerrar menú"
              className="rounded-lg p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
              onClick={onClose}
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={isCollapsed ? "Expandir menú" : "Contraer menú"}
              aria-expanded={!isCollapsed}
              className="hidden cursor-pointer rounded-lg p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent md:block"
              onClick={onToggleCollapse}
            >
              {isCollapsed ? (
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              ) : (
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-4 overflow-y-auto p-4" aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <Tooltip
              key={item.to}
              content={item.label}
              disabled={!isCollapsed}
              className={isCollapsed ? "md:w-full md:justify-center" : ""}
              desktopOnly
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-lg px-4 py-2.5 font-medium transition-colors ${
                    isCollapsed ? "md:h-12 md:w-12 md:justify-center md:p-3" : ""
                  } ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <item.icon aria-hidden="true" className="h-5 w-5 shrink-0" />
                <span className={isCollapsed ? "md:sr-only" : ""}>{item.label}</span>
              </NavLink>
            </Tooltip>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <Tooltip
            content="Cerrar sesión"
            disabled={!isCollapsed}
            className={isCollapsed ? "md:w-full md:justify-center" : ""}
            desktopOnly
          >
            <NavLink
              to="/login"
              onClick={onClose}
              className={`flex w-full items-center justify-center gap-4 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${
                isCollapsed ? "md:h-12 md:w-12 md:p-3" : ""
              }`}
            >
              <LogOut aria-hidden="true" className="h-5 w-5 shrink-0" />
              <span className={isCollapsed ? "md:sr-only" : ""}>Cerrar sesión</span>
            </NavLink>
          </Tooltip>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
