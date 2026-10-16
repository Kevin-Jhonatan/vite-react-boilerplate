import { useTheme } from "../../context/ThemeContext";
import { SunIcon, MoonIcon } from "../../icons";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`cursor-pointer p-2.5 rounded-xl border border-border bg-card text-card-foreground hover:opacity-80 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center ${className ?? ""}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-amber-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
