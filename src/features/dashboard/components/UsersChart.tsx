import { ResponsiveBar } from "@nivo/bar";
import type { ChartTheme } from "./chartTheme";
import ChartCard from "./ChartCard";
import type { DashboardUsersPoint } from "../types/dashboard";

interface UsersChartProps {
  data: DashboardUsersPoint[];
  theme: ChartTheme;
}

export const UsersChart = ({ data, theme }: UsersChartProps) => (
  <ChartCard title="Usuarios registrados">
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={["usuarios"]}
      indexBy="month"
      margin={{ top: 12, right: 20, bottom: 42, left: 52 }}
      padding={0.35}
      borderRadius={4}
      colors={["#8b5cf6"]}
      enableLabel={false}
      enableGridX={false}
      axisLeft={{
        tickSize: 0,
        tickPadding: 12,
      }}
      axisBottom={{ tickSize: 0, tickPadding: 12 }}
      tooltip={({ indexValue, value }) => (
        <div className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-lg">
          <p className="font-semibold">{indexValue}</p>
          <p className="text-muted-foreground">
            {Number(value).toLocaleString("en-US")}
          </p>
        </div>
      )}
      role="img"
      ariaLabel="Usuarios registrados por mes"
      barAriaLabel={(datum) =>
        `${datum.indexValue}: ${datum.formattedValue} usuarios`
      }
    />
  </ChartCard>
);

export default UsersChart;

