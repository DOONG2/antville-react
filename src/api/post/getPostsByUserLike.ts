import { postLimit } from '../../lib/variable'
import client from '../client'
import { Post } from '../types'

export default async function getPostsByUserLike(id: string, cursor?: string) {
  const response = await client.get<Post[]>(`/post/${id}/like`, {
    params: {
      limit: postLimit,
      cursor,
    },
  })

  return response.data
}
