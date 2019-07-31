import React, { useState, Component } from "react";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState();
  //   state = {}
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  const handleItemClick = (event, { name }) => {
    setActiveItem({ activeItem: name });
  };

  return (
    <div>
      <Menu>
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
      </Menu>
    </div>
  );
};
export default Navbar;
