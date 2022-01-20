import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import "./registerServiceWorker";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./locale/i18n";
import "./plugins/logging";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
