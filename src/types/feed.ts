import { getCommentsByIdResponse } from '../lib/api/comment/types'
import { Post } from '../lib/api/types'

export interface Feed {
  activatedTab: string
  activatedUseTab: string
  posts: Post[] | null
  userPosts: Post[] | null
  comments: getCommentsByIdResponse | null
  stockId?: number
}
