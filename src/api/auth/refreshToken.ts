import authStorage from '../../lib/authStorage'
import client from '../client'
import { refreshTokenResponse } from './types'

const refreshToken = async () => {
  const token = authStorage.get()
  if (!token) return
  const { refreshToken } = token
  const response = await client.post<refreshTokenResponse>('/auth/refresh', {
    refreshToken,
  })
  authStorage.set({ refreshToken, accessToken: response.data.accessToken })
  return response.data
}

export default refreshToken
