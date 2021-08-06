import React, { useEffect } from 'react'
import styled from '@emotion/styled/macro'
import CompleteCheckIcon from '../../static/svg/CompleteCheckIcon'
import { useRootState } from '../common/hooks/useRootState'
import { LoginButton } from '../../lib/styles/buttons'
import { ValidatorLabel } from '../../lib/styles/texts'
import useFindPasswordFormik from './hooks/useFindPasswordFormik'
import { grey050, grey080 } from '../../lib/styles/colors'

function AuthFindPasswordForm() {
  const {
    dirty,
    isValid,
    errors,
    touched,
    handleSubmit,
    resetForm,
    getFieldProps,
  } = useFindPasswordFormik()

  const { isOpenFindPasswordForm } = useRootState((state) => state.view)

  useEffect(() => {
    resetForm()
  }, [isOpenFindPasswordForm])

  const { isFailFindPasswordSubmit } = useRootState((state) => state.view)
  return (
    <>
      <Title>비밀번호 찾기</Title>
      <SubTitle>
        아이디(이메일)을 입력해주시면
        <br />
        해당 주소로 임시비밀번호를 발송해드립니다.
      </SubTitle>
      <form onSubmit={handleSubmit}>
        <Item>
          <Input
            id="email_find"
            type="email"
            {...getFieldProps('email_find')}
            placeholder={'아이디 (이메일 형식)'}
          />
          {touched.email_find && (
            <ValidatorLabel>
              {errors.email_find ? errors.email_find : <NewCompleteCheckIcon />}
            </ValidatorLabel>
          )}
        </Item>

        <ButtonWrapper>
          <NewLoginButton
            type="submit"
            disabled={!(dirty && isValid) || isFailFindPasswordSubmit}
          >
            발송 요청
          </NewLoginButton>
          {isFailFindPasswordSubmit && (
            <NewValidatorLabel>존재하지 않는 아이디 입니다.</NewValidatorLabel>
          )}
        </ButtonWrapper>
      </form>
    </>
  )
}

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.7rem;
  text-align: left;
  margin-top: 3.9rem;

  color: #202020;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;

  border-bottom: 0.5px solid #e0e0e0;
`

const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.2rem;
  outline: none;
  border: none;

  color: #202020;
  background-color: #fff;

  &::placeholder {
    color: #aeaeae;
  }
`

const NewCompleteCheckIcon = styled(CompleteCheckIcon)`
  margin-right: 10px;
`

const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
`

const NewLoginButton = styled(LoginButton)`
  margin-top: 1.4rem;
  border: ${(props) =>
    props.disabled ? `1px solid ${grey050}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey050}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: #fff;
`

const NewValidatorLabel = styled(ValidatorLabel)`
  position: absolute;
  top: 1.4rem;
  left: 102px;
`

const SubTitle = styled.div`
  margin-top: 3rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};
`

export default AuthFindPasswordForm
