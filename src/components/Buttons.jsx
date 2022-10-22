import React from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <>
      <div>
        <div className="bottom-buttons">
          <div
            id="login&register"
            className="pt-4 flex justify-center items-center"
          >
            <div id="login" className="pr-2">
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-48 transition duration-150 ease-in-out"
                >
                  <div className="">
                    <strong>Login</strong>
                  </div>
                </button>
              </Link>
            </div>
            <div id="register" className="pl-2">
              <Link to="/register">
                <button
                  type="button"
                  className="text-white bg-pink-500 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-full px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-48 transition duration-150 ease-in-out"
                >
                  <div className="">
                    <strong>Sign Up</strong>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <Link to="/termsnconditions">
            <button className="hover:text-gray-500">
              <h3 className="termsnconditions pt-2">Terms & Conditions</h3>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
