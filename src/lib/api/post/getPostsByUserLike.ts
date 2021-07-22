import { postLimit } from '../../variable'
import client from '../client'
import { Post } from '../types'

export default async function getPostsByUserLike(id?: number, cursor?: number) {
  const response = await client.get<Post[]>(`/post/${id}/like`, {
    params: {
      limit: postLimit,
      cursor,
    },
  })

  return response.data
}
