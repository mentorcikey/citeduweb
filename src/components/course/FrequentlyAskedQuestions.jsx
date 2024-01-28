import React, { useState } from 'react'

import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../../styles/course/frequentlyAskedQuestions.css"

function FrequentlyAskedQuestions() {

    const frequentlyAskedQuestions = [
        {
            titleQuestions: "Bứt phá",
            contentQuestions: "Chương trình đào tạo được thiết kế riêng cho người Việt. Trong đó, sự tiến bộ của các bạn được theo dõi, đánh giá và đưa ra đề xuất để cải thiện theo từng giai đoạn."
        },
        {
            titleQuestions: "Học đi đôi với 'hành'",
            contentQuestions: "Sau khi hoàn thành, học viên không chỉ đạt đến một trình độ IELTS nhất định, mà có khả năng ứng dụng tiếng Anh trôi chảy trong cuộc sống. Nhiều học viên không chỉ đạt band mà còn có khả năng đọc tài liệu tốt hơn khi làm bài nghiên cứu ở trường đại học, tự tin hơn khi giao tiếp, thuyết trình, viết email bằng tiếng Anh. Việc này nhờ vào phương pháp dạy học để nâng cao trình độ tiếng Anh thực chất, chứ không phải chỉ học tip/mẹo để luyện thi."
        },
        {
            titleQuestions: "Tự học chủ động",
            contentQuestions: "TIW khuyến khích học viên chủ động tìm kiếm và ‘khai phá’ các mảng kiến thức mới, từ đó giúp học viên có thể ghi nhớ và có khả năng áp dụng kiến thức lâu hơn. Giảng viên và trợ giảng của trung tâm đóng vai trò là người hướng dẫn, dẫn dắt cho các bạn trên hành trình chinh phục IELTS của chính mình."
        },
        {
            titleQuestions: "Đồng hành",
            contentQuestions: "Không đơn thuần dừng lại ở cung cấp một khóa học luyện thi, The IELTS Workshop khao khát có thể tạo ra một cộng đồng người trẻ nhiệt huyết, tích cực, chia sẻ và hỗ trợ nhau trong học tập và sự nghiệp. Trong nhiều năm qua, TIW đã tạo dựng các Series bài giảng học thuật, Podcast, tổ chức nhiều chuỗi sự kiện gây tiếng vang như Workshop IELTS101, IELTS EXPO, Cuộc thi hùng biện Speak Yourself,… Tất cả đều miễn phí."
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionOpen = (index) => {
        setActiveIndex((prevIndex) => {
            return prevIndex === index ? -1 : index
        });
    };

    return (
        <div className='frequentlyAskedQuestions-container'>
            <h1>
                Câu Hỏi Thường Gặp!
            </h1>
            <div className='frequentlyAskedQuestions-accordion'>
                {frequentlyAskedQuestions.map((item, index) => (
                    <Accordion
                        key={index}
                        expanded={index === activeIndex ? true : false}
                        onChange={() => handleAccordionOpen(index)}
                        defaultExpanded={index === 0 ? true : false}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`"panel${index}-content"`}
                            id={`"panel${index}-header"`}
                        >
                            {item.titleQuestions}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.contentQuestions}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions