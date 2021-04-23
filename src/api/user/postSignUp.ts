import { AxiosResponse } from 'axios'
import client from '../client'
import { User } from '../types'

const postSignUp = async (input: User): Promise<AxiosResponse<any>> => {
  const response = await client.post('/user/signUp', input)
  return response.data
}

export default postSignUp
