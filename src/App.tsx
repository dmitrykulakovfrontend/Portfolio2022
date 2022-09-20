import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "components/Menu";
import Landing from "pages/Landing";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
