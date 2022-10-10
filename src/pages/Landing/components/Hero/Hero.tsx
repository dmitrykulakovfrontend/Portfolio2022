import React from "react";
import "./Hero.scss";

import TypeWriter from "components/TypeWriter";

const Hero = () => {
  return (
    <section className="hero">
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
    </section>
  );
};

export default Hero;
