import React from 'react'
import "../../styles/home/teacherTeam.css"
import Teacher from "../../assets/images/Teacher.jpg"
import { PiCertificate } from "react-icons/pi";

function TeacherTeam() {
    return (
        <div className='teacherTeam-container'>
            <h1>Đội ngũ giáo viên</h1>
            <div className='teacherTeam-slider' >
                <div className='teacherTeam-slider-item'>
                    <img src={Teacher} alt="Teacher" />
                    <h3>Tống Văn Chính</h3>
                </div>
                <div className='teacherTeam-slider-item'>
                    <img src={Teacher} alt="Teacher" />
                    <h3>Nguyễn Quốc Huy</h3>
                </div>
            </div>
            <div className='teacherTeam-teacher'>
                <img src={Teacher} alt="Teacher" />
                <div>
                    <h3>Tống Văn Chính</h3>
                    <p>Giáo viên khoá FULLSTACK</p>
                    <ul>
                        <li><PiCertificate /><span> Founder & CEO của CIT Education</span></li>
                        <li><PiCertificate /><span> Full-stack Developer</span></li>
                        <li><PiCertificate /><span> Kinh nghiệm đi làm Web Developer từ năm nhất đại học</span></li>
                        <li><PiCertificate /><span> + 2 năm kinh nghiệm giảng dạy về lập trình Web</span></li>
                        <li><PiCertificate /><span>Sở hữu kênh tik tok cá nhân hơn 30k theo dõi</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TeacherTeam