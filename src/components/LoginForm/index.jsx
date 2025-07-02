import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import './index.css'

const LoginForm = () => {
    const [errMsg, setErrMsg] = useState(false)
    const [usernameErrMsg, setUsernameErrMsg] = useState(false)
    const [passwordErrMsg, setPasswordErrMsg] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSuccess = jwtToken => {
        Cookies.set('jwt_token', jwtToken, { expires: 30 })
        navigate("/", { replace: true });
    };

    const onSubmitFailure = () => {
        setErrMsg(true)
    }

    const submitForm = async (event) => {
        event.preventDefault()
        if (username === "") {
            setUsernameErrMsg(true)
            setErrMsg(true)
        }
        else {
            setUsernameErrMsg(false)
            setErrMsg(false)
        }
        if (password === "") {
            setPasswordErrMsg(true)
            setErrMsg(true)
        }
        else {
            setPasswordErrMsg(false)
            setErrMsg(false)
        }
        const userDetails = { username, password };
        const url = "https://apis.ccbp.in/login";
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        const token = data.jwt_token;
        if (token !== "undefined") {
            onSubmitSuccess(data.jwt_token)
        }
        else {
            onSubmitFailure(data.error_msg)
        }
        setUsername("")
        setPassword("")
    }

    return (
        <div className='login-container'>
            <div className='login-page-image-container'>
                <img className='login-page-image' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website-login-image" />
            </div>
            <div className='login-form-container'>
                <form className='form-container' onSubmit={submitForm}>
                    <div>
                        <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website-logo" />
                    </div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} placeholder='username' onChange={handleUsername}></input>
                    {usernameErrMsg && <p>Enter Username</p>}
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} placeholder='password' onChange={handlePassword}></input>
                    {passwordErrMsg && <p>Enter Password</p>}
                    <button type="submit" className='button'>Login</button>
                    {errMsg && <p>Username or Password is invalid</p>}
                </form>
            </div>
        </div>
    )
}

export default LoginForm