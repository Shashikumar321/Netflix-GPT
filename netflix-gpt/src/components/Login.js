import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);

  const toggleSingInForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg_img" />
      </div>
      <form className="absolute w-4/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-l bg-opacity-85">
        <h1 className="font-bold text-2xl px-2 py-4">
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUpForm && (
          <input
            className="p-2 m-2 w-full bg-gray-800 rounded-l"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="p-2 m-2 w-full bg-gray-800 rounded-l"
          type="text"
          placeholder="Email or Mobile number"
        />
        <input
          className="p-2 m-2 w-full bg-gray-800 rounded-l"
          type="text"
          placeholder="Password"
        />
        <button className="p-2 m-2 w-full bg-red-700 rounded-l">
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-1 m-1 flex justify-center font-thin">
          Forgot Password?
        </p>
        {isSignUpForm ? (
          <div className="flex p-1 m-1">
            <p className="text-gray-400">New to Netflix?</p>
            <span className="w-2"></span>
            <p className="font-light cursor-pointer" onClick={toggleSingInForm}>
              Sign Up now
            </p>
          </div>
        ) : (
          <div className="flex p-1 m-1">
            <p className="text-gray-400">Already a User?</p>
            <span className="w-2"></span>
            <p className="font-light cursor-pointer" onClick={toggleSingInForm}>
              Sign In now
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
