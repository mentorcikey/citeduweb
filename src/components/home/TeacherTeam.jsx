import React, { useEffect } from 'react'
import { PiCertificate } from "react-icons/pi";
import Aos from "aos"
import "aos/dist/aos.css"

import "../../styles/home/teacherTeam.css"
import Teacher from "../../assets/images/teacher.jpg"

function TeacherTeam() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='teacherTeam-container'>
            <img data-aos="fade-up-right" src={Teacher} alt="Teacher" />
            <div data-aos="fade-up-left" className='teacherTeam-content'>
                <h1>"Nhân tố đặc biệt giúp bạn từ con số 0 trở thành FullStack Developer"</h1>
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
        </section>
    )
}

export default TeacherTeam