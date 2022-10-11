import React from "react";
import { Link } from "react-router-dom";
import "./Socials.scss";
const Socials = () => {
  return (
    <ul className="socials-list">
      <li className="socials-list__list-item">
        <Link to="" className="socials-list__link">
          <i className="uil uil-github socials-list__icon"></i>
        </Link>
      </li>
      <li className="socials-list__list-item">
        <Link to="" className="socials-list__link">
          <i className="uil uil-linkedin socials-list__icon"></i>
        </Link>
      </li>
      <li className="socials-list__list-item">
        <Link to="" className="socials-list__link">
          <i className="uil uil-twitter socials-list__icon"></i>
        </Link>
      </li>
      <li className="socials-list__list-item">
        <Link to="" className="socials-list__link">
          <i className="uil uil-telegram socials-list__icon"></i>
        </Link>
      </li>
      <li className="socials-list__list-item">
        <Link to="" className="socials-list__link">
          <i className="uil uil-whatsapp socials-list__icon"></i>
        </Link>
      </li>
      <li className="socials-list__list-item">
        <Link to="" className="socials-list__link">
          <i className="uil uil-vk socials-list__icon"></i>
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
