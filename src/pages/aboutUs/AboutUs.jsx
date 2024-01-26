import React from 'react'
import "./index.css"

function AboutUs() {
    return (
        <div className="about-us-container">
            <h2>GIỚI THIỆU</h2>
            <h3>FPT SOFTWARE ACADEMY</h3>
            <p>
                FPT Software Academy là học viện công nghệ trực thuộc FPT Software dành cho học sinh, sinh viên, người đi làm có định hướng theo đuổi ngành Công nghệ.
            </p>
            <p>
                Chúng tôi cung cấp các chương trình đào tạo định hướng ngành khác nhau về phát triển phần mềm, kiểm thử phần mềm để giúp học viên:
            </p>
            <ul>
                <li>Nâng cao năng lực chuyên môn</li>
                <li>Có được kinh nghiệm thực tiễn</li>
                <li>Cải thiện ngoại ngữ và kỹ năng mềm</li>
            </ul>
            <h3>Tầm nhìn</h3>
            <p>
                Trở thành trung tâm đào tạo công nghệ hàng đầu Việt Nam
            </p>
            <h3>Sứ mệnh</h3>
            <p>
                FPT Software Academy là bệ phóng vững chắc cho những bạn trẻ đang theo đuổi ngành Công nghệ. Chúng tôi cung cấp nguồn nhân lực chất lượng cao cho FPT Software và góp phần phát triển ngành công nghệ Việt Nam
            </p>
            <h3>Giá trị cốt lõi</h3>
            <p>
                Tôn đổi đồng – Chí gương sáng: Tôn trọng cá nhân – Tinh thần đổi mới – Tinh thần đồng đội, Chí công – Gương mẫu – Sáng suốt.
            </p>
            {/* Thêm hình ảnh nếu cần */}
            <div className="images-container">
                {/* Thêm các ảnh cần hiển thị */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" />
            </div>
        </div>
    )
}

export default AboutUs