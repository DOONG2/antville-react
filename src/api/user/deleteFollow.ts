import client from '../client'

export default async function deleteFollow(id: number) {
  const response = await client.delete(`/user/${id}/follow`)

  return response.data
}
