import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from "./Admin/Admin.js";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="">
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </Router>
       
      
      
    </ThemeProvider></div>
  );
}

export default App;
