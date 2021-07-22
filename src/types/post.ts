export interface postOptions {
  submitData: {
    body: string
    gifDto: GifDto | undefined
  }
  isSubmitted: boolean
}

export interface GifDto {
  gifId: string
  tinyGifUrl: string
  gifUrl: string
  ratio: number
}
