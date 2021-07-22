import client from '../client'
import { CommentObject } from './types'

export default async function postFormData(formData: FormData) {
  const response = await client.post<CommentObject>('/comment/create', formData)

  return response.data
}
