import { useEffect, useRef } from 'react'

type Props = {
  watcher: boolean
}

export default function useAutoFocus({ watcher }: Props) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [watcher])
  return ref
}
