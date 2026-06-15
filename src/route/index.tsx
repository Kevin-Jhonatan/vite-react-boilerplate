import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../features/auth/LoginPage";
import DashboardPage from "../features/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <p className="text-xl text-muted-foreground">Página no encontrada</p>
        <a href="/" className="mt-4 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          Volver al Inicio
        </a>
      </div>
    ),
  },
]);
