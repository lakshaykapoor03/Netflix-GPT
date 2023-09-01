import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const SignUpForm = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // console.log(fullname.current.value)
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
 

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/109919457?v=4",
          })
            .then(() => {
              // Profile updated!
              
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const changeToSignUp = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="absolute top-[30vh] left-[40vw] text-white bg-black/75 py-6 px-8">
      {!signIn ? (
        <h1 className="text-3xl font-bold">Sign Up</h1>
      ) : (
        <h1 className="text-3xl font-bold">Sign In</h1>
      )}
      <form onSubmit={(e) => e.preventDefault()} action="">
        {!signIn && (
          <input
            ref={fullname}
            className="block bg-gray-800 p-3 w-80 rounded my-4"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="block bg-gray-800 p-3 w-80 rounded my-4"
          type="text"
          placeholder="abc@xyz.com"
        />
        <input
          ref={password}
          className="block bg-gray-800 p-3 w-80 rounded my-4"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />

        <button
          onClick={handleButtonClick}
          className="bg-red-700 p-2 my-2 block w-80 rounded"
        >
          {!signIn ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-center text-lg font-bold text-red-700 my-2">
          {errorMessage}
        </p>
      </form>

      {!signIn ? (
        <p className=" p-2 my-4 block w-80 text-center text-gray-400">
          Already registered?{" "}
          <span
            onClick={changeToSignUp}
            className="underline cursor-pointer text-white"
          >
            Sign in now....
          </span>
        </p>
      ) : (
        <p className=" p-2 my-4 block w-80 text-center text-gray-400">
          New to netflix?{" "}
          <span
            onClick={changeToSignUp}
            className="underline cursor-pointer text-white"
          >
            {" "}
            Sign Up Now...
          </span>
        </p>
      )}
    </div>
  );
};

export default SignUpForm;
