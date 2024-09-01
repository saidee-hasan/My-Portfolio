import React, { useContext, useEffect, useState } from 'react';
import { UserContaxt } from '../../App';
import 'flowbite';


const Dashboard = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContaxt);

    
 

    // useEffect(() =>{
    //     fetch('http://localhost:5000/admin',{
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //          body: JSON.stringify({email : loggedInUser.email}),
  
    //     })
    //     .then(res => res.json())
    //     .then(data =>loggedInUser(data) )
  
    // },[]);








    
    return (
        <div className='text-white text-center'>

Admin DashBoard

        </div>
    );
};

export default Dashboard;