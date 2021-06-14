import client from '../client'
import { getCommentsByIdResponse } from './types'

export default async function getCommentsById(
  id: number,
  limit: string = '15',
  cursor?: string
) {
  const response = await client.get<getCommentsByIdResponse>(
    `/comment/${id}/first`,
    {
      params: {
        limit,
        cursor,
      },
    }
  )

  return response.data
}
