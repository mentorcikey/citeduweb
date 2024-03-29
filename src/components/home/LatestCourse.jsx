import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Slider from "react-slick";
import { FaBookOpen } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import "../../styles/home/latestCourse.css"
import LastestCoursesImage1 from "../../assets/images/lastestCourses1.png"
import LastestCoursesImage2 from "../../assets/images/lastestCourses2.png"
import LastestCoursesImage3 from "../../assets/images/lastestCourses3.png"

const lastestCourses = [
    {
        nameCourse: 'Khoá học lập trình Web FullStack',
        imageUrl: LastestCoursesImage1,
        courses: 120,
        time: 192
    },
    {
        nameCourse: 'Khoá học lập trình Web Front-end',
        imageUrl: LastestCoursesImage2,
        courses: 60,
        time: 98
    }, {
        nameCourse: 'Khoá học lập trình Web Back-end',
        imageUrl: LastestCoursesImage3,
        courses: 60,
        time: 98
    }
];

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function LatestCourse() {

    const navigate = useNavigate()

    useEffect(() => {
        Aos.init()
    })

    const handleNavLink = () => {
        navigate("/course")
    }

    return (
        <section className='latestCourse-container'>
            <h1>Những khoá học mới nhất</h1>
            <Slider {...settings} className='latestCourse-slider'>
                {
                    lastestCourses.map((item, index) => (
                        <div key={index} onClick={handleNavLink} className='latestCourse-slide' data-aos="zoom-in">
                            <div className='latestCourse-slide-img'>
                                <img src={item.imageUrl} alt="Banner" />
                            </div>
                            <h1>{item.nameCourse}</h1>
                            <div className='latestCourse-slide-content'>
                                <button><span>Xem chi tiết </span><FaArrowRightToBracket /></button>
                                <div className='latestCourse-slide-courseInfo'>
                                    <div>
                                        <FaBookOpen />
                                        <p>{item.courses} Bài học</p>
                                    </div>
                                    <div>
                                        <IoMdTime />
                                        <p>{item.time}giờ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default LatestCourse