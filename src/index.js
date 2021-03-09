import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartNav from "./components/CartNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function setDocHeight() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight / 100}px`
  );
}

window.addEventListener("resize", function () {
  setDocHeight();
});
window.addEventListener("orientationchange", function () {
  setDocHeight();
});

window.onload = setDocHeight;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <CartNav />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
