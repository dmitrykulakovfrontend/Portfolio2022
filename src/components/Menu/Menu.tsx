import React, { useState } from "react";
import "./Menu.scss";

import { Outlet } from "react-router-dom";
import useScrollspy from "hooks/useScrollspy";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const activeSection = useScrollspy(["home", "about"]);

  const handleClick = () => {
    setIsActive(!isActive);
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
      <header className={isActive ? "menu menu_active" : "menu"}>
        <nav className="menu__nav">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a
                href="#home"
                className={
                  activeSection === "home"
                    ? "menu__link menu__link_active"
                    : "menu__link"
                }
              >
                <i className="menu__icon uil uil-home"></i>
                Home
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="#about"
                className={
                  activeSection === "about"
                    ? "menu__link menu__link_active"
                    : "menu__link"
                }
              >
                <i className="menu__icon uil uil-user"></i>
                About
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="#resume"
                className={
                  activeSection === "resume"
                    ? "menu__link menu__link_active"
                    : "menu__link"
                }
              >
                <i className="menu__icon uil uil-file"></i>
                Resume
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="#portfolio"
                className={
                  activeSection === "portfolio"
                    ? "menu__link menu__link_active"
                    : "menu__link"
                }
              >
                <i className="menu__icon uil uil-bag"></i>
                Portfolio
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="#services"
                className={
                  activeSection === "services"
                    ? "menu__link menu__link_active"
                    : "menu__link"
                }
              >
                <i className="menu__icon uil uil-server"></i>
                Services
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="#contact"
                className={
                  activeSection === "contact"
                    ? "menu__link menu__link_active"
                    : "menu__link"
                }
              >
                <i className="menu__icon uil uil-envelope"></i>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
