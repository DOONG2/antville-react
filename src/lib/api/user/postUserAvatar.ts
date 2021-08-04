import client from '../client'
import { postUserAvatarResponse } from './types'

export default async function postUserAvatar(formData: FormData) {
  const response = await client.post<postUserAvatarResponse>(
    '/user/profile-img',
    formData
  )

  return response.data
}
