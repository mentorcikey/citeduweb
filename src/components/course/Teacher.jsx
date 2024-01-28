import React from 'react'

import "../../styles/course/teacher.css"
import TeacherImage from "../../assets/images/Teacher.jpg"
import { PiCertificate } from "react-icons/pi";

function Teacher() {
    return (
        <div className='teacher-container'>
            <img src={TeacherImage} alt="TeacherImage" />
            <div>
                <h3>Tống Văn Chính</h3>
                <p>Giảng viên / Mentor khoá FULLSTACK</p>
                <ul>
                    <li><PiCertificate /><span> Founder & CEO của CIT Education</span></li>
                    <li><PiCertificate /><span> Hơn 3 năm kinh nghiệm làm FullStack Developer</span></li>
                    <li><PiCertificate /><span> Đi thực tập từ năm nhất đại học</span></li>
                    <li><PiCertificate /><span> Hơn 2 năm kinh nghiệm giảng dạy về lập trình Web</span></li>
                    <li><PiCertificate /><span>Sở hữu kênh tik tok cá nhân hơn 30k theo dõi</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Teacher