import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import {
    Button,
    Input,
    WebsiteLogo,
    LoginFormContainer,
    LoginImg,
    LoginSubmitForm,
    LoginSection,
    LoginErr,
} from '../styledComponents'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameErr, setUsernameErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const [apiError, setApiError] = useState('')
    const navigate = useNavigate()

    const submitForm = async event => {
        event.preventDefault()
        setUsernameErr(false)
        setPasswordErr(false)
        setApiError('')

        let hasError = false
        if (username.trim() === '') {
            setUsernameErr(true)
            hasError = true
        }
        if (password.trim() === '') {
            setPasswordErr(true)
            hasError = true
        }

        if (hasError) return

        const userDetails = { username, password }
        const url = 'https://apis.ccbp.in/login'

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(userDetails),
            })
            const data = await response.json()

            if (response.ok) {
                Cookies.set('jwt_token', data.jwt_token, { expires: 30 })
                navigate('/', { replace: true })
            } else {
                setApiError(data.error_msg)
            }
        } catch (error) {
            console.log(error)
            setApiError('Username or Password is invalid')
        }
    }

    return (
        <LoginSection className="login-container">
            <div>
                <LoginImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                    alt="website login"
                />
            </div>
            <LoginSubmitForm>
                <LoginFormContainer onSubmit={submitForm}>
                    <div>
                        <WebsiteLogo
                            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                            alt="website logo"
                        />
                    </div>

                    <label htmlFor="username">Username</label>
                    <Input
                        id="username"
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    {usernameErr && <LoginErr>Enter Username</LoginErr>}

                    <label htmlFor="password">Password</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    {passwordErr && <LoginErr>Enter Password</LoginErr>}

                    <Button type="submit">Login</Button>

                    {apiError && <LoginErr>{apiError}</LoginErr>}
                </LoginFormContainer>
            </LoginSubmitForm>
        </LoginSection>
    )
}

export default LoginForm
