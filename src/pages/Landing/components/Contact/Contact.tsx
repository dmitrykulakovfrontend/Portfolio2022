import Button from "components/Button";
import React from "react";
import Section from "../Section";
import "./Contact.scss";

const Contact = () => {
  return (
    <Section title="Contact">
      <div className="contact">
        <div className="details">
          <div className="details__detail">
            <i className="uil uil-map-marker details__icon" />
            <div className="details__text">
              <h4 className="details__name">Location:</h4>
              <p className="details__value">Moscow, Russia</p>
            </div>
          </div>
          <div className="details__detail">
            <i className="uil uil-envelope details__icon" />
            <div className="details__text">
              <h4 className="details__name">Email:</h4>
              <a className="details__value" href="mailto:atomeistee@gmail.com">
                atomeistee@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form
          className="form"
          action="https://formspree.io/f/xoqbkyve"
          method="POST"
        >
          <label className="screen-reader" htmlFor="name">
            Name:
          </label>
          <input
            className="form__input form__collapse"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
          />
          <label className="screen-reader" htmlFor="email">
            Email:
          </label>
          <input
            className="form__input form__collapse"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
          />
          <label className="screen-reader" htmlFor="message">
            Your message:
          </label>
          <label className="screen-reader" htmlFor="subject">
            Subject:
          </label>
          <input
            className="form__input"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            className="form__input form__textarea"
            name="message"
            placeholder="Message"
            id="message"
          ></textarea>
          <div className="contact__button-wrapper">
            <Button active type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
