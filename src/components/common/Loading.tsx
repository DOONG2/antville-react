import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { blue050 } from '../../lib/styles/colors'

type Props = {
  width: number
}
export default function Loading({ width }: Props) {
  return (
    <Spinner width={width}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  )
}

const keyFrame = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    };
`

const Spinner = styled.div<{
  width: number
}>`
  z-index: 100;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.width * 0.9}px;
    height: ${(props) => props.width * 0.9}px;
    margin: 8px;
    border: 8px solid ${blue050};
    border-radius: 50%;
    animation: ${keyFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${blue050} transparent transparent transparent;
  }
  &:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  &:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`
