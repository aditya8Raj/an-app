import React from "react";
import logo from "../assets/logo.png";
import Buttons from "../components/Buttons";
import TopBar from "../components/TopBar";
import LowBar from "../components/LowBar";

export default function LogIn() {
  return (
    <>
      <div>
      <TopBar/>
        <img src={logo} className="mx-auto max-w-lg pt-8 h-80" alt="logo" />
        <Buttons />
      </div>
      <LowBar/>
    </>
  );
}
