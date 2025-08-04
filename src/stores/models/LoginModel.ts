import { makeAutoObservable } from 'mobx'
import Cookies from 'js-cookie'

export class LoginModel {
    username = ''
    password = ''
    usernameErr = false
    passwordErr = false
    apiError = ''

    constructor() {
        makeAutoObservable(this)
    }

    setUsername(value: string) {
        this.username = value
    }

    setPassword(value: string) {
        this.password = value
    }

    validateForm(): boolean {
        this.usernameErr = this.username.trim() === ''
        this.passwordErr = this.password.trim() === ''
        return !(this.usernameErr || this.passwordErr)
    }

    async login(navigate: (path: string, opts: any) => void) {
        this.apiError = ''
        const isValid = this.validateForm()
        if (!isValid) return

        try {
            const response = await fetch('https://apis.ccbp.in/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            })
            const data = await response.json()
            if (response.ok) {
                Cookies.set('jwt_token', data.jwt_token, { expires: 30 })
                navigate('/', { replace: true })
            } else {
                this.apiError = data.error_msg
            }
        } catch {
            this.apiError = 'Username or Password is invalid'
        }
    }

    checkAuth(navigate: (path: string, opts: any) => void) {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken) {
            navigate('/', { replace: true })
        }
    }
}