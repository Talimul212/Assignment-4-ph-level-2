import { createBrowserRouter } from "react-router-dom";
import Registation from "../../pages/Auth/Registation";
import MainLayout from "../../Layout/MainLayout";
import Login from "../../pages/Auth/Login";
import MainElement from "../../pages/Home/MainElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainElement />,
      },
      {
        path: "/registation",
        element: <Registation />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
