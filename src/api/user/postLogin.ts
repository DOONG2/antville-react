import { AxiosResponse } from 'axios'
import client from '../client'
import { postLoginRequest } from './types'

const postLogin = async (
  req: postLoginRequest
): Promise<AxiosResponse<any>> => {
  const response = await client.post('/auth/login', req)
  return response.data
}

export default postLogin
