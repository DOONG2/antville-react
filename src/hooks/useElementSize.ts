import { RefObject, useState, useLayoutEffect } from 'react'
import useEventListener from './useEventListener'

interface Size {
  width: number
  height: number
  scrollWidth: number
  scrollHeight: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>
): Size {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
    scrollWidth: 0,
    scrollHeight: 0,
  })
  const updateSize = () => {
    const node = elementRef?.current
    if (node) {
      setSize({
        width: node.offsetWidth,
        height: node.offsetHeight,
        scrollWidth: node.scrollWidth,
        scrollHeight: node.scrollHeight,
      })
    }
  }
  useLayoutEffect(() => {
    updateSize()
  }, [elementRef.current, elementRef.current?.scrollHeight])

  useEventListener('resize', updateSize)

  return size
}

export default useElementSize
