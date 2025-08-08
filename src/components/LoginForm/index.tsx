import React, { useEffect, FormEvent} from 'react'
import { useNavigate } from 'react-router'
import { observer } from 'mobx-react'

import {
    Button,
    Input,
    WebsiteLogo,
    LoginFormContainer,
    LoginImg,
    LoginSubmitForm,
    LoginSection,
    LoginErr,
} from '../StyledComponents'

import { useStore } from '../../context/storeContext'

const LoginForm: React.FC = observer(() => {
  const { loginModel } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    loginModel.checkAuth(navigate)
  }, [navigate])

  const submitForm = (event: FormEvent<HTMLFormElement>): void => {
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
            onChange={(e) => loginModel.setUsername(e.target.value)}
            aria-invalid={loginModel.usernameErr}
            aria-describedby="usernameError"
          />
          {loginModel.usernameErr && (
            <LoginErr id="usernameError">Enter Username</LoginErr>
          )}

          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            value={loginModel.password}
            placeholder="Password"
            onChange={(e) => loginModel.setPassword(e.target.value)}
            aria-invalid={loginModel.passwordErr}
            aria-describedby="passwordError"
          />
          {loginModel.passwordErr && (
            <LoginErr id="passwordError">Enter Password</LoginErr>
          )}

          <Button type="submit">
            Login
          </Button>

          {loginModel.apiError && (
            <LoginErr role="alert">{loginModel.apiError}</LoginErr>
          )}
        </LoginFormContainer>
      </LoginSubmitForm>
    </LoginSection>
  )
})


export default LoginForm
