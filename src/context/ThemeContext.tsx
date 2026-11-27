import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === "light" || value === "dark" || value === "system";

const getStoredTheme = (storageKey: string, defaultTheme: ThemeMode): ThemeMode => {
  const storedTheme = localStorage.getItem(storageKey);
  return storedTheme && isThemeMode(storedTheme) ? storedTheme : defaultTheme;
};

const getResolvedTheme = (theme: ThemeMode): ResolvedTheme => {
  if (theme !== "system") {
    return theme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
}

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<ThemeMode>(
    () => getStoredTheme(storageKey, defaultTheme)
  );
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    getResolvedTheme(theme),
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const nextResolvedTheme =
        theme === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : theme;

      root.setAttribute("data-theme", nextResolvedTheme);
      root.style.colorScheme = nextResolvedTheme;
      setResolvedTheme(nextResolvedTheme);
    };

    applyTheme();

    if (theme !== "system") {
      return;
    }

    mediaQuery.addEventListener("change", applyTheme);
    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
