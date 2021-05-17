import client from './client'
import { getCategoriesResponse } from './types'

const getCategories = async () => {
  const response = await client.get<getCategoriesResponse>('/categories', {
    params: { locale: 'ko' },
  })

  return response.data
}

export default getCategories
