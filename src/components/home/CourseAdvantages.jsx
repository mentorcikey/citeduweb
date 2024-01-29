import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import "../../styles/home/courseAdvantages.css"
import CourseAdvantagesImage from "../../assets/images/courseAdvantages.png"

function CourseAdvantages() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='courseAdvantages-container'>
            <img data-aos="zoom-in-left" src={CourseAdvantagesImage} alt="CourseAdvantagesImage" />
            <div data-aos="zoom-in-right" className='courseAdvantages-content'>
                <h1>Tại sao khoá lập trình FullStack của CIT Education lại được hàng ngàn học viên lựa chọn?</h1>
                <ul className='courseAdvantages-list'>
                    <li>Với <span>học phí chỉ bằng 1/2 hoặc 1/3 so với các trung tâm khác</span>, chúng tôi hiểu rằng sự tiết kiệm là quan trọng. Hệ thống <span>hỗ trợ chia nhỏ học phí</span> giúp bạn dễ dàng tiếp cận kiến thức mà không gánh nặng tài chính lớn
                    </li>
                    <li>Lộ trình học không chỉ là danh sách môn học, mà còn là một hành trình chi tiết và công khai. Bạn sẽ <span>tham gia vào các dự án thực tế, xây dựng sản phẩm thực tế từ đầu đến cuối,</span> giúp bạn áp dụng kiến thức một cách linh hoạt và sáng tạo
                    </li>
                    <li>Mỗi buổi học đều được <span>tài liệu hóa và record chất lượng cao</span>. Điều này giúp bạn có thể xem lại bất cứ khi nào bạn muốn, đồng thời có tài liệu để tham khảo trong quá trình học và sau khi khóa học kết thúc. Mentor của chúng tôi sẵn lòng hỗ trợ bạn 24/7, giúp giải đáp mọi thắc mắc và vướng mắc
                    </li>
                    <li>
                        Bằng văn bản, CIT Education <span>cam kết hỗ trợ việc giới thiệu việc</span> làm tại các công ty IT phần mềm đối tác ngay sau khi bạn hoàn thành khóa học. Điều này đồng nghĩa với việc bạn không chỉ học lý thuyết mà còn có cơ hội áp dụng kiến thức thực tế và bắt đầu sự nghiệp của mình ngay sau khi tốt nghiệp
                    </li>
                    <li>Sau đợt thực tập, bạn sẽ có cơ hội <span>trở thành nhân viên chính thức với mức lương hấp dẫn, dao động từ 7-10 triệu/tháng</span></li>
                </ul>
                <h2>Đăng kí tư vấn ngay để nhận ưu đãi giảm giá lên đến 35%</h2>
                <div className='courseAdvantages-button'>
                    <button><a href="https://docs.google.com/spreadsheets/d/1XT4zrZMdqv1_jIq_urBNmH2WTW6SsgJXKaKYfheLU9c/edit?usp=sharing" target='blank'>Xem lộ trình</a></button>
                    <button><a href="#consultationForm">Đăng kí tư vấn miễn phí</a></button>
                </div>
            </div>
        </section>
    )
}

export default CourseAdvantages