import client from '../client'

const checkEmail = async (email: string) => {
  await client.get('/user/email-avaliable', {
    params: {
      email,
    },
  })
}

export default checkEmail
