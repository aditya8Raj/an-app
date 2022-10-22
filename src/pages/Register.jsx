import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import LowBar from "../components/LowBar";
import { auth } from "../firebase-config";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <TopBar />
        <section className="h-screen">
          <div className="container py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12">
                <Link to="/">
                  <img
                    src={logo}
                    className="mx-auto max-w-lg h-96"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="lg:w-5/12 lg:ml-20">
                <h1 className="text-3xl text-center mb-2">Register</h1>
                <form>
                  {/* <!-- Name input -->
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Full Name"
                      onChange={(event) => {setRegisterName(event.target.value)}}
                    />
                  </div> */}
                  {/* <!-- Email input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email"
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                  </div>
                  {/* <!-- Password confirm -->
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Confirm Password"
                      onChange={(e) => {}}
                    />
                  </div> */}

                  {/* <!-- Create Account button --> */}
                  <Link to="/login">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={register}
                    >
                      Create Account
                    </button>
                  </Link>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    By signing up, you agree to our{" "}
                    <Link to="/termsnconditions" target="_blank">
                      <u>Terms & Conditions</u>
                    </Link>
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

export default Register;
