import styled from '@emotion/styled'
import React from 'react'
import HomeWatchlist from '../home/HomeWatchlist'

export type MainResponsiveProps = {
  className?: string
  children: React.ReactNode
}

function MainResponsive({ className, children }: MainResponsiveProps) {
  return (
    <Block className={className}>
      <Inner>
        <HomeWatchlist />
        <Wrapper>{children}</Wrapper>
      </Inner>
    </Block>
  )
}

const Wrapper = styled.div`
  width: 68.4rem;
  margin: 0 auto;
  padding-bottom: 30px;
  position: relative;
`

const Inner = styled.div`
  width: 144rem;
  padding: 3rem 0 0 0;
  margin: 0 auto;
  position: relative;
`

const Block = styled.div`
  width: 1440px;
  margin: 0 auto;
`

export default MainResponsive
