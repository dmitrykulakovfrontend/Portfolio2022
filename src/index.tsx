import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";

import "styles/_global.scss";
import "styles/_typography.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
