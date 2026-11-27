export interface DashboardRevenuePoint {
  x: string;
  y: number;
}

export interface DashboardRevenueSeries {
  id: string;
  data: DashboardRevenuePoint[];
}

export interface DashboardUsersPoint {
  [key: string]: string | number;
  month: string;
  usuarios: number;
}

export interface DashboardMetrics {
  activeUsers: number;
  revenue: number;
  conversionRate: number;
}

export interface DashboardData {
  metrics: DashboardMetrics;
  revenue: DashboardRevenueSeries[];
  users: DashboardUsersPoint[];
}

