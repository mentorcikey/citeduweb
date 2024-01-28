import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/home/courseSlider.css'; // Tạo một file CSS để thiết kế slider của bạn
import BannerSlider from "../../assets/images/bannerSlider.png"

const courses = [
    {
        title: 'Trở thành lập trình viên FullStack trong vòng 8 tháng',
        description: 'Học trực tuyến cùng giang viên hướng dẫn riêng cho từng học viên với giáo trình thực chiến giúp bạn phát triển sự nghiệp trong ngành Tech với mức lương khởi điểm từ 12.000.000đ        ',
        imageUrl: BannerSlider,
    }
];

const CourseSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <Slider {...settings}>
            {courses.map((course, index) => (
                <div key={index} className="course-slide">
                    <div className="course-info">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button>Nhận tư vấn</button>
                    </div>
                    <div className="course-image">
                        <img src={course.imageUrl} alt={`Khoá học ${index + 1}`} />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CourseSlider;
