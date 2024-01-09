import { Outlet } from "react-router-dom";
import Nav from "../Utilities/Navbar/Nav";

const HomeLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
