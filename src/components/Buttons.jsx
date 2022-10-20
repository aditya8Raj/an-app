import React from "react";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple.png";

export default function Buttons() {
  return (
    <>
      <div>
        <div className="pt-4">
          <div id="google-button">
            <button
              type="button"
              class="bg-white border border-gray-500 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 rounded-2xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-64"
            >
              <img
                src={googleLogo}
                alt="googleLogo"
                className="h-10 w-10 float-left"
              />
              <div className="pt-2">
                <strong>Sign in with Google</strong>
              </div>
            </button>
          </div>
          <div id="apple-button" className="my-2.5">
            <button
              type="button"
              class="bg-white border border-gray-500 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 rounded-2xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-64"
            >
              <img
                src={appleLogo}
                alt="appleLogo"
                className="h-10 w-10 float-left"
              />
              <div className="pt-2">
                <strong>Sign in with Apple</strong>
              </div>
            </button>
          </div>
          <div class="bottom-buttons">
            <div id="login&signup" class="">
              <button
                type="button"
                class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500 px=6 mb-1 mr-5"
              >
                Login
              </button>
              <button
                type="button"
                class="text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-full text-sm px-5 py-2.5 text-center  dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mb-1 ml-5"
              >
                Sign Up
              </button>
              <h3 class="termsnconditions">Terms & Conditions</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
