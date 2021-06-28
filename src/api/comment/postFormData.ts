import client from '../client'
import { getCommentsByIdResponse } from './types'

export default async function postFormData(formData: FormData) {
  const response = await client.post<getCommentsByIdResponse>(
    '/comment/create',
    formData
  )

  return response.data
}
