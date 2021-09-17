import styled from '@emotion/styled'
import { ModalOverlay } from '../../lib/styles/buttons'

type Props = {
  shown: boolean
  children: React.ReactNode
  side: string
  close: () => void
}

export default function Drawer({ shown, children, side, close }: Props) {
  const isLeft = 'left' === side
  return shown ? (
    <>
      <Block
        style={{ left: isLeft ? '0' : 'auto', right: isLeft ? 'auto' : '0' }}
      >
        {children}
      </Block>
      {shown && <ModalOverlay onClick={close} />}
    </>
  ) : null
}

const Block = styled.div`
  z-index: 9999999;
  position: fixed;
  left: 0;
  top: 0;
  width: 70vw;
  height: 100vh;
  background-color: #fff;
  transition: 0.25s left ease-in-out;
`
