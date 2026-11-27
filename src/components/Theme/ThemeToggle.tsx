import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`cursor-pointer p-2.5 rounded-xl border border-border bg-card text-card-foreground hover:opacity-80 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center ${className ?? ""}`}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-400" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
