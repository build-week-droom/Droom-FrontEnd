import React from "react";
import "../../stylesheets/components/navbar.scss";

const NavWrapper = ({ children }) => {
  return <header className="navigation">{children}</header>;
};

export default NavWrapper;
