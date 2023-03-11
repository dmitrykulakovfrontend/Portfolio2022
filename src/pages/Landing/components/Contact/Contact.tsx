import Button from "components/Button";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Section from "../Section";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Section id="Contact" title={t("contact.title")}>
      <div className="contact">
        <div className="details">
          <div className="details__detail">
            <i className="uil uil-map-marker details__icon" />
            <div className="details__text">
              <h4 className="details__name">
                <Trans i18nKey={"contact.location"}>Location</Trans>:
              </h4>

              <p className="details__value">
                <Trans i18nKey={"contact.locationValue"}>Moscow, Russia</Trans>
              </p>
            </div>
          </div>
          <div className="details__detail">
            <i className="uil uil-envelope details__icon" />
            <div className="details__text">
              <h4 className="details__name">
                <Trans i18nKey={"contact.email"}>Email</Trans>:
              </h4>
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
            placeholder={t("contact.namePlaceholder")}
          />
          <label className="screen-reader" htmlFor="email">
            Email:
          </label>
          <input
            className="form__input form__collapse"
            type="email"
            name="email"
            id="email"
            placeholder={t("contact.emailPlaceholder")}
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
            placeholder={t("contact.subjectPlaceholder")}
          />
          <textarea
            className="form__input form__textarea"
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            id="message"
          ></textarea>
          <div className="contact__button-wrapper">
            <Button active type="submit">
              <Trans i18nKey="contact.sendMessage">Send Message</Trans>
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
