export interface StockPopularType {
  stocks: Stock[]
  stockPriceInfos: StockPriceInfo[]
}

export interface StockType {
  stock: Stock
  stockPriceInfos: StockPriceInfo
}

export interface StockPriceInfo {
  symbol: string
  latest: number
  dayHigh: number
  dayLow: number
  open: number
  previousClose: number
  volume: number
  timestamp: string
}

export interface Stock {
  id: number
  symbol: string
  enName: string
  krName: string
  type: string
  cashTagName: string
  stockCount: StockCount
  exchange: StockExchange
}

export interface StockExchange {
  name: string
  countryCode: string
}

export interface StockCount {
  watchUserCount: number
}

export interface Error {
  errorCode: number
  message: string
  statusCode: number
}

export interface ResponseError {
  data: Data
}

export interface Data {
  statusCode: number
  message: string
  errorCode: number
}

export interface UserCount {
  followers: number
  following: number
  postCount: number
  watchStockCount: number
  postLikeCount: number
}

export interface User {
  id: number
  nickname: string
  email: string
  isEmailVerified: boolean
  subscribeNewsLetter: boolean
  bio?: string
  website?: string
  profileImg?: string
  createdAt: string
  userCount: UserCount
}

export interface StockPriceInfoDto {
  symbol: string
  latest: number
  dayHigh: number
  dayLow: number
  open: number
  previousClose: number
  volume: number
  timestamp: string
}

export interface GetStocksResponseDto {
  stocks: [Stock]
  stockPriceInfos: [StockPriceInfoDto]
}

export interface GetStockResponseDto {
  stock: Stock
  stockPriceInfo: StockPriceInfoDto
}

export interface CreateUserInput {
  email: string
  nickname: string
  subscribeNewsLetter: boolean
}

export interface LoginInputDto {
  email: string
  password: string
}

export interface LoginResponseDto {
  accessToken: string
  refreshToken: string
}

export interface CreatePostDto {
  postId?: number
  body: string
  gifId: string
  tinyGifUrl: string
  gifUrl: string
  ratio: number
  sentiment?: string
}

export interface PostImg {
  image: string
}

export interface Report {
  id: number
  postId: number
  userId?: number
}

export interface PostLink {
  ogSiteName: string
  ogImage: string
  ogTitle: string
  ogDescription: string
  ogUrl: string
}

export interface GifImage {
  id: string
  ratio: number
  gifUrl: string
  tinyGifUrl: string
}

export interface PostCount {
  likeCount: number
  commentCount: number
}

export interface Post {
  isLikedSelf: boolean
  id: number
  body: string
  sentiment: string
  createdAt: string
  postImgs: [PostImg]
  reports: [Report]
  link: PostLink
  gifImage?: GifImage
  author: User
  postCount: PostCount
}

export interface Auth {
  accessToken: string
  refreshToken: string
}
