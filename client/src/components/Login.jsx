// ./components/Login.jsx

import { Link } from "react-router-dom";

function Login(){
    return (
        <div className="LoginPage">
            <form action="post" className="Form">
                <h3 id="login-title">會員登入</h3>
                <label>電子郵件</label>
                <input type="email" className="input" />
                <label className="password">密碼</label>
                <input type="password" className="input" />
                <input type="submit" value={"會員登入"} id="member_submit" />
                <p id="p1">還沒有帳戶嗎？<Link to={"/registerpage"}>點此註冊！</Link></p>
            </form>
        </div>
    )
}

export default Login;