import client from '../client'
import { Post } from '../types'

export default async function postFormData(formData: FormData) {
  const response = await client.post<Post>('/post/create', formData)

  return response.data
}
