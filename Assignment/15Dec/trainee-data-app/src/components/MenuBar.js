import React from "react";
import { useState } from "react";
import { Menu, MenuItem } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";

const MenuBar = () => {
  // const items = [
  //   { key: "home", name: "Home"  },
  //   { key: "services", name: "Services" },
  //   { key: "contact-us", name: "Contact Us" },
  //   { key: "trainees", name: "Trainees"},
  // ];

  // items.map((item) => {
  //   console.log(item.key);
  // });
  return (
    <>
      <Menu>
        <Menu.Item name="Home" as={Link} to="/home" />
        <Menu.Item name="Services" as={Link} to="/services" />
        <Menu.Item name="Trainees" as={Link} to="/trainees" />
        <Menu.Item name="Contact Us" as={Link} to="/contactus" />
      </Menu>
    </>
  );
};

export default MenuBar;
