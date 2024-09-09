// ./components/register/Register.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register(){

    const [formData, setFormData] = useState({
        username: '',
        gender: '',
        email: '',
        phoneNumber: '',
        password: '',
        checkPassword: ''
    });
    
    const handleFormDataChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Register successfully! \n Username: ${formData.username} \n Gender: ${formData.gender} \n Email: ${formData.email} \n phoneNumber: ${formData.phoneNumber}`);
        setFormData({
            username: '',
            gender: '',
            email: '',
            phoneNumber: '',
            password: '',
            checkPassword: ''  
        });
    }

    return (
        <div className="RegisterPage">
            <form action="post" className="Form" onSubmit={handleSubmit}>
                <h3 id="login-title">會員註冊</h3>

                <label>姓名</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleFormDataChange}
                    required
                />

                <label>性別</label>
                <div className="gender-radio">
                    <label className="male">
                        <input type="radio" className="radio-male" /> 男
                    </label>
                    <label className="female">
                        <input type="radio" className="radio-female" /> 女
                    </label>
                </div>

                <label>電子郵件</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormDataChange}
                    required
                />
                
                <label className="password">密碼</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleFormDataChange}
                    required
                />
                
                <label className="checkPassword">確認密碼</label>
                <input 
                    type="password"
                    name="checkPassword"
                    placeholder="CheckPassword"
                    value={formData.checkPassword}
                    onChange={handleFormDataChange}
                    required
                />
                
                <input type="submit" value={"會員登入"} id="member_submit" />
                
                <p id="p1">已經有帳戶了嗎？<NavLink to={"/loginpage"}>點此登入！</NavLink></p>
            </form>
        </div>
    )
}

export default Register;