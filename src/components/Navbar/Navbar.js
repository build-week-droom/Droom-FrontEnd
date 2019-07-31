import React from "react";
import { NavLink } from "react-router-dom";
import "../../stylesheets/components/navbar.scss";

const Navbar = ({ companyLinks, seekerLinks }) => {
  return (
    <div>
      <nav className="navbar-companies">
        {companyLinks.map((l, idx) => (
          <NavLink key={idx} to={`/${l.toLowerCase()}/`}>
            {l}
          </NavLink>
        ))}
      </nav>
      <nav className="navbar-seekers">
        {seekerLinks.map((l, idx) => (
          <NavLink key={idx} to={`/${l.toLowerCase()}/`}>
            {l}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
export default Navbar;
