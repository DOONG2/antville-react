import { getCategoriesResponse, getSearchResponse } from '../api/tenor/types'

export interface postOptions {
  isUp: boolean
  isDown: boolean
  categorys: getCategoriesResponse | null
  gifs: getSearchResponse | null
  query: string
  previewUrl: string | ArrayBuffer | null
  sumitData: { body: string }
  commentSubmitData: { body: string }
}
