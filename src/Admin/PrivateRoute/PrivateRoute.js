import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { UserContaxt } from "../../App";
import { auth } from "../SineUp/firebaseConfig";
import SineUp from "../SineUp/SineUp";


const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setloggedInUser] = useContext(UserContaxt);


  const location = useLocation();
 

  if (!loggedInUser.email) {
   
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;

}

 


export default PrivateRoute;
