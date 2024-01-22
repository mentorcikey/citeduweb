// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../../styles/home/header.css';
import Logo from "../../assets/images/logo.png"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className={showMenu ? 'show' : ''}>
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/">Về chúng tôi</Link></li>
                    <li><Link to="/">Khoá học</Link></li>
                    <li><Link to="/">Feedback</Link></li>
                    <li><Link to="/">Giảng viên</Link></li>
                    <li><Link to="/">Liên hệ</Link></li>
                </ul>
            </nav>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <FaBars size={30} />
            </div>
        </header>
    );
}

export default Header;