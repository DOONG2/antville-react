import styled from '@emotion/styled'
import { ModalOverlay } from '../../lib/styles/buttons'
import { grey050 } from '../../lib/styles/colors'

interface ModalProps {
  children: React.ReactNode
  shown: boolean
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Modal = ({ children, shown, close }: ModalProps) => {
  return (
    <>
      {shown && (
        <>
          <ModalOverlay onClick={close} />
          <Wrapper
            shown={shown}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalInner>{children}</ModalInner>
          </Wrapper>
        </>
      )}
    </>
  )
}

const Wrapper = styled.div<{ shown: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  outline: 0;
  overflow: overlay;
  ::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${grey050}; /*스크롤바의 색상*/
    border-radius: 7px;
  }

  display: ${(props) => (props.shown ? 'block' : 'none')};
`

const ModalInner = styled.div`
  position: relative;
`

export default Modal
