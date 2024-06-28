import React from "react";
import ReactDOM from "react-dom";
// import "./index.css"; // optional, if you have a CSS file for global styles
import App from "./App.jsx"; // the main App component
// import reportWebVitals from "./reportWebVitals"; // optional, for measuring performance
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// optional, for measuring performance
// reportWebVitals();
