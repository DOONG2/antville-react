import client from '../client'

export default async function deleteWatchlist(id: number) {
  const response = await client.delete(`/watchlist/${id}`)

  return response.data
}
