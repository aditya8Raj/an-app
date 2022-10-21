import React from "react";
import logo from "../assets/logo.png";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple.png";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import LowBar from "../components/LowBar";

export default function LogIn() {
  return (
    <>
      <div>
        <TopBar />
        <section className="h-screen">
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <Link to="/">
                  <img
                    src={logo}
                    className="mx-auto max-w-lg h-96"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form>
                  {/* <!-- Email input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                      onChange={(e) => {}}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                      onChange={(e) => {}}
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck3"
                        checked
                        onChange={(e) => {}}
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign in
                  </button>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                  </div>
                  {/* google button */}
                  <div
                    id="google-button"
                    className="flex justify-center items-center"
                  >
                    <button
                      type="button"
                      className="bg-white border border-gray-500 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 rounded-2xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-64 transition duration-150 ease-in-out"
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
                  {/* apple button */}
                  <div
                    id="apple-button"
                    className="my-2.5 flex justify-center items-center"
                  >
                    <button
                      type="button"
                      className="bg-white border border-gray-500 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 rounded-2xl px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-64"
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
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <LowBar />
    </>
  );
}
