import client from '../client'

export default async function postUnLikePost(id: number) {
  const response = await client.delete(`/post/${id}/like`)

  return response.data
}
