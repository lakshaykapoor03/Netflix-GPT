import React from "react";
import SignUpPage from "./SignUpPage";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
 
  return (
    <div className="relative">
      <SignUpPage />
    </div>
  );
};

export default Body;
