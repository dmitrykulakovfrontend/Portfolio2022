import React from "react";
import "./Landing.scss";

import Home from "./components/Home";
import About from "./components/About";
import Facts from "./components/Facts";
import Skills from "./components/Skills";

type LandingProps = {
  activeSection: string;
};

const Landing = ({ activeSection }: LandingProps) => {
  return (
    <main className="landing-page">
      <Home />
      <About />
      <Facts activeSection={activeSection} />
      <Skills activeSection={activeSection} />
      <About />
    </main>
  );
};

export default Landing;
