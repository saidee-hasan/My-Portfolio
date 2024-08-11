import React, { useContext, useEffect, useState } from 'react';
import { UserContaxt } from '../../App';

const Dashboard = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContaxt);
    const [isAdmin, setAdmin] = useState();
    useEffect(() =>{
        fetch('http://localhost:5000//isDoctor',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
             body: JSON.stringify({email : loggedInUser.email}),
  
        })
        .then(res => res.json())
        .then(data =>setAdmin(data) )
  
    },[]);

const [doctor ,setDoctor] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/appointments',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
             body: JSON.stringify({email : loggedInUser.email}),
  
        })
        .then(res => res.json())
        .then(data =>setDoctor(data) )
  
    },[]);









    
    return (
        <div>


{   isAdmin &&   <h1>Is admin</h1>  }
         
          <h1>Is Not admin</h1>
        </div>
    );
};

export default Dashboard;