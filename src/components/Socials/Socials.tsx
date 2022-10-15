import React from "react";
import "./Socials.scss";
const Socials = () => {
  return (
    <ul className="socials-list">
      <li className="socials-list__list-item">
        <a
          href="https://github.com/dmitrykulakovfrontend"
          target="_blank"
          className="socials-list__link"
          rel="noreferrer"
        >
          <i className="uil uil-github socials-list__icon"></i>
        </a>
      </li>
      <li className="socials-list__list-item">
        <a
          href="https://www.linkedin.com/in/dmitrykulakovfrontend/"
          target="_blank"
          className="socials-list__link"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin socials-list__icon"></i>
        </a>
      </li>
      <li className="socials-list__list-item">
        <a
          href="https://twitter.com/AtomEistee"
          target="_blank"
          className="socials-list__link"
          rel="noreferrer"
        >
          <i className="uil uil-twitter socials-list__icon"></i>
        </a>
      </li>
      <li className="socials-list__list-item">
        <a
          href="https://telegram.me/dmitrykulakovfrontend"
          target="_blank"
          className="socials-list__link"
          rel="noreferrer"
        >
          <i className="uil uil-telegram socials-list__icon"></i>
        </a>
      </li>
      <li className="socials-list__list-item">
        <a
          href="https://wa.me/79855887126"
          target="_blank"
          className="socials-list__link"
          rel="noreferrer"
        >
          <i className="uil uil-whatsapp socials-list__icon"></i>
        </a>
      </li>
      <li className="socials-list__list-item">
        <a
          href="https://vk.com/atomeistee"
          target="_blank"
          className="socials-list__link"
          rel="noreferrer"
        >
          <i className="uil uil-vk socials-list__icon"></i>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
