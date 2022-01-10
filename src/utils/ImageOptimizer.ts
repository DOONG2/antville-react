import { CDN_HOST_URL, S3_HOST_URL } from 'src/constants/url'

export default function ImageOptimizer(url: string, width?: number) {
  if (!url.includes(S3_HOST_URL)) return url

  let replaced = url.replace(S3_HOST_URL, CDN_HOST_URL).concat('?f=webp')

  if (width === undefined) return replaced

  return replaced.concat(`&w=${width}`)
}
