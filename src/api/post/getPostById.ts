import client from '../client'
import { Post } from '../types'

export default async function getPostById(id: string) {
  const response = await client.get<Post>('/post', {
    params: {
      id,
    },
  })
  return response.data
}
