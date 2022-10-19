import React from "react";
import "./Landing.scss";

import Home from "./components/Home";
import About from "./components/About";
import Facts from "./components/Facts";

const Landing = () => {
  return (
    <main className="landing-page">
      <Home />
      <About />
      <Facts />
    </main>
  );
};

export default Landing;
