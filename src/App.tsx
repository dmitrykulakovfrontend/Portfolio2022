import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/Landing";
import Menu from "components/Menu";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
