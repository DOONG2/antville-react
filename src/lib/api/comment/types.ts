export type getCommentsByIdResponse = {
  id: number
  body: string
  createdAt: string
  postId: number
  parentCommentId?: any
  commentImgs: CommentImg[]
  author: Author
  commentCount: CommentCount
  link?: Link
  gifImage?: GifImage
  isLikedSelf: boolean
}[]

export type CommentObject = {
  id: number
  body: string
  createdAt: string
  postId: number
  parentCommentId?: any
  commentImgs: CommentImg[]
  author: Author
  commentCount: CommentCount
  link?: Link
  gifImage?: GifImage
  isLikedSelf: boolean
}

interface GifImage {
  id: string
  ratio: number
  gifUrl: string
  tinyGifUrl: string
}

interface Link {
  id: number
  ogSiteName?: any
  ogImage: string
  ogTitle: string
  ogDescription: string
  ogUrl: string
  createdAt: string
}

interface CommentCount {
  likeCount: number
  nextCommentCount: number
}

interface Author {
  id: number
  nickname: string
  email: string
  isEmailVerified: boolean
  subscribeNewsLetter: boolean
  bio: string
  website?: any
  profileImg?: any
  createdAt: string
  isFollowing: boolean
}

interface CommentImg {
  image: string
}

export type CommentState = {
  body: string
  bodyLength: number
  isFocusInput: boolean
}
