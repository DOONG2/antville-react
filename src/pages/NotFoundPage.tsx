import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Block,
  Button,
  ErrorWrapper,
  IconWrapper,
  Inner,
} from '../lib/styles/error'
import ErrorIcon404 from '../static/svg/ErrorIcon404'
import NotFoundIcon from '../static/svg/NotFoundIcon'

function NotFoundPage() {
  const history = useHistory()
  return (
    <Block>
      <Inner>
        <IconWrapper>
          <NotFoundIcon />
          <ErrorWrapper>
            <ErrorIcon404 />
          </ErrorWrapper>
        </IconWrapper>
        <h1>죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.</h1>
        <h2>
          존재하지 않는 주소를 입력하셨거나,
          <br /> 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </h2>
        <Button onClick={() => history.push('/')}>홈으로 돌아가기</Button>
      </Inner>
    </Block>
  )
}

export default NotFoundPage
