import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
  
}

export default App;
