import { getCategoriesResponse } from '../api/tenor/types'

export interface postOptions {
  isUp: boolean
  isDown: boolean
  gif: getCategoriesResponse | null
}
