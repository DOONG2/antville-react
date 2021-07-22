import { useCallback, useEffect, useRef } from 'react'

interface Props {
  close: () => void
  isOpen: boolean
}

const useClickOutsideListenerRef = ({ close, isOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close()
      }
    },
    [close, isOpen]
  )
  const clickListener = useCallback(
    (e: MouseEvent) => {
      const el = ref?.current
      if (!el || el.contains(e.target as Node) || !isOpen) {
        return
      }
      close()
    },
    [close, isOpen]
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

export default useClickOutsideListenerRef
