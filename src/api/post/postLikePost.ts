import client from '../client'

export default async function postLikePost(id: number) {
  const response = await client.put(`/post/${id}/like`)

  return response.data
}
