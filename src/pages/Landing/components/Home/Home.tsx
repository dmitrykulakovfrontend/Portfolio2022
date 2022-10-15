import React from "react";
import "./Home.scss";

import TypeWriter from "components/TypeWriter";
import Socials from "components/Socials";

const Home = () => {
  return (
    <section className="home" id="home">
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
