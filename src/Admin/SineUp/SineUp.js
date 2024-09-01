import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig, { auth, db } from "./firebaseConfig";
import { UserContaxt } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { Token } from "@mui/icons-material";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "../../components/Navbar";
    firebase.initializeApp(firebaseConfig);

const SineUp = () => {



  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  const [LoginUser,setLoginUser] = useContext(UserContaxt);
  const [user,setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      const { name, email, picture } = user;
     
    const users = {
      isSignedIn: true,
      name: name,
      email: email,
      picture: picture,
    };
      setLoginUser(users)
      setUser(users)
     const admin = "mdsaideehasan@gmail.com"
      if(users.email == admin){
        navigate(from, { replace: true });
      }
     
    })
  })
  

  console.log(user)

   


 

  const googleprovider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {


    firebase.auth()
  .signInWithPopup(googleprovider)
  .then( async(result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const { name, email, picture } = result.additionalUserInfo.profile;
    const user = result.user;

    console.log(user)
    if(user){
      await setDoc(doc(db,"Users",user.uid),{
        isSignedIn: true,
        email:result.additionalUserInfo.profile.email ,

      })
  
    }

 
    const signInUser = {
      isSignedIn: true,
      name: name,
      email: email,
      picture: picture,
    };

  
    const admin = "mdsaideehasan@gmail.com"
    if(email === admin){
      setLoginUser(signInUser);
      navigate(from, { replace: true });
      storeAuthToken()
    
    }else{
      console.log("is not a admin")
    }
    
  }).catch((error) => {
    // Handle Errors here.
   
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    
    // ...
  });
    console.log("ssi")
  
  };

const storeAuthToken = () =>{
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  .then(function(idToken) {
    sessionStorage.setItem('token',idToken)
    console.log(idToken)
  }).catch(function(error) {
    // Handle error
  });
}
useEffect(() =>{
  fetch('http://localhost:5000/isAdmin',{
      method: "GET",
      headers: { "Content-Type": "application/json",
        authorization:`Bearer ${sessionStorage.getItem('token')}`
       },
     

  })
  .then(res => res.json())
  .then(data =>setLoginUser(data) )

},[]);


  return <div>
   
    <button  onClick={handleGoogle}>Sine In </button>
  </div>;
};

export default SineUp;

