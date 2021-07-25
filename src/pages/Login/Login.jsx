import React from "react"
import "./Login.css"
import UserSvg from "../../svg/user.svg"
import { useState } from "react"


function Login(props) {
    console.log("username in login :",props.global.state.login.user)
    let [userName, setUserName] = useState(props.global.state.login.user)
    let [password, setPassword] = useState()
    let [role, setRole] = useState(props.global.state.login.role===null?1:props.global.state.login.role)

    let isLogin = props.global.state.login.isLogin
    if (isLogin) {
        return (
            <div className="login-form-container">
                <div className="login-form">
                    <h1>Hello {userName}, You are {parseInt(role) === 1 ? "an Admin" : "a user"}.</h1>
                    <button onClick={props.global.func.logoutFunc}>Log Out!</button>
                </div>
            </div>
        )
    }

    const updateUserName=(e)=>{
        setUserName(e.target.value)
    }

    const updatePassword=(e)=>{
        setPassword(e.target.value)
    }

    const updateRole=(e)=>{
        setRole(e.target.value)
    }


    return (
        <div className="login-form-container">
            <div className="login-form">
                <img className="login-img login-field" src={UserSvg} alt="Login-img" />
                <input className="login-field" value={userName} type="text" placeholder="UserName" onChange={updateUserName} />
                <input className="login-field" value={password} type="password" placeholder="Password" onChange={updatePassword} />
                <select className="login-field" value={role} onChange={updateRole} >
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select>
                <button onClick={() => props.global.func.loginFunc(userName,password,role)}>Login</button>
            </div>
        </div>
    )
}

export default Login;