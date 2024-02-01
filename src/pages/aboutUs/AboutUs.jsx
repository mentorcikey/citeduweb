import React, { useState } from 'react'
import Slider from "react-slick";
import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdVpnKey } from "react-icons/md";

import "./index.css"
import AboutUsImage from "../../assets/images/trainingPhilosophyImage2.png"
import TrainingPhilosophyImage1 from "../../assets/images/trainingPhilosophyImage1.png"
import TrainingPhilosophyImage2 from "../../assets/images/trainingPhilosophyImage2.png"
import TrainingPhilosophyImage3 from "../../assets/images/trainingPhilosophyImage3.png"
import TrainingPhilosophyImage4 from "../../assets/images/trainingPhilosophyImage4.png"
import FrequentlyAskedQuestions from "../../components/course/FrequentlyAskedQuestions"

const coreValues = [
    {
        imagePath: TrainingPhilosophyImage1,
        title: "Bứt Phá",
        icon: <MdVpnKey />,
        content: "Với lộ trình đào tạo được tinh gọn và được sắp xếp bài bản theo từng buổi học, từng module nhỏ sẽ giúp học viên tiếp thu kiến thức một cách thuận lợi và bứt phá khả năng coding của học viên tiến bộ từng ngày"
    },
    {
        imagePath: TrainingPhilosophyImage2,
        title: "Học Đi Đôi với 'Hành'",
        icon: <MdVpnKey />,
        content: "Đối với mảng lập trình thì chỉ học lý thuyết thôi là chưa đủ để học viên tiếp thu và hiểu hết được những kiến thức lý thuyết khô khan, chính vì thế mà trong chương trình đào tạo của CIT Education luôn luôn có những buổi thực hành, bài tập, dự án sau những buổi học lý thuyết để giúp học viên hiểu rõ được toàn bộ kiến thức được dạy"
    },
    {
        imagePath: TrainingPhilosophyImage3,
        title: "Tự Học Chủ Động",
        icon: <MdVpnKey />,
        content: "Một trong những tính chất để trở thành lập trình viên xịn là phải có kỹ năng tự học, tự update kiến thức hàng ngày chính vì thế từ những ngày đầu đi học CIT Education đã định hướng cho học viên những kỹ năng trên để giúp con đường phát triển sự nghiệp trong ngành IT của học viên thuận lợi nhất"
    },
    {
        imagePath: TrainingPhilosophyImage4,
        title: "Đồng Hành",
        icon: <MdVpnKey />,
        content: "Các giảng viên tại CIT Education không chỉ đồng hành cùng học viên trong thời gian đào tạo của khoá học mà học viên đăng ký tại trung tâm mà còn đồng hành với học viên cả khi học viên đi thực tập và đi làm, miễn là bất cứ khi nào học viên cần thì giảng viên tại CIT Education luôn sẵn lòng để hỗ trợ"
    }
];

const outstandingMarks = [
    {
        imagePath: TrainingPhilosophyImage1,
        title: "Traning 1-1",
        content: "Với lộ trình đào tạo được tinh gọn và được sắp xếp bài bản theo từng buổi học, từng module nhỏ sẽ giúp học viên tiếp thu kiến thức một cách thuận lợi và bứt phá khả năng coding của học viên tiến bộ từng ngày"
    },
    {
        imagePath: TrainingPhilosophyImage1,
        title: "Traning 1-1",
        content: "Với lộ trình đào tạo được tinh gọn và được sắp xếp bài bản theo từng buổi học, từng module nhỏ sẽ giúp học viên tiếp thu kiến thức một cách thuận lợi và bứt phá khả năng coding của học viên tiến bộ từng ngày"
    },
    {
        imagePath: TrainingPhilosophyImage1,
        title: "Traning 1-1",
        content: "Với lộ trình đào tạo được tinh gọn và được sắp xếp bài bản theo từng buổi học, từng module nhỏ sẽ giúp học viên tiếp thu kiến thức một cách thuận lợi và bứt phá khả năng coding của học viên tiến bộ từng ngày"
    },
    {
        imagePath: TrainingPhilosophyImage1,
        title: "Traning 1-1",
        content: "Với lộ trình đào tạo được tinh gọn và được sắp xếp bài bản theo từng buổi học, từng module nhỏ sẽ giúp học viên tiếp thu kiến thức một cách thuận lợi và bứt phá khả năng coding của học viên tiến bộ từng ngày"
    }
];

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}

