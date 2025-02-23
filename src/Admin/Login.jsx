// src/Login.js
import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from '../../firebase';

function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Save user info in state
      console.log(user);
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL} alt="profile" />
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default Login;
