import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return "Hello React!!!";
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
