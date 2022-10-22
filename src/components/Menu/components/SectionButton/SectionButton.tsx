import useWindowSize from "hooks/useWindowSize";
import React from "react";
import "../../Menu.scss";

type SectionButtonProps = {
  title: string;
  activeSection: string;
  icon?: string;
};

enum Variables {
  "screenSm" = 576,
  "screenMd" = 768,
  "screenLg" = 992,
  "screenXl" = 1200,
  "screenXxl" = 1300,
  "screenFull" = 1400,
}

const SectionButton = ({ title, activeSection, icon }: SectionButtonProps) => {
  const { width } = useWindowSize();
  console.log(activeSection);
  return (
    <a
      href={`#${title}`}
      className={
        activeSection === title ? "menu__link menu__link_active" : "menu__link"
      }
    >
      <i className={`menu__icon uil uil-${icon}`}></i>
      {(width && width <= Variables.screenLg) || activeSection === title
        ? `${title[0].toUpperCase()}${title.slice(1)}`
        : ""}
    </a>
  );
};

export default SectionButton;
