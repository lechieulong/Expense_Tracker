import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GeneralProvider } from "./context/GeneralProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>
);
