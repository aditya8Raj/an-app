import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import TermsAndConditions from "./pages/TermsAndConditions";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termsnconditions" element={<TermsAndConditions />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
