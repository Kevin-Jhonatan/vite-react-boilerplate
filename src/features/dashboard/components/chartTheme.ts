export const getChartTheme = (isDark: boolean) => ({
  background: "transparent",
  textColor: isDark ? "#f8fafc" : "#0f172a",
  axis: {
    domain: {
      line: {
        stroke: isDark ? "#3f3f46" : "#cbd5e1",
      },
    },
    ticks: {
      line: {
        stroke: isDark ? "#3f3f46" : "#cbd5e1",
      },
      text: {
        fill: isDark ? "#a1a1aa" : "#64748b",
      },
    },
    legend: {
      text: {
        fill: isDark ? "#f8fafc" : "#0f172a",
      },
    },
  },
  grid: {
    line: {
      stroke: isDark ? "#27272a" : "#e2e8f0",
    },
  },
  tooltip: {
    container: {
      background: isDark ? "#18181b" : "#ffffff",
      color: isDark ? "#f8fafc" : "#0f172a",
      border: `1px solid ${isDark ? "#3f3f46" : "#e2e8f0"}`,
      borderRadius: "0.5rem",
      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
      pointerEvents: "none" as const,
      zIndex: 100,
    },
  },
});

export type ChartTheme = ReturnType<typeof getChartTheme>;

