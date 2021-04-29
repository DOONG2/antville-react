import { User } from '../types'

export interface postLoginRequest {
  email: string
  password: string
}

export interface postLoginResponse {
  accessToken: string
  refreshToken: string
}

export interface getCurrentUserResponse extends User {}

export interface refreshTokenResponse {
  accessToken: string
}
