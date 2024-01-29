import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Form from "./components/Form/Form.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
);
