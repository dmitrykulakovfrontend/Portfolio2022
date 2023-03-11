import React from "react";
import "./ToggleSwitch.scss";

import i18next from "i18next";

const changeLanguageHandler = (lang: string) => {
  i18next.changeLanguage(lang);
};
const ToggleSwitch = () => {
  return (
    <form className="menu_language">
      <label htmlFor="first">Russian</label>
      <input
        id="first"
        name="language"
        type="radio"
        checked={i18next.language === "ru"}
        onChange={() => changeLanguageHandler("ru")}
      />
      <label htmlFor="second">English</label>
      <input
        id="second"
        name="language"
        type="radio"
        checked={i18next.language === "en"}
        onChange={() => changeLanguageHandler("en")}
      />
      <div className="blob"></div>
    </form>
  );
};

export default ToggleSwitch;
