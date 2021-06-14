import client from '../client'

export default async function deleteUnLikeComment(id: number) {
  const response = await client.delete(`/comment/${id}/like`)

  return response.data
}
