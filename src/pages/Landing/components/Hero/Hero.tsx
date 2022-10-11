import React from "react";
import "./Hero.scss";

import TypeWriter from "components/TypeWriter";
import Socials from "components/Socials";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__animation-wrapper">
        <h1 className="hero__title">Dmitry Kulakov</h1>
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

export default Hero;
