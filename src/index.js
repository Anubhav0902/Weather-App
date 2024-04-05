import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

const renderApp = () => {
  ReactDOM.unmountComponentAtNode(rootElement);
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Call renderApp to initially render your app
renderApp();
