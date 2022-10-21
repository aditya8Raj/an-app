import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndConditions from "./pages/TermsAndConditions";
import SignUp from "./pages/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termsnconditions" element={<TermsAndConditions />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
