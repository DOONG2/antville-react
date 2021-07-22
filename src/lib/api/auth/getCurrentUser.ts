import client from '../client'
import { getCurrentUserResponse } from './types'

export async function getCurrentUser() {
  const response = await client.get<getCurrentUserResponse>('/auth/me')
  return response.data
}
