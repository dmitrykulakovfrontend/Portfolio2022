import React, { useState } from "react";
import "./Menu.scss";

import { Outlet } from "react-router-dom";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(!isActive);
  };
  return (
    <>
      <Outlet />
      <button className="menu-button" onClick={handleClick}>
        <i
          className={
            isActive
              ? "uil uil-times menu-button__icon menu-button__icon_active"
              : "uil uil-bars menu-button__icon"
          }
        ></i>
      </button>
      <ul className={isActive ? "menu menu_active" : "menu"}></ul>
    </>
  );
};

export default Menu;
