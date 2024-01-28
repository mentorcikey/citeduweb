import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";

import "./App.css"
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CoursePage from './pages/course/index.js';

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className='container'>
      <motion.div
        className="progress-bar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ scaleX: scrollYProgress }}
      />
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
