import { RouterProvider } from "react-router-dom";
import { router } from "./route";

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;