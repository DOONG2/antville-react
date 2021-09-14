import styled from '@emotion/styled'
import React from 'react'
import Header from '../base/Header'
import HomeLayout from '../home/HomeLayout'
import PopularStock from '../stock/PopularStock'
import MainResponsive from './MainResponsive'

export type MainTemplateProps = {
  children: React.ReactNode
}

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Block>
        <Header />
        <PopularStock />
        <MainResponsive>
          <HomeLayout main={children}></HomeLayout>
        </MainResponsive>
      </Block>
    </>
  )
}

const Block = styled.div`
  height: 100%;
  background-color: #f2f5f8;
`

export default MainTemplate
