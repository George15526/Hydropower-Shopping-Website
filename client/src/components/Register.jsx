// ./components/Register.jsx

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Register(){
    return (
        <div className="RegisterPage">
            <form action="post" className="Form">
                <h3 id="login-title">會員註冊</h3>

                <label>姓名</label>
                <input type="text" className="input" required/>

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
                <input type="email" className="input" required/>
                
                <label className="password">密碼</label>
                <input type="password" className="input" required/>
                
                <label className="password">確認密碼</label>
                <input type="password" className="input" required/>
                
                <input type="submit" value={"會員登入"} id="member_submit" />
                
                <p id="p1">已經有帳戶了嗎？<NavLink to={"/loginpage"}>點此登入！</NavLink></p>
            </form>
        </div>
    )
}

export default Register;