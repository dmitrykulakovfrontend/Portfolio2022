import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "pages/Landing";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
