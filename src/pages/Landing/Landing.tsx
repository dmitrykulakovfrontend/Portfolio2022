import React from "react";
import "./Landing.scss";

import Home from "./components/Home";
import About from "./components/About";
import Facts from "./components/Facts";

type LandingProps = {
  activeSection: string;
};

const Landing = ({ activeSection }: LandingProps) => {
  return (
    <main className="landing-page">
      <Home />
      <About />
      <Facts activeSection={activeSection} />
    </main>
  );
};

export default Landing;
