import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import CloseIcon from '../../assets/svg/CloseIcon'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  width: string
  height: string
  setOpen: (checked: boolean) => void
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #424242;
  opacity: 0.4;
  z-index: 999;
`

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: inherit;
  outline: 0;
  overflow: auto;
  background-color: #fff;

  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);

  border-radius: 10px;

  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

const ModalInner = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  margin: 0 auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
`

const LeftItem = styled.div`
  text-align: right;
`

const NewCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`

const Modal = ({ children, isOpen, width, height, setOpen }: ModalProps) => {
  const dispatch = useDispatch()
  return (
    <>
      <ModalOverlay isOpen={isOpen} />
      <Wrapper isOpen={isOpen} tabIndex={-1}>
        <ModalInner width={width} height={height}>
          <LeftItem>
            <NewCloseIcon onClick={() => dispatch(setOpen(false))} />
          </LeftItem>
          {children}
        </ModalInner>
      </Wrapper>
    </>
  )
}

export default Modal