function AboutUs() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [indexImg, setIndexImg] = useState(0)

    const handleAccordionOpen = (index) => {
        setIndexImg(index)
        setActiveIndex((prevIndex) => {
            return prevIndex === index ? -1 : index
        });
    };


    return (
        <div className="aboutUs-container">
            <div className='aboutUs-ourStory'>
                <h1>Câu chuyện của chúng tôi</h1>
                <div className='aboutUs-ourStory-content'>
                    <div><p>Tại CIT Education, chúng tôi tận tâm thực hiện sứ mệnh cung cấp các khóa học chất lượng cao với mức giá hợp lý, nhằm hỗ trợ bạn phát triển sự nghiệp trong lĩnh vực Công nghệ Thông tin (IT). Chúng tôi tự hào là một trung tâm đào tạo hàng đầu, luôn cam kết mang lại những trải nghiệm học tập đáng nhớ và giá trị thực sự cho học viên</p>
                        <p>Tại CIT Education, chúng tôi tận tâm thực hiện sứ mệnh cung cấp các khóa học chất lượng cao với mức giá hợp lý, nhằm hỗ trợ bạn phát triển sự nghiệp trong lĩnh vực Công nghệ Thông tin (IT). Chúng tôi tự hào là một trung tâm đào tạo hàng đầu, luôn cam kết mang lại những trải nghiệm học tập đáng nhớ và giá trị thực sự cho học viên</p></div>
                    <img src={AboutUsImage} alt="AboutUsImage" />
                </div>
            </div>
            <div className='aboutUs-missionVision'>
                <div className='aboutUs-mission'>
                    <img src={AboutUsImage} alt="AboutUsImage" />
                    <div className='aboutUs-mission-content'>
                        <h1>Sứ mệnh</h1>
                        <p>Tạo ra những "silicon valley" thu nhỏ khắp mọi nơi trên đất nước Việt Nam, nuôi dưỡng và kết nối những thế hệ chuyên gia công nghệ, nhà sáng lập các công ty khởi nghiệp để tạo nên 1 thế giới tốt đẹp hơn</p>
                    </div>
                </div>
                <div className='aboutUs-vision'>
                    <div className='aboutUs-vision-content'>
                        <h1>Tầm nhìn</h1>
                        <p>Tạo nên một thế giới trong đó mỗi cá nhân có khả năng tận dụng công nghệ để phát triển bản thân và đóng góp vào sự tiến bộ của xã hội</p>
                    </div>
                    <img src={AboutUsImage} alt="AboutUsImage" />
                </div>
            </div>
            <div className='aboutUs-coreValues'>
                <h1>Giá trị cốt lõi</h1>
                <div className='aboutUs-coreValues-content'>
                    <div className='aboutUs-coreValues-image'>
                        {coreValues.map((item, index) => (
                            <img
                                key={index}
                                src={item.imagePath}
                                className={`img${index + 1}`}
                                alt={`img ${index + 1}`}
                                style={{
                                    transition: 'all 0.3s',
                                    opacity: activeIndex === index || indexImg === index ? 1 : 0,
                                    display: activeIndex === index || indexImg === index ? 'block' : 'none',
                                }}
                            />
                        ))}
                    </div>
                    <div className='aboutUs-coreValues-accordion'>
                        {coreValues.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={index === activeIndex ? true : false}
                                onChange={() => handleAccordionOpen(index)}
                                style={{
                                    boxShadow: activeIndex === index ? "1px 3px 10px rgba(0, 0, 0, 0.3)" : ""
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`"panel${index}-content"`}
                                    id={`"panel${index}-header"`}
                                    style={{
                                        color: activeIndex === index ? "#1F409A" : "",
                                    }}
                                >
                                    <span>  {item.icon}</span>
                                    <span>  {item.title}</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.content}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
            <div className='aboutUs-outstandingMarks'>
                <h1 className='aboutUs-outstandingMarks-title'>Những dấu ấn nổi bật</h1>
                <Slider {...settings} className='aboutUs-outstandingMarks-content'>
                    {
                        outstandingMarks.map((item, index) => (
                            <>
                                <img src={item.imagePath} alt="outstandingMarksImage" />
                                <div className='aboutUs-outstandingMarks-slideContent'>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            </>
                        ))
                    }
                </Slider>
            </div>
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default AboutUs