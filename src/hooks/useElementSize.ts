import { RefObject, useState, useEffect } from 'react'

interface Size {
  width: number
  height: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>
): Size {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updateSize = () => {
      const node = elementRef?.current
      if (node) {
        setSize({
          width: node.offsetWidth,
          height: node.offsetHeight,
        })
      }
    }
    updateSize()
  }, [elementRef.current])

  return size
}

export default useElementSize
