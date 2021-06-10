import client from '../client'

const checkNickname = async (nickname: string) => {
  await client.get('/user/nickname-available', {
    params: {
      nickname,
    },
  })
}

export default checkNickname
