/* eslint-disable no-console */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/Landing";
import Menu from "components/Menu";
import "./App.scss";
import GA4React from "ga-4-react";
import useScrollspy from "hooks/useScrollspy";

function App() {
  const activeSection = useScrollspy(
    ["home", "about", "facts", "skills", "projects", "contact"],
    "70%"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu activeSection={activeSection} />}>
          <Route path="/" element={<Landing activeSection={activeSection} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

try {
  setTimeout(() => {
    const ga4react = new GA4React(process.env.REACT_APP_GA4!);
    ga4react.initialize().catch((err) => console.error(err));
  }, 4000);
} catch (err) {
  console.error(err);
}

export default App;
