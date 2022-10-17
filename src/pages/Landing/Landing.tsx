import React from "react";
import "./Landing.scss";

import Home from "./components/Home";
import About from "./components/About";

const Landing = () => {
  return (
    <main className="landing-page">
      <Home />
      <About />
    </main>
  );
};

export default Landing;
