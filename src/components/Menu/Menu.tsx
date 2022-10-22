import React, { useState } from "react";
import "./Menu.scss";

import { Outlet } from "react-router-dom";
import useScrollspy from "hooks/useScrollspy";
import SectionButton from "./components/SectionButton";

type MenuProps = {
  activeSection: string;
};

const Menu = ({ activeSection }: MenuProps) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleClick = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  return (
    <>
      <Outlet />
      <button className="menu-button" onClick={handleClick}>
        <i
          className={
            isActiveMenu
              ? "uil uil-times menu-button__icon menu-button__icon_active"
              : "uil uil-bars menu-button__icon"
          }
        ></i>
      </button>
      <header className={isActiveMenu ? "menu menu_active" : "menu"}>
        <nav className="menu__nav">
          <ul className="menu__list">
            <li className="menu__list-item">
              <SectionButton
                title="home"
                icon="home"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                title="about"
                icon="user"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                title="facts"
                icon="file"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                title="portfolio"
                icon="bag"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                title="services"
                icon="server"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                title="contact"
                icon="envelope"
                activeSection={activeSection}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
