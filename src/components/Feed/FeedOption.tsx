import styled from '@emotion/styled'
import React, { useState } from 'react'
import ThreeDot from '../../assets/svg/ThreeDot'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import DropDown from '../../mds/DropDown'
import FeedOptionDropDown from '../DropDown/FeedOptionDropDown'

const Wrapper = styled.div``

const OutSideClickWrapper = styled.div`
  padding: 5px 0;
  cursor: pointer;

  position: relative;
`

export default function FeedOption() {
  const [isOpen, setIsOpen] = useState(false)
  const outSideClickRef = useOnClickOutside({
    close: () => {
      if (isOpen) setIsOpen(false)
    },
    isOpen: isOpen,
  })
  return (
    <>
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        <OutSideClickWrapper ref={outSideClickRef}>
          <ThreeDot />
          <DropDown shown={isOpen} parentHeight={15} placement={'Right'}>
            <FeedOptionDropDown close={() => setIsOpen(false)} />
          </DropDown>
        </OutSideClickWrapper>
      </Wrapper>
    </>
  )
}
