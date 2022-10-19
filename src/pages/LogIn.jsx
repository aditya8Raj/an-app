import React from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import Buttons from "../components/Buttons";

export default function LogIn() {
  return (
    <>
      <div>
        <img src={logo} className="mx-auto max-w-lg pt-8 h-80" alt="logo" />
        <Buttons/>
      </div>
    </>
  );
}
