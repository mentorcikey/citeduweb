import React, { useState } from 'react'
import "../../styles/home/trainingPhilosophy.css"

import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Participants1 from "../../assets/images/participants1.png"
import Participants2 from "../../assets/images/participants2.png"
import Participants3 from "../../assets/images/participants3.png"
import Participants4 from "../../assets/images/participants3.png"

function TrainingPhilosophy() {

    const trainingPhilosophy = [
        {
            imagePath: Participants1,
            titlePhilosophy: "Bứt phá",
            contentPhilosophy: "Chương trình đào tạo được thiết kế riêng cho người Việt. Trong đó, sự tiến bộ của các bạn được theo dõi, đánh giá và đưa ra đề xuất để cải thiện theo từng giai đoạn."
        },
        {
            imagePath: Participants2,
            titlePhilosophy: "Học đi đôi với 'hành'",
            contentPhilosophy: "Sau khi hoàn thành, học viên không chỉ đạt đến một trình độ IELTS nhất định, mà có khả năng ứng dụng tiếng Anh trôi chảy trong cuộc sống. Nhiều học viên không chỉ đạt band mà còn có khả năng đọc tài liệu tốt hơn khi làm bài nghiên cứu ở trường đại học, tự tin hơn khi giao tiếp, thuyết trình, viết email bằng tiếng Anh. Việc này nhờ vào phương pháp dạy học để nâng cao trình độ tiếng Anh thực chất, chứ không phải chỉ học tip/mẹo để luyện thi."
        },
        {
            imagePath: Participants3,
            titlePhilosophy: "Tự học chủ động",
            contentPhilosophy: "TIW khuyến khích học viên chủ động tìm kiếm và ‘khai phá’ các mảng kiến thức mới, từ đó giúp học viên có thể ghi nhớ và có khả năng áp dụng kiến thức lâu hơn. Giảng viên và trợ giảng của trung tâm đóng vai trò là người hướng dẫn, dẫn dắt cho các bạn trên hành trình chinh phục IELTS của chính mình."
        },
        {
            imagePath: Participants4,
            titlePhilosophy: "Đồng hành",
            contentPhilosophy: "Không đơn thuần dừng lại ở cung cấp một khóa học luyện thi, The IELTS Workshop khao khát có thể tạo ra một cộng đồng người trẻ nhiệt huyết, tích cực, chia sẻ và hỗ trợ nhau trong học tập và sự nghiệp. Trong nhiều năm qua, TIW đã tạo dựng các Series bài giảng học thuật, Podcast, tổ chức nhiều chuỗi sự kiện gây tiếng vang như Workshop IELTS101, IELTS EXPO, Cuộc thi hùng biện Speak Yourself,… Tất cả đều miễn phí."
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionOpen = (index) => {
        setIndexImg(index)
        setActiveIndex((prevIndex) => {
            return prevIndex === index ? -1 : index
        });
    };

    const [indexImg, setIndexImg] = useState(0)

    console.log(indexImg)


    return (
        <div className='trainingPhilosophy-container'>
            <h1>Triết lý đào tạo</h1>
            <div className='trainingPhilosophy-content'>
                <div className='trainingPhilosophy-image'>
                    {trainingPhilosophy.map((item, index) => (
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
                <div className='trainingPhilosophy-accordion'>
                    {trainingPhilosophy.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={index === activeIndex ? true : false}
                            onChange={() => handleAccordionOpen(index)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`"panel${index}-content"`}
                                id={`"panel${index}-header"`}
                            >
                                {item.titlePhilosophy}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.contentPhilosophy}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default TrainingPhilosophy
