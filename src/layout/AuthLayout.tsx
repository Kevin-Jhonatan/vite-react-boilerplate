import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/Theme/ThemeToggle";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="absolute top-0 w-full p-6 flex justify-end items-center z-10">
        <ThemeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
