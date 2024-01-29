import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Slider from "react-slick";
import { FaBookOpen } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

import "../../styles/home/latestCourse.css"
import CourseImage from "../../assets/images/banner.png"

const lastestCourses = [
    {
        nameCourse: 'Khoá học lập trình Web FullStack',
        imageUrl: CourseImage,
    },
    {
        nameCourse: 'Khoá học lập trình Web Front-end',
        imageUrl: CourseImage,
    }, {
        nameCourse: 'Khoá học lập trình Web Back-end',
        imageUrl: CourseImage,
    }, {
        nameCourse: 'Khoá học lập trình Web',
        imageUrl: CourseImage,
    },
];

function LatestCourse() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
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

    useEffect(() => {
        Aos.init()
    })



    return (
        <div className='latestCourse-container'>
            <h1>Những khoá học mới nhất</h1>
            <Slider {...settings} className='latestCourse-slider'>
                {
                    lastestCourses.map((item, index) => (
                        <div key={index} className='latestCourse-slide' data-aos="zoom-in">
                            <div className='latestCourse-slide-img'>
                                <img src={item.imageUrl} alt="Banner" />
                            </div>
                            <h1>{item.nameCourse}</h1>
                            <div className='latestCourse-slide-content'>
                                <button><span>Xem chi tiết </span><FaArrowRightToBracket /></button>
                                <div className='latestCourse-slide-courseInfo'>
                                    <div>
                                        <FaBookOpen />
                                        <p>93 Bài học</p>
                                    </div>
                                    <div>
                                        <IoMdTime />
                                        <p>192 giờ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default LatestCourse