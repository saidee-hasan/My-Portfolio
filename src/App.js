import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./Admin/Login.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="">
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/login" element={<Login/>}/>
         
        </Routes>
      </Router>
       
      
      
    </ThemeProvider></div>
  );
}

export default App;
