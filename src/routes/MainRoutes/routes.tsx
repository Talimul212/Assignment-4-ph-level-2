import { createBrowserRouter } from "react-router-dom";
import Registation from "../../pages/Auth/Registation";
import MainLayout from "../../Layout/MainLayout";
import Login from "../../pages/Auth/Login";
import MainElement from "../../pages/Home/MainElement";
import DashboardLayOut from "../../Layout/DashboardLayOut";
import ErrorPage from "../../pages/Error/ErrorPage";
import AddBike from "../../pages/Module/Dashboard/AddBike";
import OrderList from "../../pages/Module/Dashboard/OrderList";
import CartModel from "../../Components/Model/CartModel";

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
      {
        path: "/cartdetails",
        element: <CartModel />,
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
      {
        path: "/dashboard/orders",
        element: <OrderList />,
      },
    ],
  },
]);
export default router;
