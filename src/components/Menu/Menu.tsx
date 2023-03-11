import React, { useState } from "react";
import "./Menu.scss";

import { Outlet } from "react-router-dom";
import SectionButton from "./components/SectionButton";
import { useTranslation } from "react-i18next";
import ToggleSwitch from "./components/ToggleSwitch";

type MenuProps = {
  activeSection: string;
};

const Menu = ({ activeSection }: MenuProps) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleClick = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  const { t } = useTranslation();
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
                id="home"
                title={t("menu.home")}
                icon="home"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                id="about"
                title={t("menu.about")}
                icon="user"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                id="facts"
                title={t("menu.facts")}
                icon="file"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                id="skills"
                title={t("menu.skills")}
                icon="bag"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                id="projects"
                title={t("menu.projects")}
                icon="server"
                activeSection={activeSection}
              />
            </li>
            <li className="menu__list-item">
              <SectionButton
                id="contact"
                title={t("menu.contact")}
                icon="envelope"
                activeSection={activeSection}
              />
            </li>
            <ToggleSwitch />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
