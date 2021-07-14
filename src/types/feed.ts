import { getCommentsByIdResponse } from '../api/comment/types'
import { Post } from '../api/types'

export interface Feed {
  activatedTab: string
  activatedUseTab: string
  posts: Post[] | null
  userPosts: Post[] | null
  comments: getCommentsByIdResponse | null
  stockId?: number
}
