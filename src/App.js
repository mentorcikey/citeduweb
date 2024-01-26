import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import "./App.css"
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
