import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Block,
  Button,
  ErrorWrapper,
  IconWrapper,
  Inner,
} from '../lib/styles/error'
import ErrorScreenIcon from '../static/svg/ErrorScreenIcon'
import ErrorIcon from '../static/svg/ErrorIcon'

export type ErrorScreenProps = {
  onResolve: () => void
}

function ErrorScreen({ onResolve }: ErrorScreenProps) {
  const history = useHistory()
  return (
    <Block>
      <Inner>
        <IconWrapper>
          <ErrorScreenIcon />
          <ErrorWrapper>
            <ErrorIcon />
          </ErrorWrapper>
        </IconWrapper>
        <h1>죄송합니다. 요청하신 페이지를 처리 중에 오류가 발생했습니다.</h1>
        <h2>
          서비스 이용에 불편을 드려 죄송합니다.
          <br /> 입력하신 주소가 정확한지 확인 후 다시 시도해주시기 바랍니다.
        </h2>
        <Button
          onClick={() => {
            history.push('/')
            onResolve()
          }}
        >
          홈으로 돌아가기
        </Button>
      </Inner>
    </Block>
  )
}

export default ErrorScreen
