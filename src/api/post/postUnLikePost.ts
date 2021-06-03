import client from '../client'

export default async function postUnLikePost(id: number) {
  const response = await client.post(`/post/${id}/unLikePost`)

  return response.data
}
