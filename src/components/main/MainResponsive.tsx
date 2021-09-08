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
  width: 732px;
  margin: 0 auto;
  position: relative;
`

const Inner = styled.div`
  width: 1440px;
  padding: 30px 0 0 0;
  margin: 0 auto;
  position: relative;
`

const Block = styled.div`
  width: 100%;
  background-color: #f2f5f8;
  padding-bottom: 25px;
`

export default MainResponsive
