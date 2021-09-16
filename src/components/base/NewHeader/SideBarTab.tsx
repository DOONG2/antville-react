import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import { grey080 } from '../../../lib/styles/colors'
import useElementSize from '../../common/hooks/useElementSize'

export default function SideBarTab() {
  const ref = useRef<HTMLDivElement>(null)
  const [isFirst, setIsFirst] = useState(true)

  const { width } = useElementSize(ref)

  return (
    <Block ref={ref}>
      <Tab onClick={() => setIsFirst(true)}>관심 종목</Tab>
      <Tab onClick={() => setIsFirst(false)}>실시간 인기 피드</Tab>
      <Indicator
        style={{
          width: width / 2,
          left: isFirst ? `0px` : width / 2,
        }}
      />
    </Block>
  )
}

const Block = styled.div`
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
  position: absolute;
  bottom: 0px;
  transition: 0.25s left ease-in-out;
`
