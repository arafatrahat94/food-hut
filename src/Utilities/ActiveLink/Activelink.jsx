import { Children } from "react";

import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-accent" : "")}
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
