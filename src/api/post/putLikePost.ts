import client from '../client'

export default async function putLikePost(id: number) {
  const response = await client.put(`/post/${id}/like`)

  return response.data
}
