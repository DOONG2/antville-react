import { AxiosResponse } from 'axios'
import client from '../client'

const checkEmail = async (email: string): Promise<AxiosResponse<any>> => {
  const response = await client.get('/user/checkEmail', {
    params: {
      email,
    },
  })
  return response.data
}

export default checkEmail
