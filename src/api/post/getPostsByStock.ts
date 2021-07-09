import { postLimit } from '../../lib/variable'
import client from '../client'
import { Post } from '../types'

export default async function getPostsByStock(id?: number, cursor?: string) {
  const response = await client.get<Post[]>(`/post/${id}/symbol`, {
    params: {
      limit: postLimit,
      cursor,
    },
  })

  return response.data
}
