import client from '../client'

export default async function putAddWatchlist(id: number) {
  const response = await client.put(`/watchlist/${id}/add`)

  return response.data
}
