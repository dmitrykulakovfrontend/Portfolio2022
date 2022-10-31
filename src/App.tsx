/* eslint-disable no-console */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/Landing";
import Menu from "components/Menu";
import "./App.scss";
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

export default App;
