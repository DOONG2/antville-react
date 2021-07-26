import { RefObject, useCallback, useEffect } from 'react'

type Props = {
  onLoadMore: () => void
  ref?: RefObject<HTMLDivElement>
}

export function useInfiniteScroll({ onLoadMore, ref }: Props) {
  const infiniteScroll = useCallback(() => {
    let element, body
    if (ref?.current) {
      element = ref.current
      body = ref.current
    } else {
      element = document.documentElement
      body = document.body
    }
    const scrollHeight = Math.max(element.scrollHeight, body.scrollHeight)
    const scrollTop = Math.max(element.scrollTop, body.scrollTop)
    const clientHeight = element.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      onLoadMore()
    }
  }, [onLoadMore, ref])

  useEffect(() => {
    ref?.current?.addEventListener('scroll', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      ref?.current?.removeEventListener('scroll', infiniteScroll)
    }
  }, [infiniteScroll])
}
