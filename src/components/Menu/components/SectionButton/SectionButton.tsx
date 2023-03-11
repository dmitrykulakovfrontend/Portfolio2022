import useWindowSize from "hooks/useWindowSize";
import React, { useState } from "react";
import "../../Menu.scss";

type SectionButtonProps = {
  title: string;
  activeSection: string;
  icon?: string;
  id: string;
};

enum Variables {
  "screenSm" = 576,
  "screenMd" = 768,
  "screenLg" = 992,
  "screenXl" = 1200,
  "screenXxl" = 1300,
  "screenFull" = 1400,
}

const SectionButton = ({
  title,
  activeSection,
  icon,
  id,
}: SectionButtonProps) => {
  const { width } = useWindowSize();

  const isSmallScreen = width && width <= Variables.screenLg;

  const isActive = activeSection === id;

  const [isHover, changeIsHover] = useState(false);

  const showTitle = isSmallScreen || isActive || isHover;
  const showActive = isActive || isHover;
  return (
    <a
      href={`#${id}`}
      className={showActive ? "menu__link menu__link_active" : "menu__link"}
      onMouseEnter={() => changeIsHover(true)}
      onMouseLeave={() => changeIsHover(false)}
    >
      <i className={`menu__icon uil uil-${icon}`}></i>
      {showTitle ? title : ""}
    </a>
  );
};

export default SectionButton;
