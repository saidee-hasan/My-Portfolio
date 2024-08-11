import { ThemeProvider } from "styled-components";
import { useState, useEffect, createContext } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from "./Admin/Admin.js";
import PrivateRoute from "./Admin/PrivateRoute/PrivateRoute.js";
import Dashboard from "./Admin/Dashboard/Dashboard.js";
export const UserContaxt = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loggedInUser, setloggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContaxt.Provider value={[loggedInUser, setloggedInUser]}>

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
       
      
      
    </ThemeProvider>
    </UserContaxt.Provider>
  );
}

export default App;
