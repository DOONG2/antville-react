import styled from '@emotion/styled'
import React from 'react'

export type HomeLayoutProps = {
  main: React.ReactNode
}

function HomeLayout({ main }: HomeLayoutProps) {
  return (
    <Block>
      <Main>{main}</Main>
    </Block>
  )
}

const Block = styled.div``
const Main = styled.main``

export default HomeLayout
