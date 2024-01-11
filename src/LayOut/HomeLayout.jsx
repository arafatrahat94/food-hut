import { Outlet } from "react-router-dom";
import Nav from "../Utilities/Navbar/Nav";
import Footer from "../Utilities/Footer/Footer";

const HomeLayout = () => {
  const location = window.location.pathname === "/SignIn" || "/SignUp";
  return (
    <div className="">
      {!location && <Nav></Nav>}
      <Outlet />
      {!location && <Footer />}
    </div>
  );
};

export default HomeLayout;
