import React, { useContext, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContaxt } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
firebase.initializeApp(firebaseConfig);

const SineUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  const [LoginUser,setLoginUser] = useContext(UserContaxt);
  console.log(LoginUser)

  const googleprovider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {
    firebase.auth()
  .signInWithPopup(googleprovider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const { name, email, picture } = result.additionalUserInfo.profile;

    const signInUser = {
      isSignedIn: true,
      name: name,
      email: email,
      picture: picture,
    };
    setLoginUser(signInUser);
    console.log(name, email, picture);
    navigate(from, { replace: true });
  }).catch((error) => {
    // Handle Errors here.
   
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    
    // ...
  });
    console.log("ssi")
  
  };
  return <div>
   
    <button  onClick={handleGoogle}>Sine In </button>
  </div>;
};

export default SineUp;
