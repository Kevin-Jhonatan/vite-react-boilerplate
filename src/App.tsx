import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import { router } from "./route";

export const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" theme={theme} richColors closeButton />
    </>
  );
};

export default App;