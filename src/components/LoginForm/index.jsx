import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState(false)
    const [usernameErr, setUsernameErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const navigate = useNavigate()

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, { expires: 30 })
        navigate("/", { replace: true });
    }

    const onSubmitFailure = () => {
        setErrMsg(true)
        setUsernameErr(false)
        setPasswordErr(false)
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        if (username && password) {
            setErrMsg(false)
            const userDetails = { username, password };
            const url = "https://apis.ccbp.in/login";
            const options = {
                method: "POST",
                body: JSON.stringify(userDetails),
            };
            try {
                const response = await fetch(url, options)
                const data = await response.json()

                if (response.ok) {
                    onSubmitSuccess(data.jwt_token)
                } else {
                    onSubmitFailure()
                }
            } catch (error) {
                onSubmitFailure(error)
            }

        }
        else {
            setErrMsg(true)
            if (!username && !password) {
                setUsernameErr(true)
                setPasswordErr(true)
            }
            else if (!password) {
                setPasswordErr(true)
                setUsernameErr(false)
            }
            else {
                setPasswordErr(false)
                setUsernameErr(true)
            }
        }
    }

    return (
        <div className='login-container'>
            <form onSubmit={onSubmitForm} className='form-container'>
                <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="website-logo" />
                <label htmlFor="username" className='login-input-label'>USERNAME</label>
                <input value={username} className='login-input-feild' id="username" placeholder='Username' type="text" onChange={handleUsername}></input>
                {usernameErr && <p>Username is invalid</p>}
                <label htmlFor="password" className='login-input-label'>PASSWORD</label>
                <input value={password} className='login-input-feild' id="password" placeholder='Password' type="password" onChange={handlePassword}></input>
                {passwordErr && <p>Password is invalid</p>}
                <button type="submit" className='login-button'>Login</button>
                {errMsg && <p>Username or Password is invalid</p>}
            </form>
        </div>
    )
}

export default LoginForm