import { CDN_HOST_URL, S3_HOST_URL } from 'src/constants/url'

// 이미지 경량화 함수
export default function ImageOptimizer(url: string, width?: number) {
  if (!url.includes(S3_HOST_URL)) return url

  // 이미지 주소를 CDN 주소로 변경
  let replaced = url.replace(S3_HOST_URL, CDN_HOST_URL).concat('?f=webp')

  if (width === undefined) return replaced

  // 넓이 조정
  return replaced.concat(`&w=${width}`)
}
