import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        lazy: async () => {
          const module = await import("../features/auth/pages/LoginPage");
          return { Component: module.default };
        },
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import("../features/dashboard/pages/DashboardPage");
          return { Component: module.default };
        },
      },
      {
        path: "users",
        lazy: async () => {
          const module = await import("../features/users/pages/UsersPage");
          return { Component: module.default };
        },
      },
    ],
  },
  {
    path: "*",
    lazy: async () => {
      const module = await import("../features/page-not-found/pages/NotFoundPage");
      return { Component: module.default };
    },
  },
]);
