import React from "react";
import "./Home.scss";

import TypeWriter from "components/TypeWriter";
import Socials from "components/Socials";

import mountains from "static/mountains.webp";

import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="home" id="home">
      <img
        src={mountains}
        className="home__background"
        alt="mountains background"
      />
      <div className="home__animation-wrapper">
        <h1 className="home__title">
          <Trans i18nKey="home.name">Dmitry Kulakov</Trans>
        </h1>
        <TypeWriter
          heading={t("home.whoamiHeading")}
          messages={t("home.whoami", { returnObjects: true })}
        />
        <Socials />
      </div>
    </section>
  );
};

export default Home;
