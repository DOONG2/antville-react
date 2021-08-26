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
    [isOpen]
  )
  const clickListener = useCallback(
    (e: MouseEvent) => {
      const el = ref?.current
      if (!el || !isOpen || el.contains(e.target as Node)) return
      close()
    },
    [isOpen]
  )
  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])
  return ref
}

export default useOnClickOutside
