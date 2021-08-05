import { Post } from '../types'

export interface getPostAllResponse {
  [index: number]: Post
}

export interface gifDto {
  gifId: string
  tinyGifUrl: string
  gifUrl: string
  ratio: number
}

export type PostState = {
  body: string
  bodyLength: number
  isFocusInput: boolean
}
