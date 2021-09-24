import styled from '@emotion/styled'
import React from 'react'
import media from '../../lib/styles/media'
import { Desktop } from '../common/Responsive'

import HomeWatchlist from '../home/HomeWatchlist'

export type MainResponsiveProps = {
  className?: string
  children: React.ReactNode
}

function MainResponsive({ className, children }: MainResponsiveProps) {
  return (
    <Block className={className}>
      <Inner>
        <Desktop>
          <HomeWatchlist />
        </Desktop>
        <Wrapper>{children}</Wrapper>
      </Inner>
    </Block>
  )
}

const Wrapper = styled.div`
  width: 73.2rem;
  margin: 0 auto;
  position: relative;
  ${media.medium} {
    width: 100%;
  }
`

const Inner = styled.div`
  max-width: 144rem;
  padding: 3rem 0 0 0;
  margin: 0 auto;
  position: relative;
  ${media.medium} {
    padding: 0;
  }
`

const Block = styled.div`
  width: 100%;
  background-color: #f2f5f8;
  padding-bottom: 2.5rem;
  ${media.medium} {
    background-color: #ffffff;
  }
`

export default MainResponsive
