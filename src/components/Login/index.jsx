import { useState, useEffect, useContext } from 'react'
import {
    Button,
    ErrMsg,
    Form,
    Input,
    InputContainer,
    Label,
    LoginSection,
    WebsiteLogo,
} from '../styled-components'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../ThemeContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameErr, setUsernameErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const [loginErr, setLoginErr] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { isDark } = useContext(ThemeContext)

    const handleInput = (event) => {
        const { id, value } = event.target

        if (id === 'username') {
            setUsername(value)
            setUsernameErr(value === '')
        } else if (id === 'password') {
            setPassword(value)
            setPasswordErr(value === '')
        }
    }

    const onChecked = (event) => {
        const { checked } = event.target;
        setShowPassword(checked)
    }

    const passwordType = showPassword ? 'text' : 'password'

    const onSubmit = async (event) => {
        event.preventDefault()

        const isUsernameEmpty = username.trim() === ''
        const isPasswordEmpty = password.trim() === ''

        setUsernameErr(isUsernameEmpty)
        setPasswordErr(isPasswordEmpty)

        if (isUsernameEmpty || isPasswordEmpty) return

        const url = 'https://apis.ccbp.in/login'
        const details = { username, password }

        const options = {
            method: 'POST',
            body: JSON.stringify(details),
        }

        try {
            const response = await fetch(url, options)
            const data = await response.json()

            if (response.ok) {
                console.log('Login successful', data)
                setLoginErr(false)
                Cookies.set('jwt_token', data.jwt_token, { expires: 30 })
                navigate('/', { replace: true })
                console.log(Cookies.get('jwt_token'))
            } else {
                setLoginErr(true)
                console.log('Login failed', data.error_msg)
            }
        } catch (err) {
            console.error('Error during fetch', err)
            setLoginErr(true)
        }
    }

    useEffect(() => {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            navigate('/', { replace: true })
        }
    }, [navigate])

    return (
        <LoginSection $isdark={isDark}>
            <Form onSubmit={onSubmit} $isdark={isDark}>
                {isDark ? (<WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website-logo"
                />) : <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website-logo"
                />}
                <InputContainer>
                    <Label $isdark={isDark} htmlFor="username">USERNAME</Label>
                    <Input id="username" value={username} type="text" placeholder="Username" onChange={handleInput} $isdark={isDark} />
                    {usernameErr && <ErrMsg>Username is required</ErrMsg>}
                </InputContainer>
                <InputContainer>
                    <Label $isdark={isDark} htmlFor="password">PASSWORD</Label>
                    <Input id="password" value={password} type={passwordType} placeholder="Password" onChange={handleInput} $isdark={isDark} />
                    <input id="show-password" type="checkbox" onChange={onChecked} />
                    <Label $isdark={isDark} htmlFor="show-password">Show password</Label>
                    {passwordErr && <ErrMsg>Password is required</ErrMsg>}
                </InputContainer>
                <Button type="submit">Login</Button>
                {loginErr && <ErrMsg>Invalid username or password</ErrMsg>}
            </Form>
        </LoginSection>
    )
}

export default Login
