import client from '../client'

export default async function commentLikePost(id: number) {
  const response = await client.put(`/comment/${id}/like`)

  return response.data
}
