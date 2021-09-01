import styled from '@emotion/styled'
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
          <ModalOverlay shown={shown} onClick={close} />
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

const ModalOverlay = styled.div<{ shown: boolean }>`
  display: ${(props) => (props.shown ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #424242;
  opacity: 0.4;
  z-index: 999;
`

const Wrapper = styled.div<{ shown: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  outline: 0;
  overflow: auto;
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
