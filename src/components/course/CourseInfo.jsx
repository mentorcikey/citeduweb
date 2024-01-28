import React from 'react'

import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";

import "../../styles/course/courseInfo.css"

import SaleImage from "../../assets/images/saleImage.png"
import Teacher from "./Teacher"

function CourseInfo() {
    return (
        <div className='courseInfo-container'>
            <div className='courseInfo-content'>
                <h1>Full-Stack JavaScript Web for Beginner</h1>
                <div className='courseInfo-contact'>
                    <p>Nếu bạn muốn biết thêm thông tin về khoá học. Hãy liên hệ với chúng tôi.</p>
                    <div>
                        <img src={SaleImage} alt="SaleImage" />
                        <ul>
                            <li>Email: contact.citedu@gmail.com</li>
                            <li>Zalo: 0329621710</li>
                        </ul>
                    </div>
                </div>
                <div className='courseInfo-object'>
                    <h1>KHÓA HỌC NÀY DÀNH CHO AI?</h1>
                    <hr />
                    <ul>
                        <li>Những người đi làm hoặc sinh viên ngành khác (Non-IT) muốn chuyển sang học CNTT để làm về IT, trở thành lập trình viên chuyên nghiệp, có thể tham gia vào các dự án phần mềm tại các doanh nghiệp hoặc tự xây dựng ứng dụng phần mềm cho mình.</li>
                        <li>Sinh viên ngành CNTT hoặc các ngành khác muốn củng cố các kiến thức nền tảng về IT, phát triển tư duy lập trình, hiểu cấu trúc dữ liệu giải thuật, nắm chắc kiến thức từ cơ bản đến nâng cao về Java – một trong những công nghệ lập trình phổ biến được nhiều dự án phần mềm tại các công ty sử dụng.</li>
                        <li>Dành cho những ai yêu thích, đam mê và muốn tìm hiểu về lập trình, mong muốn trở thành lập trình viên Full Stack Java Web chuyên nghiệp – vị trí có mức lương cao thuộc top đầu trong thị trường việc làm IT.</li>
                    </ul>
                </div>
                <div className='courseInfo-why-joinCourse'>
                    <h1>TẠI SAO NÊN THAM GIA KHÓA HỌC NÀY?</h1>
                    <hr />
                    <ul>
                        <li>Những người đi làm hoặc sinh viên ngành khác (Non-IT) muốn chuyển sang học CNTT để làm về IT, trở thành lập trình viên chuyên nghiệp, có thể tham gia vào các dự án phần mềm tại các doanh nghiệp hoặc tự xây dựng ứng dụng phần mềm cho mình.</li>
                        <li>Sinh viên ngành CNTT hoặc các ngành khác muốn củng cố các kiến thức nền tảng về IT, phát triển tư duy lập trình, hiểu cấu trúc dữ liệu giải thuật, nắm chắc kiến thức từ cơ bản đến nâng cao về Java – một trong những công nghệ lập trình phổ biến được nhiều dự án phần mềm tại các công ty sử dụng.</li>
                        <li>Dành cho những ai yêu thích, đam mê và muốn tìm hiểu về lập trình, mong muốn trở thành lập trình viên Full Stack Java Web chuyên nghiệp – vị trí có mức lương cao thuộc top đầu trong thị trường việc làm IT.</li>
                    </ul>
                </div>
                <div className='courseInfo-advantage'>
                    <h1>ƯU ĐIỂM CỦA KHOÁ HỌC TẠI CIT EDUCATION</h1>
                    <hr />
                    <ul>
                        <li><FaRegCheckCircle /><span>Cam kết đầu ra bằng văn bản</span></li>
                        <li><FaRegCheckCircle /><span>Học phí chỉ bằng 1/2, 1/3 so với các trung tâm khác </span></li>
                        <li><FaRegCheckCircle /><span>Giới thiệu việc làm tại các công ty IT phần mềm đối tác sau khi hoàn thành khóa học </span></li>
                        <li><FaRegCheckCircle /><span>Lộ trình học chi tiết, công khai rõ ràng, dự án xịn sò </span></li>
                        <li><FaRegCheckCircle /><span>Cơ hội được lên nhân viên chính thức sau đợt thực tập với mức lương từ 7-10tr / tháng </span></li>
                    </ul>
                </div>
                <div className='courseInfo-courseContent'>
                    <h1>Bạn sẽ được đào tạo về</h1>
                    <hr />
                    <ul>
                        <li><FaRegCheckCircle /><span>HTML,CSS</span></li>
                        <li><FaRegCheckCircle /><span>Git & Github</span></li>
                        <li><FaRegCheckCircle /><span>JavaScript</span></li>
                        <li><FaRegCheckCircle /><span>TypeScript</span></li>
                        <li><FaRegCheckCircle /><span>ReactJS</span></li>
                        <li><FaRegCheckCircle /><span>NextJS</span></li>
                        <li><FaRegCheckCircle /><span>OOP</span></li>
                        <li><FaRegCheckCircle /><span>CTDL & GT</span></li>
                        <li><FaRegCheckCircle /><span>NodeJS</span></li>
                        <li><FaRegCheckCircle /><span>ExpressJS</span></li>
                        <li><FaRegCheckCircle /><span>MongoDB</span></li>
                        <li><FaRegCheckCircle /><span>MySQL</span></li>
                    </ul>
                </div>
                <div className='courseInfo-require'>
                    <h1>Yêu cầu khi tham gia khoá học</h1>
                    <hr />
                    <ul>
                        <li>Có và biết sử dụng máy vi tính</li>
                        <li>Kỹ năng đọc, hiểu tốt</li>
                        <li>Là học sinh cấp 3 trở lên</li>
                    </ul>
                </div>
                <div className='courseInfo-teacher'>
                    <h1>Giảng viên xịn - an tâm học</h1>
                    <Teacher />
                </div>
            </div>
            <div className='courseInfo-card'>
                <img src={SaleImage} alt="SaleImage" />
                <div className='courseInfo-content'>
                    <div className='courseInfo-content-item'>
                        <IoMdTime />
                        <div>
                            <p>Thời lượng</p>
                            <p>192 giờ</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        <FaRegUser />
                        <div>
                            <p>Số lượng học viên</p>
                            <p>15-20 học viên / lớp</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        < IoLocationOutline />
                        <div>
                            <p>Hình thức học OFFLINE</p>
                            <p>Mai Dịch, Cầu Giấy, Hà Nội</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        <IoLocationOutline />
                        <div>
                            <p>Hình thức học ONLINE</p>
                            <p>Nền tảng VooV Meeting</p>
                        </div>
                    </div>
                    <div className='courseInfo-content-item'>
                        <IoMdBook />
                        <div>
                            <p>Số lượng buổi học</p>
                            <p>3 buổi / tuần</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInfo