export interface GifObject {
  created: number
  hasaudio: boolean
  id: string
  media: [mediaObject]
  tags: [string]
  title: string
  itemurl: string
  hascaption: boolean
  url: string
}

export interface mediaObject {
  tinywebm: Tinywebm
  mediumgif: Tinywebm
  tinymp4: Tinymp4
  gif: Tinywebm
  tinygif: Tinywebm
  nanomp4: Tinymp4
  loopedmp4: Tinymp4
  nanogif: Tinywebm
  nanowebm: Tinywebm
  mp4: Tinymp4
  webm: Tinywebm
}

export interface Tinymp4 {
  preview: string
  url: string
  size: number
  duration: number
  dims: number[]
}

export interface Tinywebm {
  dims: number[]
  url: string
  preview: string
  size: number
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

export interface getSearchResponse {
  next: string
  results: [GifObject]
}
