import React from 'react'

import "../../styles/home/latestCourse.css"
import Slider from "react-slick";
import { FaBookOpen } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

import Banner from "../../assets/images/banner.png"

function LatestCourse() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1024,
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

    return (
        <div className='latestCourse-container'>
            <h1>Những khoá học mới nhất</h1>
            <Slider {...settings} className='latestCourse-slider'>
                <div className='latestCourse-slide'>
                    <div className='latestCourse-slide-img'>
                        <img src={Banner} alt="Banner" />
                    </div>
                    <h1>Khoá học lập trình Web FullStack</h1>
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
                <div className='latestCourse-slide'>
                    <div className='latestCourse-slide-img'>
                        <img src={Banner} alt="Banner" />
                    </div>
                    <h1>Khoá học lập trình Web Font-end</h1>
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
                <div className='latestCourse-slide'>
                    <div className='latestCourse-slide-img'>
                        <img src={Banner} alt="Banner" />
                    </div>
                    <h1>Khoá học lập trình Web Font-end</h1>
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
                <div className='latestCourse-slide'>
                    <div className='latestCourse-slide-img'>
                        <img src={Banner} alt="Banner" />
                    </div>
                    <h1>Khoá học lập trình Web Back-end</h1>
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
            </Slider>
        </div>
    )
}

export default LatestCourse