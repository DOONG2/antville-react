import { postLimit } from '../../variable'
import client from '../client'
import { Post } from '../types'

export default async function getPostsByStock(id: number, cursor?: number) {
  const response = await client.get<Post[]>(`/post/${id}/symbol`, {
    params: {
      limit: postLimit,
      cursor,
    },
  })

  return response.data
}
