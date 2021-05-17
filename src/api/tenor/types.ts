export interface GifObject {
  created: number
  hasaudio: boolean
  id: string
  media: [CategoryObject]
  tags: [string]
  title: string
  itemurl: string
  hascaption: boolean
  url: string
}

export interface CategoryObject {
  searchterm: string
  path: string
  image: string
  name: string
}

export interface getCategoriesResponse {
  tags: [CategoryObject]
}
