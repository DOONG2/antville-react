import { Post } from '../api/types'

export interface Feed {
  activatedTab: string
  posts: Post[] | null
  isScrolled: boolean
}
