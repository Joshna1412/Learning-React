import React, { useEffect, FormEvent, ChangeEvent } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router'
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
import { useStore } from '../../context/storeContext'

const LoginForm: React.FC = observer(() => {
    const { loginModel } = useStore()
    const navigate = useNavigate()

    useEffect(() => {
        loginModel.checkAuth(navigate)
    }, [navigate])

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        loginModel.login(navigate)
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
                        value={loginModel.username}
                        placeholder="Username"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            loginModel.setUsername(e.target.value)
                        }
                    />
                    {loginModel.usernameErr && <LoginErr>Enter Username</LoginErr>}

                    <label htmlFor="password">Password</label>
                    <Input
                        id="password"
                        type="password"
                        value={loginModel.password}
                        placeholder="Password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            loginModel.setPassword(e.target.value)
                        }
                    />
                    {loginModel.passwordErr && <LoginErr>Enter Password</LoginErr>}

                    <Button type="submit">Login</Button>

                    {loginModel.apiError && <LoginErr>{loginModel.apiError}</LoginErr>}
                </LoginFormContainer>
            </LoginSubmitForm>
        </LoginSection>
    )
})

export default LoginForm
