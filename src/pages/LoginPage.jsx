// LoginPage.jsx

import React from "react";

function LoginPage(){
    return (
        <div className="LoginPage">
            <form action="post" className="loginForm">
                <h3 id="login-title">會員登入</h3>
                <label>電子郵件</label>
                <input type="email" className="input" />
                <label className="password">密碼</label>
                <input type="password" className="input" />
                <input type="submit" value={"會員登入"} id="member_submit" />
                <p id="p1">還沒有帳戶嗎？<a href="">點此註冊！</a></p>
            </form>
        </div>
    )
}

export default LoginPage;