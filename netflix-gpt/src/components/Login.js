import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const errorMessage = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);

    if (errorMessage) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;

            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          });
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg_img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-l bg-opacity-85"
      >
        <h1 className="font-bold text-2xl px-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-2 m-2 w-full bg-gray-800 rounded-l"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-2 m-2 w-full bg-gray-800 rounded-l"
          type="text"
          placeholder="Email or Mobile number"
        />
        <input
          ref={password}
          className="p-2 m-2 w-full bg-gray-800 rounded-l"
          type="password"
          placeholder="Password"
        />
        <p className="p-1 m-1 text-red-500 font-bold text-sm">{errorMessage}</p>
        <button
          className="p-2 m-2 w-full bg-red-700 rounded-l"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-1 m-1 flex justify-center font-thin">
          Forgot Password?
        </p>
        {isSignInForm ? (
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
