import { useCallback, useEffect } from 'react'

type Props = {
  onLoadMore: () => void
}

export function useInfiniteScroll({ onLoadMore }: Props) {
  const infiniteScroll = useCallback(() => {
    const { documentElement, body } = document
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    )
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop)
    const clientHeight = documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      onLoadMore()
    }
  }, [onLoadMore])

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infiniteScroll])
}
