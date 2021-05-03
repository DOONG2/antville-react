import styled from '@emotion/styled'
import React from 'react'
import SideBar from '../SideBar'

const Wrapper = styled.div`
  min-width: 144rem;
`

const BarWrapper = styled.div`
  width: 144rem;
  padding: 3rem 0;
  margin: 0 auto;
  position: relative;
`

const FeedWrapper = styled.div`
  width: 68.4rem;
  margin: 0 auto;
`

const Feed = () => {
  return (
    <Wrapper>
      <BarWrapper>
        <FeedWrapper>
          <SideBar />
        </FeedWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
