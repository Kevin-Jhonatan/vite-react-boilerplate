import { useEffect, useMemo, useState } from "react";
import type { DashboardData } from "../types/dashboard";
import { getChartTheme } from "./chartTheme";
import RevenueChart from "./RevenueChart";
import UsersChart from "./UsersChart";

interface DashboardChartsProps {
  data: DashboardData;
}

export const DashboardCharts = ({ data }: DashboardChartsProps) => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.dataset.theme === "dark");
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const theme = useMemo(() => getChartTheme(isDark), [isDark]);

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <RevenueChart data={data.revenue} theme={theme} />
      <UsersChart data={data.users} theme={theme} />
    </div>
  );
};

export default DashboardCharts;
