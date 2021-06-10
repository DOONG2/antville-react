import client from '../client'

const checkEmail = async (email: string) => {
  const response = await client.get<{ available: boolean }>(
    '/user/email-available',
    {
      params: {
        email,
      },
    }
  )
  return response.data
}

export default checkEmail
