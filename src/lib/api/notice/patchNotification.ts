import client from '../client'

export default async function patchNotification(id: number) {
  const response = await client.patch(`/notification/${id}`)
  return response.data
}
