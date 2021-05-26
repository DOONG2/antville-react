import client from './client'
import { getCategoriesResponse } from './types'

const getCategories = async () => {
  const response = await client.get<getCategoriesResponse>('/categories')

  return response.data
}

export default getCategories
