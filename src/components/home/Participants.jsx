import React from 'react'
import "../../styles/home/participants.css"

import ParticipantsImage1 from "../../assets/images/participantsImage1.png"
import ParticipantsImage2 from "../../assets/images/participantsImage2.png"
import ParticipantsImage3 from "../../assets/images/participantsImage3.png"

function Participants() {
    return (
        <div className="participants-container">
            <h2>Đối tượng tham gia</h2>
            <p className='desc'>
                CIT Education chính là nơi khởi đầu cho những thành công của các kỹ sư CNTT trong tương lai,
                cung cấp và đào tạo nguồn nhân lực IT chất lượng cao cho các dự án thực tế.
            </p>
            <div className="target-groups">
                <div className="target-item">
                    <div>
                        <h3>Bạn muốn được đào tạo? </h3>
                        <p>Bạn là người mới bắt đầu hoặc mong muốn được đào tạo về những kỹ năng, công nghệ mới.</p>
                    </div>
                    <img src={ParticipantsImage1} alt="ParticipantsImage1" />
                </div>
                <div className="target-item">
                    <div>
                        <h3>Bạn muốn được thực tập? </h3>
                        <p>Bạn đang tìm kiếm cơ hội thực tập với những trải nghiệm thực tế, giúp nâng cao kỹ năng chuyên môn & kỹ năng mềm, làm quen với môi trường và văn hóa doanh nghiệp.</p>
                    </div>
                    <img src={ParticipantsImage2} alt="ParticipantsImage2" />
                </div>
                <div className="target-item">
                    <div>
                        <h3>Bạn muốn tìm cơ hội việc làm?</h3>
                        <p>Bạn đã và đang theo đuổi ngành Công nghệ, muốn thử sức với vị trí Fresher hoặc làm việc tại dự án.</p></div>
                    <img src={ParticipantsImage3} alt="ParticipantsImage3" />
                </div>
            </div>
        </div>
    )
}

export default Participants