import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { antblue050 } from '../../lib/styles/colors'
import Pencil from '../../static/svg/Pencil'
import PostForm from '../post/PostForm'
import Modal from './FormModal'

function WriteButton() {
  const [open, setOpen] = useState(false)
  const modalParentRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  if (isMobile)
    return (
      <>
        <Modal
          shown={open}
          width="447px"
          height="541px"
          modalParentRef={modalParentRef}
          close={() => setOpen(false)}
        >
          <PostForm />
        </Modal>
        <CircleWrapper onClick={() => setOpen(true)}>
          <Pencil />
        </CircleWrapper>
      </>
    )

  return null
}

const CircleWrapper = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${antblue050};
  border-radius: 50px;
  width: 48px;
  height: 48px;
  cursor: pointer;
`

export default WriteButton
