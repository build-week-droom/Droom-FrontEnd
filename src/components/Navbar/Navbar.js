import React from "react";
import { NavLink } from "react-router-dom";
import "../../stylesheets/components/navbar.scss";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((l, idx) => (
        <NavLink key={idx} to={`/${l.toLowerCase()}/`}>
          {l}
        </NavLink>
      ))}
    </nav>
  );
};
export default Navbar;
