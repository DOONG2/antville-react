import { AxiosResponse } from 'axios'
import client from '../client'

const checkNickname = async (nickname: string): Promise<AxiosResponse<any>> => {
  const response = await client.get('/user/checkNickname', {
    params: {
      nickname,
    },
  })
  return response.data
}

export default checkNickname
