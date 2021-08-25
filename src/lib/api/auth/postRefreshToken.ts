import axios from 'axios'
import { refreshTokenResponse } from './types'

const refreshClient = axios.create()

refreshClient.defaults.baseURL = process.env.REACT_APP_SERVER_URL

const postRefreshToken = async (refreshToken: string) => {
  const response = await refreshClient.post<refreshTokenResponse>(
    '/auth/refresh',
    {
      refreshToken,
    }
  )
  return response.data
}

export default postRefreshToken
