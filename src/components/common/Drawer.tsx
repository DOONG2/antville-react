import styled from '@emotion/styled'
import { ModalOverlay } from '../../lib/styles/buttons'

type Props = {
  shown: boolean
  children: React.ReactNode
  close: () => void
}

export default function Drawer({ shown, children, close }: Props) {
  return (
    <>
      <Block
        style={{
          left: shown ? '0vw' : '-70vw',
        }}
      >
        {children}
      </Block>
      {shown && <ModalOverlay onClick={close} />}
    </>
  )
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
