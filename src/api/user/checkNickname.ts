import client from '../client'

const checkNickname = async (nickname: string) => {
  await client.get('/user/checkNickname', {
    params: {
      nickname,
    },
  })
}

export default checkNickname
