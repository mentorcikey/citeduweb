import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import Slider from "react-slick";

import "../../styles/home/trendingTechnology.css"

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
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

function TrendingTechnology() {
    return (
        <div className='trendingTechnology-container'>
            <h1>Công nghệ thịnh hành</h1>
            <Slider {...settings} className='trendingTechnology-slider'>
                <div className='trendingTechnology-slide'>
                    <TbBrandJavascript />
                    <p>JavaScript</p>
                </div>
                <div className='trendingTechnology-slide'>
                    <FaReact />
                    <p>ReactJS</p>
                </div>
                <div className='trendingTechnology-slide'>
                    <TbBrandNextjs />
                    <p>NextJS</p>
                </div>
                <div className='trendingTechnology-slide'>
                    <FaNodeJs />
                    <p>NodeJS</p>
                </div>
                <div className='trendingTechnology-slide'>
                    <FaJava />
                    <p>Java</p>
                </div>
                <div className='trendingTechnology-slide'>
                    <DiMongodb />
                    <p>MongoDB</p>
                </div>
            </Slider>
        </div>
    )
}

export default TrendingTechnology