import React from 'react';
import '../styles/home/footer.css';

import FacebookIcon from "../assets/images/icons8-facebook-48.png"
import TiktokIcon from "../assets/images/icons8-tiktok-50.png"
import YoutubeIcon from "../assets/images/icons8-youtube-48.png"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-content-item1">
                    <p><FaPhoneAlt /><span>Điện thoại: 032962710</span></p>
                    <p><MdEmail /><span>contact.citedu@gmail.com</span></p>
                    <p><IoLocationSharp /><span>Số 18, KTT nhà hát chèo Việt Nam, 169 Doãn Kế Thiện, Mai Dịch, Cầu Giấy, Hà Nội</span></p>
                </div>
                <div className="footer-content-item2">
                    <h1>Về CIT Education</h1>
                    <ul>
                        <li>Về chúng tôi</li>
                        <li>Tra cứu địa chỉ lớp OFF</li>
                    </ul>
                </div>
                <div className="footer-content-item3">
                    <h1>Lộ trình học</h1>
                    <ul>
                        <li>Dành cho người mới bắt đầu</li>
                        <li>Dành cho người đã có nền tảng</li>
                    </ul>
                </div>
                <div className="footer-content-item4">
                    <h1>TRUNG TÂM GIÁO DỤC CÔNG NGHỆ CIT EDUCATION</h1>
                    <p>"Với sứ mệnh mang đến những nguồn kiến thức chuẩn chỉnh, bài bản, chất lượng để chắp cánh cho khát vọng, tương lai của các bạn trẻ học sinh, sinh viên Việt Nam trong ngành CNTT chúng tôi cam kết rằng sẽ mang đến những khoá học chất lượng với học phí phải chăng để bất kì đối tượng nào cũng có thể tham gia và tiếp cận với ngành CNTT"</p>
                    <p>Anh Tống Văn Chính - CEO CIT Education</p>
                </div>
            </div>
            <div className="copyright-area">
                <div className="copyright-text">
                    <p>&copy; 2024 By CIT Education - All rights reserved.</p>
                </div>
                <ul className="footer-social-icon">
                    <li><a href="#home"><img src={FacebookIcon} alt="FacebookIcon" /></a></li>
                    <li><a href="#home"><img src={TiktokIcon} alt="TiktokIcon" /></a></li>
                    <li><a href="#home"><img src={YoutubeIcon} alt="YoutubeIcon" /></a></li>
                </ul>
            </div>
        </footer >
    );
}

export default Footer;
