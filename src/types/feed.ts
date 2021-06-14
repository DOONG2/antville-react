import { getCommentsByIdResponse } from '../api/comment/types'
import { Post } from '../api/types'

export interface Feed {
  activatedTab: string
  posts: Post[] | null
  comments: getCommentsByIdResponse | null
}
