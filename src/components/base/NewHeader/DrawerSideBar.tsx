import styled from '@emotion/styled'
import { useState } from 'react'
import { grey080 } from '../../../lib/styles/colors'
import HomeWatchlist from '../../home/HomeWatchlist'
import MobilePopularList from './MobilePopularList'

export default function DrawerSideBar() {
  const [isFirst, setIsFirst] = useState<boolean>(true)
  return (
    <Block>
      <TabBlock>
        <Tab onClick={() => setIsFirst(true)}>관심 종목</Tab>
        <Tab onClick={() => setIsFirst(false)}>실시간 인기 피드</Tab>
        <Indicator
          style={{
            left: isFirst ? '0' : '50%',
          }}
        />
      </TabBlock>
      <>{isFirst ? <HomeWatchlist /> : <MobilePopularList />}</>
    </Block>
  )
}

const TabBlock = styled.div`
  display: flex;
  width: 100%;

  position: relative;

  border-bottom: 0.5px solid #e0e0e0;
`

const Tab = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  padding: 20px 0;
  cursor: pointer;
  color: ${grey080};
`

const Indicator = styled.div`
  height: 2px;
  background-color: #424242;
  border-radius: 3px;
  width: 50%;
  position: absolute;
  bottom: 0px;
  transition: 0.25s left ease-in-out;
`

const Block = styled.div`
  padding-top: 7px;
`
