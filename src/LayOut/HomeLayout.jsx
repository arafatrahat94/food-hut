import { Outlet } from "react-router-dom";
import Nav from "../Utilities/Navbar/Nav";
import Footer from "../Utilities/Footer/Footer";

const HomeLayout = () => {
  const locaion = window.location.pathname === "/SignIn";
  return (
    <div className="">
      {!locaion && <Nav></Nav>}
      <Outlet />
      {!locaion && <Footer />}
    </div>
  );
};

export default HomeLayout;
