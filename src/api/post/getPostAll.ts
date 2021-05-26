import client from '../client'
import { Post } from '../types'

export async function getPostAll(limit: string, cursor?: string) {
  const response = await client.get<Post[]>('/post/all', {
    params: {
      limit,
      cursor,
    },
  })
  return response.data
}
