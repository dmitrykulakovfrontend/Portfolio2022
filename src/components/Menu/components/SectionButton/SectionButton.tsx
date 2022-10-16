import useWindowSize from "hooks/useWindowSize";
import React from "react";
import "../../Menu.scss";
import variables from "utils/variables";

type SectionButtonProps = {
  title: string;
  activeSection: string;
  icon?: string;
};

const SectionButton = ({ title, activeSection, icon }: SectionButtonProps) => {
  const { width } = useWindowSize();
  return (
    <a
      href={`#${title}`}
      className={
        activeSection === title ? "menu__link menu__link_active" : "menu__link"
      }
    >
      <i className={`menu__icon uil uil-${icon}`}></i>
      {(width && width <= variables.screenLg) || activeSection === title
        ? `${title[0].toUpperCase()}${title.slice(1)}`
        : ""}
    </a>
  );
};

export default SectionButton;
