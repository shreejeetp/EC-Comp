import React from "react"
import "./Login.css"
import UserSvg from "../../svg/user.svg"

function Login() {
    return (
        <div className="login-form-container">
            <div className="login-form">
                <img className="login-img login-field" src={UserSvg} alt="Login-img"/>
                <input className="login-field" type="text" placeholder="UserName"/>
                <input className="login-field" type="password" placeholder="Password"/>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;