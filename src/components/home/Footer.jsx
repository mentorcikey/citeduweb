// src/components/Footer.js
import React from 'react';
import '../../styles/home/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Liên hệ</h3>
                    <p>Email: info@example.com</p>
                    <p>Điện thoại: 123-456-7890</p>
                    <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
                </div>
                <div className="social-media">
                    <h3>Mạng xã hội</h3>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Trung tâm lập trình. Bản quyền được bảo lưu.</p>
            </div>
        </footer>
    );
}

export default Footer;
