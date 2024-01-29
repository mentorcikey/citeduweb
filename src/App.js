import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { FaPhone } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Shake } from 'reshake'

import "./App.css"
import ZaloIcon from "./assets/images/zaloIcon.png"
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CoursePage from './pages/course/index.js';

const App = () => {
  const { scrollYProgress } = useScroll();
  const [isArrowIconSticky, setIsArrowIconSticky] = useState(false);

  const handleIconPhoneClick = () => {
    window.location.href = `tel:${+84345298170}`;
  };


  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsArrowIconSticky(scrollPosition > 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isShaking, setShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Bật hiệu ứng rung sau 5 giây
      setShaking(true);

      // Sau 1 giây, tắt hiệu ứng rung
      setTimeout(() => {
        setShaking(false);
      }, 1000);
    }, 6000); // 5 giây + 1 giây nghỉ

    // Cleanup interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      {
        isArrowIconSticky ?
          <div onClick={scrollTop} className='arrow-icon'><IoIosArrowDropupCircle /></div> : ""
      }
      <div className='contact-container'>
        <Shake
          h={12}
          v={5}
          r={3}
          dur={510}
          int={10}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}>
          <div>
            <FaPhone className="phone-icon" onClick={handleIconPhoneClick} />
            <span>Gọi ngay</span>
          </div>
        </Shake>
        <Shake
          h={12}
          v={5}
          r={3}
          dur={510}
          int={10}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}>
          <div>
            <a href="https://zalo.me/3631761188736786993"><img className="zalo-icon" src={ZaloIcon} alt="ZaloIcon" /></a>
            <span>Chat ngay</span>
          </div>
        </Shake>
      </div>
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
