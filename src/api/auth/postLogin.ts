import client from '../client'
import { postLoginRequest, postLoginResponse } from './types'

const postLogin = async (req: postLoginRequest) => {
  const response = await client.post<postLoginResponse>('/auth/login', req)
  return response.data
}

export default postLogin
