import client from '../client'
import { Comment } from './types'

export default async function postCommentFormData(formData: FormData) {
  const response = await client.post<Comment>('/comment/create', formData)

  return response.data
}
