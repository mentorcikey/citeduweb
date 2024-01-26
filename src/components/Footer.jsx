import React from 'react';
import '../styles/home/footer.css';

import Logo from "../assets/images/logo.png"
import FacebookIcon from "../assets/images/icons8-facebook-48.png"
import TiktokIcon from "../assets/images/icons8-tiktok-50.png"
import YoutubeIcon from "../assets/images/icons8-youtube-48.png"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";



const Footer = () => {
    return (
        <footer class="footer-section">
            <div class="header-container">
                <div class="footer-cta">

                    <div class="single-cta">
                        <IoLocationSharp />
                        <div class="cta-text">
                            <h4>Trụ sở</h4>
                            <span>Số 18, KTT nhà hát chèo Việt Nam, 169 Doãn Kế Thiện, Mai Dịch, Cầu Giấy, Hà Nội
                            </span>
                        </div>
                    </div>

                    <div class="single-cta">
                        <FaPhoneAlt />
                        <div class="cta-text">
                            <h4>Liên hệ tư vấn</h4>
                            <span>0329621710</span>
                        </div>
                    </div>

                    <div class="single-cta">
                        <MdEmail />
                        <div class="cta-text">
                            <h4>Email liên hệ</h4>
                            <span>contact.citedu@gmail.com</span>
                        </div>
                    </div>

                </div>
                <div class="footer-content">

                    <div class="footer-widget">
                        <div class="footer-logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div class="footer-text">
                            <p>Với sứ mệnh mang đến những nguồn kiến thức chuẩn chỉnh, bài bản, chất lượng để chắp cánh cho khát vọng, tương lai của các bạn trẻ học sinh, sinh viên Việt Nam trong ngành CNTT chúng tôi cam kết rằng sẽ mang đến những khoá học chất lượng với học phí phải chăng để bất kì đối tượng nào cũng có thể tham gia và tiếp cận với ngành CNTT
                            </p>
                        </div>
                        <div class="footer-social-icon">
                            <span>Theo dõi chúng tôi</span>
                            <div>
                                <a href="#"><img src={FacebookIcon} alt="FacebookIcon" /></a>
                                <a href="#"><img src={TiktokIcon} alt="TiktokIcon" /></a>
                                <a href="#"><img src={YoutubeIcon} alt="YoutubeIcon" /></a>
                            </div>
                        </div>
                    </div>

                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Về CIT Education</h3>
                        </div>
                        <ul>
                            <div>
                                <li><a href="#">Trang trủ</a></li>
                                <li><a href="#">Về chúng tôi</a></li>
                                <li><a href="#">Khoá học</a></li>
                                <li><a href="#">Feedback học viên</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </div>
                            <div>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </div>
                        </ul>
                    </div>

                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Nhận thông báo về khoá học</h3>
                        </div>
                        <div class="footer-text">
                            <p>Đăng kí email của bạn để nhận được thông báo sớm nhất về các chương trình đào tạo của chúng tôi</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address" />
                                <button><FaTelegramPlane /></button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div class="copyright-area">
                <div class="copyright-text">
                    <p>Copyright &copy; 2023, All Right Reserved <a href="">CIT Education</a></p>
                </div>
                <div class="footer-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
