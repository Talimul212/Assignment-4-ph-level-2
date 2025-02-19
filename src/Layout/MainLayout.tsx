import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/login", "/registation", "/agentForm"];

  const hideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);
  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Outlet />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
