import client from '../client'

export default async function putUserEdit(bio?: string, nickname?: string) {
  const response = await client.put('/user/profile', { bio, nickname })

  return response.data
}
