import React from "react";
import { Outlet } from "react-router-dom";
import useWindowSize from "hooks/useWindowSize";
import "./Menu.scss";
import variables from "utils/variables";

const Menu = () => {
  const { width } = useWindowSize();
  return (
    <>
      <aside
        className={
          width && width < variables["screen-xl"]
            ? "page-menu closed"
            : "page-menu active"
        }
      >
        Menu
      </aside>
      <Outlet />
    </>
  );
};

export default Menu;
