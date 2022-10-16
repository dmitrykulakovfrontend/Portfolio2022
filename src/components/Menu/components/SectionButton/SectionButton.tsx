import useWindowSize from "hooks/useWindowSize";
import React from "react";
import "../../Menu.scss";

type SectionButtonProps = {
  title: string;
  activeSection: string;
  icon?: string;
};

enum Variables {
  "screenSm" = "576px",
  "screenMd" = "768px",
  "screenLg" = "992px",
  "screenXl" = "1200px",
  "screenXxl" = "1300px",
  "screenFull" = "1400px",
}

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
      {(width && width <= +Variables.screenLg) || activeSection === title
        ? `${title[0].toUpperCase()}${title.slice(1)}`
        : ""}
    </a>
  );
};

export default SectionButton;
