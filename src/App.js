import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import "./App.css"
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CoursePage from './pages/course/index.js';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
