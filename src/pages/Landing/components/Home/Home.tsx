import React from "react";
import "./Home.scss";

import TypeWriter from "components/TypeWriter";
import Socials from "components/Socials";

import mountains from "static/mountains.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <img
        src={mountains}
        className="home__background"
        alt="mountains background"
      />
      <div className="home__animation-wrapper">
        <h1 className="home__title">Dmitry Kulakov</h1>
        <TypeWriter
          heading="I'm"
          messages={[
            "Web Developer",
            "Front End Developer",
            "Back End Developer?",
            "Software Engineer",
          ]}
        />
        <Socials />
      </div>
    </section>
  );
};

export default Home;
