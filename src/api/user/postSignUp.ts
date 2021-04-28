import { AxiosResponse } from 'axios'
import client from '../client'
import { postSignUpRequest } from './types'

const postSignUp = async (
  input: postSignUpRequest
): Promise<AxiosResponse<any>> => {
  const response = await client.post('/user/signUp', input)
  return response.data
}

export default postSignUp
