import { createBrowserRouter } from "react-router-dom";
import Registation from "../../pages/Auth/Registation";
import MainLayout from "../../Layout/MainLayout";
import Login from "../../pages/Auth/Login";
import MainElement from "../../pages/Home/MainElement";
import DashboardLayOut from "../../Layout/DashboardLayOut";

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
  {
    path: "/dashboard",
    element: <DashboardLayOut />,
    children: [{}],
  },
]);
export default router;
