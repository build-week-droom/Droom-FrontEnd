import React, { useState, Component } from "react";
import { NavLink } from "react-router-dom";
import "../../stylesheets/components/navbar.scss";

// import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";

const Navbar = ({ links }) => {
  //   const [activeItem, setActiveItem] = useState();
  //   state = {}
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //   const handleItemClick = (event, { name }) => {
  //     setActiveItem({ activeItem: name });
  //   };

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

{
  /* <Menu>
        <Menu.Item header>Welcome to Droom</Menu.Item>
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="companies"
          active={activeItem === "companies"}
          onClick={handleItemClick}
        />
        <Menu.Item
          className="toggle"
          name="seekers"
          active={activeItem === "seekers"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={handleItemClick}
        />
      </Menu> */
}
