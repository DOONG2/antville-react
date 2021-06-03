import client from '../client'

export default async function postLikePost(id: number) {
  const response = await client.post(`/post/${id}/likePost`)

  return response.data
}
