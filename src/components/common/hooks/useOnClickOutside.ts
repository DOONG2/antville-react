import { useCallback, useEffect, useRef } from 'react'

interface Props {
  close: () => void
  isOpen: boolean
}

const useOnClickOutside = ({ close, isOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        close()
      }
    },
    [ref.current, isOpen]
  )
  const clickListener = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const el = ref?.current
      if (!el || !isOpen || el.contains(e.target as Node)) return
      close()
    },
    [ref.current, isOpen]
  )
  useEffect(() => {
    document.addEventListener('mousedown', clickListener)
    document.addEventListener('touchstart', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('mousedown', clickListener)
      document.removeEventListener('touchstart', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])
  return ref
}

export default useOnClickOutside
