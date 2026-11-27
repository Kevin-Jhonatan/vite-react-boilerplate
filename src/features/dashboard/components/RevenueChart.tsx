import { ResponsiveLine } from "@nivo/line";
import type { ChartTheme } from "./chartTheme";
import ChartCard from "./ChartCard";
import type { DashboardRevenueSeries } from "../types/dashboard";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

interface RevenueChartProps {
  data: DashboardRevenueSeries[];
  theme: ChartTheme;
}

export const RevenueChart = ({ data, theme }: RevenueChartProps) => (
  <ChartCard title="Ingresos por mes">
    <ResponsiveLine
      data={data}
      theme={theme}
      margin={{ top: 12, right: 20, bottom: 42, left: 52 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: 0, max: "auto", stacked: false }}
      curve="monotoneX"
      colors={["#3b82f6"]}
      enableArea
      areaOpacity={0.12}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      enableGridX={false}
      axisLeft={{
        format: (value) => compactCurrencyFormatter.format(Number(value)),
      }}
      axisBottom={{ tickSize: 0, tickPadding: 12 }}
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        const point = slice.points[0];

        if (!point) return null;

        return (
          <div className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-lg">
            <p className="font-semibold">{point.data.xFormatted}</p>
            <p className="text-muted-foreground">
              {currencyFormatter.format(Number(point.data.y))}
            </p>
          </div>
        );
      }}
      useMesh
      role="img"
      ariaLabel="Ingresos mensuales"
    />
  </ChartCard>
);

export default RevenueChart;

