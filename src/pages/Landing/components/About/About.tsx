import React from "react";
import Section from "../Section";
import "./About.scss";

import profileImg from "static/profile.webp";
import InfoList from "./components/InfoList";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Section id="about" info={t("about.subtitle")} title={t("about.title")}>
      <div className="about">
        <img className="about__profile" src={profileImg} alt="profile" />
        <div className="about__text">
          <h3 className="about__welcome">
            <Trans i18nKey={"about.welcome"}>Hi, I&apos;m Dmitry!</Trans>
          </h3>
          <h4 className="about__title">
            <Trans i18nKey={"about.developer"}>Front End Developer.</Trans>
          </h4>
          <p className="about__info">
            <Trans i18nKey={"about.info"}>
              I am a Web Developer from Russia with a good experience in
              collaboration with developers and people.
            </Trans>
          </p>
          <InfoList profile={t("about.profile", { returnObjects: true })} />
          <ul className="about__bullet-list">
            {t("about.bulletPoints", { returnObjects: true }).map(
              (bullet, i) => (
                <li key={i} className="about__bullet">
                  {bullet}
                </li>
              )
            )}
          </ul>
          <p className="about__description">
            <Trans i18nKey={"about.description"}>
              I am a self-taught front-end software engineer based in Moscow,
              Russia. I have good experience in web development and have used
              many different technologies in projects where I developed, such
              as: MongoDB, Express, React, Node.js, TanStack products, tRPC,
              Prisma, Typescript, and Next. I have honed these skills through
              self-study, collaboration with other developers, and hands-on
              experience creating full-stack applications. I am proficient in
              using GitHub Flow to work efficiently with a team.
            </Trans>
          </p>
          <p className="about__description">
            <Trans i18nKey={"about.description_2"}>
              In addition to my experience and skills, I have a portfolio of
              projects that showcases my capabilities as a front-end software
              engineer. These projects include a website library with the
              ability to create an account and access a wide range of books, a
              web application that uses Hi-Rez Studios API to show user
              statistics from the game called Paladins, and a CRUD task-oriented
              application that stores data in LocalStorage.
            </Trans>
          </p>
          <p className="about__description">
            <Trans i18nKey={"about.description_3"}>
              Thank you for considering me for your web development needs. I am
              eager to put my skills to use in a new role and contribute to the
              success of your team.
            </Trans>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
