import { createBrowserRouter } from "react-router-dom";
import Registation from "../../pages/Auth/Registation";
import MainLayout from "../../Layout/MainLayout";
import Login from "../../pages/Auth/Login";
import MainElement from "../../pages/Home/MainElement";
import DashboardLayOut from "../../Layout/DashboardLayOut";
import ErrorPage from "../../pages/Error/ErrorPage";
import AddBike from "../../pages/Module/Dashboard/AddBike";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
    children: [
      {
        path: "/dashboard/productlisting",
        element: <AddBike />,
      },
    ],
  },
]);
export default router;
