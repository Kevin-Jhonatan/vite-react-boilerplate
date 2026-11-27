import type { DashboardData } from "../types/dashboard";

export const dashboardData: DashboardData = {
  metrics: {
    activeUsers: 1234,
    revenue: 12345,
    conversionRate: 4.5,
  },
  revenue: [
    {
      id: "Ingresos",
      data: [
        { x: "Ene", y: 8400 },
        { x: "Feb", y: 10200 },
        { x: "Mar", y: 9800 },
        { x: "Abr", y: 12600 },
        { x: "May", y: 11800 },
        { x: "Jun", y: 14500 },
      ],
    },
  ],
  users: [
    { month: "Ene", usuarios: 820 },
    { month: "Feb", usuarios: 960 },
    { month: "Mar", usuarios: 1120 },
    { month: "Abr", usuarios: 1080 },
    { month: "May", usuarios: 1260 },
    { month: "Jun", usuarios: 1420 },
  ],
};

