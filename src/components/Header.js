import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
     
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleLanguageChange=(e)=>{
console.log(e.target.value)
dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe()
  }, []);

  const handleGptSearchClick = ()=>{
dispatch(toggleGptSearchView())
  }
  return (
    
     <div className="bg-black md:bg-transparent flex-col md:flex-row z-10 absolute flex justify-between items-center w-full bg-gradient-to-b from-black">
       
       <img
          className="w-56 mx-auto md:mx-2"
          src={LOGO}
          alt="Logo"
        />
      
         {user && 
        <div className="flex items-center p-2">
          {showGptSearch&&<select name="" id="" className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          
          </select>}
          <button className="px-4 py-2 bg-blue-800 text-white rounded" onClick={handleGptSearchClick}>{showGptSearch?"Homepage":"GPT Search"}</button>
          <img className=" w-16  m-2  " src={user?.photoURL} alt="" />
          <span
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </span>
        </div>
        }
      </div>
    
  );
};

export default Header;
