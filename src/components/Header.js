import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user= useSelector(store=> store.user)

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                navigate("/error")
            });
    };
    return (
        <div>
            <div className=" flex justify-between items-center w-full  bg-gradient-to-b from-black">
                <img
                    className="w-56  m-2 "
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="Logo"
                />
                <div className="flex items-center p-2">
                    <img
                        className=" w-16  m-2  "
                        src={user?.photoURL}
                        alt=""
                    />
                    <span
                        onClick={handleSignOut}
                        className="font-bold text-white cursor-pointer"
                    >
                        (Sign Out)
                       
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header