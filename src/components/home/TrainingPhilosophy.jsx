import React, { useEffect, useState } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TrainingPhilosophyImage1 from "../../assets/images/trainingPhilosophyImage1.png"
import TrainingPhilosophyImage2 from "../../assets/images/trainingPhilosophyImage2.png"
import TrainingPhilosophyImage3 from "../../assets/images/trainingPhilosophyImage3.png"
import TrainingPhilosophyImage4 from "../../assets/images/trainingPhilosophyImage4.png"
import "../../styles/home/trainingPhilosophy.css"

const trainingPhilosophy = [
    {
        imagePath: TrainingPhilosophyImage1,
        titlePhilosophy: "Bứt Phá",
        contentPhilosophy: "Chương trình đào tạo của chúng tôi được thiết kế để đẩy lẻo học viên vào thế giới lập trình web fullstack. Sự tiến bộ được theo dõi và đánh giá để hỗ trợ từng học viên phát triển từng bước một."
    },
    {
        imagePath: TrainingPhilosophyImage2,
        titlePhilosophy: "Học Đi Đôi với 'Hành'",
        contentPhilosophy: "Sau khi hoàn thành, học viên không chỉ đạt đến trình độ lập trình mà còn có khả năng ứng dụng kiến thức vào xây dựng ứng dụng web thực tế. Họ trở nên tự tin trong việc giao tiếp với máy chủ, xử lý cơ sở dữ liệu, và triển khai ứng dụng của mình."
    },
    {
        imagePath: TrainingPhilosophyImage3,
        titlePhilosophy: "Tự Học Chủ Động",
        contentPhilosophy: "Chúng tôi khuyến khích học viên chủ động tìm kiếm và 'khai phá' kiến thức mới. Điều này giúp họ ghi nhớ kiến thức lâu dài và có khả năng áp dụng kiến thức vào các dự án thực tế."
    },
    {
        imagePath: TrainingPhilosophyImage4,
        titlePhilosophy: "Đồng Hành",
        contentPhilosophy: "Chúng tôi không chỉ cung cấp khóa học, mà còn xây dựng cộng đồng hỗ trợ và chia sẻ. Học viên không chỉ học từ giáo viên mà còn từ sự tương tác và chia sẻ của cộng đồng. Cùng nhau, chúng ta xây dựng và phát triển sự nghiệp lập trình web fullstack."
    }
];

function TrainingPhilosophy() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [indexImg, setIndexImg] = useState(0)

    const handleAccordionOpen = (index) => {
        setIndexImg(index)
        setActiveIndex((prevIndex) => {
            return prevIndex === index ? -1 : index
        });
    };

    useEffect(() => {
        Aos.init()
    })

    return (
        <div className='trainingPhilosophy-container'>
            <h1>Triết lý đào tạo của CIT Education để hàng ngàn học viên có việc làm</h1>
            <div className='trainingPhilosophy-content'>
                <div data-aos="fade-right" className='trainingPhilosophy-image'>
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
                <div data-aos="fade-left" className='trainingPhilosophy-accordion'>
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
