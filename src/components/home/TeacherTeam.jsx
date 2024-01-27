import React from 'react'
import "../../styles/home/teacherTeam.css"
import Teacher from "../../assets/images/Teacher.jpg"
import { PiCertificate } from "react-icons/pi";

function TeacherTeam() {
    return (
        <div className='teacherTeam-container'>
            <h1>Nhân tố đặc biệt giúp bạn nâng cao hiệu quả học tập</h1>
            <div className='teacherTeam-slider' >
                <div className='teacherTeam-slider-item'>
                    <img src={Teacher} alt="Teacher" />
                    <h3>Tống Văn Chính</h3>
                </div>
            </div>
            <div className='teacherTeam-teacher'>
                <img src={Teacher} alt="Teacher" />
                <div>
                    <h3>Tống Văn Chính</h3>
                    <p>Giáo viên / Mentor khoá FULLSTACK</p>
                    <ul>
                        <li><PiCertificate /><span> Founder & CEO của CIT Education</span></li>
                        <li><PiCertificate /><span> Hơn 3 năm kinh nghiệm làm FullStack Developer</span></li>
                        <li><PiCertificate /><span> Đi thực tập từ năm nhất đại học</span></li>
                        <li><PiCertificate /><span> Hơn 2 năm kinh nghiệm giảng dạy về lập trình Web</span></li>
                        <li><PiCertificate /><span>Sở hữu kênh tik tok cá nhân hơn 30k theo dõi</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TeacherTeam