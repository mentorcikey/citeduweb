import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import "../../styles/home/suitableObject.css"
import SuitableObjectImage from "../../assets/images/suitableObject.png"

function SuitableObject() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='suitableObject-container'>
            <img data-aos="zoom-in-right" src={SuitableObjectImage} alt="CourseAdvantagesImage" />
            <div data-aos="zoom-in-left" className='suitableObject-content'>
                <h1>Nếu bạn đang ...</h1>
                <ul className='suitableObject-list'>
                    <li><span>Tìm kiếm cơ hội mới trong ngành công nghệ thông tin </span> và muốn bắt đầu một hành trình đầy thú vị
                    </li>
                    <li><span>Hướng tới việc thực tập sớm</span> tại các công ty phần mềm hàng đầu để có trải nghiệm thực tế và xây dựng mạng lưới chuyên nghiệp từ khi còn là sinh viên
                    </li>
                    <li>Khát khao có mức <span>thu nhập ấn tượng</span>
                    </li>
                    <li><span>Quyết định đổi ngành</span> và muốn học lập trình để mở rộng cơ hội nghề nghiệp
                    </li>
                    <li>Đang học đại học và muốn <span>nâng cao kỹ năng lập trình một cách thuận lợi</span> và hiệu quả để phục vụ việc học trên trường
                    </li>
                </ul>
                <h2>Thì chắc chắn khoá học FullStack là dành cho bạn</h2>
                <div className='suitableObject-button'>
                    <button><a href="https://docs.google.com/spreadsheets/d/1XT4zrZMdqv1_jIq_urBNmH2WTW6SsgJXKaKYfheLU9c/edit?usp=sharing" target='blank'>Xem lộ trình</a></button>
                    <button><a href="#consultationForm">Đăng kí tư vấn miễn phí</a></button>
                </div>
            </div>
        </section>
    )
}

export default SuitableObject