import React from 'react'
import "../../styles/home/participants.css"

import Participants1 from "../../assets/images/participants1.png"
import Participants2 from "../../assets/images/participants2.png"
import Participants3 from "../../assets/images/participants3.png"

function Participants() {
    return (
        <div className="participants-container">
            <h2>ĐỐI TƯỢNG THAM GIA</h2>
            <p className='desc'>
                CIT Education chính là nơi khởi đầu cho những thành công của các kỹ sư CNTT trong tương lai,
                cung cấp và đào tạo nguồn nhân lực IT chất lượng cao cho các dự án thực tế.
            </p>
            <div className="target-groups">
                <div className="target-item">
                    <h3>Bạn muốn được đào tạo? </h3>
                    <p>Bạn là người mới bắt đầu hoặc mong muốn được đào tạo về những kỹ năng, công nghệ mới.</p>
                    <img src={Participants1} alt="Participants1" />
                </div>
                <div className="target-item">
                    <h3>Bạn muốn được thực tập? </h3>
                    <p>Bạn đang tìm kiếm cơ hội thực tập với những trải nghiệm thực tế, giúp nâng cao kỹ năng chuyên môn & kỹ năng mềm, làm quen với môi trường và văn hóa doanh nghiệp.</p>
                    <img src={Participants2} alt="Participants2" />
                </div>
                <div className="target-item">
                    <h3>Bạn muốn tìm cơ hội việc làm?</h3>
                    <p>Bạn đã và đang theo đuổi ngành Công nghệ, muốn thử sức với vị trí Fresher hoặc làm việc tại dự án.</p>
                    <img src={Participants3} alt="Job Participants3" />
                </div>
            </div>
        </div>
    )
}

export default Participants