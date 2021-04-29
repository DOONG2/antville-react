import client from '../client'

const checkEmail = async (email: string) => {
  await client.get('/user/checkEmail', {
    params: {
      email,
    },
  })
}

export default checkEmail
