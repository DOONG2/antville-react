import client from '../client'

export default async function putFollow(id: number) {
  const response = await client.put(`/user/${id}/follow`)

  return response.data
}
