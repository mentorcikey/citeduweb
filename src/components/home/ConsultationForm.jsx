import React, { useState } from 'react';
import Logo from "../../assets/images/image.png"
import "../../styles/home/consultationForm.css"

function ConsultationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [object, setObject] = useState("");
    const [target, setTarget] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Thực hiện xử lý submit ở đây, ví dụ: gửi dữ liệu đến server
        console.log("Name:", name);
        console.log("Phone:", phone);
        console.log("Email:", email);
        console.log("Object:", object);
        console.log("Target:", target);

        // Sau khi xử lý xong, có thể làm sạch các trạng thái
        setName("");
        setPhone("");
        setEmail("");
        setObject("");
        setTarget("");
    };

    return (
        <div className='consultation-form-container'>
            <div className='consultation-form-content'>
                <div className='consultation-form-title'>
                    <h3>Đăng ký tư vấn miễn phí</h3>
                    <p>Bạn hãy để lại thông tin, CIT Edu sẽ liên hệ tư vấn cho mình sớm nha!</p>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='consultation-form'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Họ Tên</label>
                                <input type="text" id="name" value={name} placeholder='Tên bạn là gì?' onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='consultation-form-item'>
                                <div className="form-group">
                                    <label htmlFor="phone">Số Điện Thoại</label>
                                    <input type="tel" id="phone" value={phone} placeholder='Số điện thoại' onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" value={email} placeholder='Email của bạn' onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className='consultation-form-item'>
                                <div className="form-group">
                                    <label htmlFor="object">Bạn Là:</label>
                                    <select name="object" id="object" value={object} onChange={(e) => setObject(e.target.value)}>
                                        <option value="hoc-sinh">Học sinh</option>
                                        <option value="sinh-vien">Sinh viên</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="target">Mục Tiêu Của Bạn</label>
                                    <select name="target" id="target" value={target} onChange={(e) => setTarget(e.target.value)}>
                                        <option value="thuc-tap">Đi thực tập</option>
                                        <option value="phuc-vu-dam-me">Phục vụ đam mê</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Đặt hẹn</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConsultationForm;
