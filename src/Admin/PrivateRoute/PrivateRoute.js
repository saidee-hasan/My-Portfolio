import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { UserContaxt } from "../../App";


const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setloggedInUser] = useContext(UserContaxt);

  const location = useLocation();

  if (!loggedInUser.email) {
   
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;

}

 


export default PrivateRoute;
