// src/components/Header.js
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Backdrop from './home/Backdrop';
import '../styles/home/header.css';

import Logo from "../assets/images/logo.png"

import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className={showSidebar ? 'show' : ''}>
                    <div>
                        <IoClose onClick={closeSidebar} />
                    </div>
                    <ul>
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/about-us">Về chúng tôi</Link></li>
                        <li><Link to="/">Khoá học</Link></li>
                        <li><Link to="/">Feedback</Link></li>
                        <li><Link to="/">Giảng viên</Link></li>
                        <li><Link to="/">Liên hệ</Link></li>
                    </ul>
                </nav>
                <div className="mobile-menu-icon" onClick={openSidebar}>
                    <FaBars size={30} />
                </div>
            </header>
            <Backdrop show={showSidebar} onClick={closeSidebar} />
        </>
    );
}

export default Header;