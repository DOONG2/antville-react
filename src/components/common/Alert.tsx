import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  close: () => void
}

export default function Alert({ children, close }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    ref.current.addEventListener('animationend', close)
    return () => {
      ref.current?.removeEventListener('animationend', () => close)
    }
  }, [ref])

  return (
    <Block ref={ref}>
      <Inner>{children}</Inner>
    </Block>
  )
}

const alertKeyFrame = keyframes`
  0% {
    opacity: 0;
    bottom: 50px;
  }
  25% {
    opacity: 1;
    bottom: 60px;
  }

  75% {
    opacity: 1;
    bottom: 60px;
  }

  100% {
    opacity: 0;
    bottom: 50px;
  }
`

const Block = styled.div`
  position: fixed;
  margin: 0 auto;
  right: 0;
  left: 0;
  opacity: 0;
  animation: 2s ease-in-out 0s 1 normal forwards running ${alertKeyFrame};
`

const Inner = styled.div`
  display: flex;
  justify-content: center;
`
