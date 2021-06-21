import client from '../client'

const checkNickname = async (nickname: string) => {
  const resoponse = await client.get<{ available: boolean }>(
    '/user/nickname-available',
    {
      params: {
        nickname,
      },
    }
  )
  return resoponse.data
}

export default checkNickname
