import React from 'react'
import styled from '@emotion/styled'
import { LoginButton } from '../../lib/styles/buttons'
import {
  FontBlue,
  SubDescription,
  ValidatorLabel,
} from '../../lib/styles/texts'
import { grey050, navy040 } from '../../lib/styles/colors'
import CompleteCheckIcon from '../../static/svg/CompleteCheckIcon'
import useLoginFormik from './hooks/useLoginFormik'
import { useEffect } from 'react'
import { useRootState } from '../common/hooks/useRootState'
import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'

function AuthLoginForm() {
  const {
    dirty,
    isValid,
    values,
    errors,
    touched,
    isValidating,
    initialValues,
    submitCount,
    handleSubmit,
    resetForm,
    getFieldProps,
  } = useLoginFormik()
  const dispatch = useDispatch()
  const { setIsFailLoginSubmit, setIsOpenFindPasswordForm } = viewSlice.actions

  const { isOpenLoginForm, isFailLoginSubmit } = useRootState(
    (state) => state.view
  )

  useEffect(() => {
    resetForm()
    dispatch(setIsFailLoginSubmit(false))
  }, [isOpenLoginForm, resetForm, setIsFailLoginSubmit, dispatch])

  useEffect(() => {
    if (isValidating && submitCount > 0) {
      dispatch(setIsFailLoginSubmit(false))
    }
  }, [dispatch, isValidating, setIsFailLoginSubmit, submitCount])

  return (
    <Wrapper>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <Item>
          <Input
            id="emailLogin"
            type="email"
            {...getFieldProps('emailLogin')}
            placeholder={'아이디 (이메일 형식)'}
          />
          {(touched.emailLogin ||
            values.emailLogin !== initialValues.emailLogin) && (
            <ValidatorLabel>
              {errors.emailLogin ? errors.emailLogin : <NewCompleteCheckIcon />}
            </ValidatorLabel>
          )}
        </Item>
        <Item>
          <Input
            id="passwordLogin"
            type="password"
            {...getFieldProps('passwordLogin')}
            placeholder={'비밀번호'}
          />
          {(touched.passwordLogin ||
            values.passwordLogin !== initialValues.passwordLogin) && (
            <ValidatorLabel>
              {errors.passwordLogin ? (
                errors.passwordLogin
              ) : (
                <NewCompleteCheckIcon />
              )}
            </ValidatorLabel>
          )}
        </Item>
        <CheckBoxWrapper>
          <SaveIdCheckBox
            type="checkbox"
            checked={values.saveIdLogin}
            {...getFieldProps('saveIdLogin')}
          />
          <CheckBoxLabel>계정 정보 기억하기</CheckBoxLabel>
        </CheckBoxWrapper>

        <ButtonWrapper>
          <NewLoginButton
            type="submit"
            disabled={!(dirty && isValid) || isFailLoginSubmit}
          >
            로그인
          </NewLoginButton>
          {isFailLoginSubmit && (
            <NewValidatorLabel>
              가입되지 않은 아이디거나, 잘못된 비밀번호 입니다.
            </NewValidatorLabel>
          )}
        </ButtonWrapper>
      </form>
      <NewSubDescription>
        비밀번호를 잊으셨나요?{' '}
        <NewFontBlue onClick={() => dispatch(setIsOpenFindPasswordForm(true))}>
          비밀번호 찾기
        </NewFontBlue>
      </NewSubDescription>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2.5rem;
`

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

const CheckBoxWrapper = styled.div`
  margin-top: 4.4rem;
  display: flex;
  align-items: center;
`

const NewLoginButton = styled(LoginButton)`
  margin-top: 1.4rem;
  border: ${(props) =>
    props.disabled ? `1px solid ${grey050}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey050}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: #fff;
`

const NewFontBlue = styled(FontBlue)`
  font-size: 1.2rem;
  cursor: pointer;
`

const CheckBoxLabel = styled.div`
  font-family: Roboto;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin-left: 0.6rem;

  color: #424242;
  display: inline;
`

const NewSubDescription = styled(SubDescription)`
  margin-top: 1.5rem;
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

const SaveIdCheckBox = styled.input`
  width: 1.9rem;
  height: 1.9rem;

  outline: none;

  background-color: ${navy040};
  border: 1px solid #1942e0;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
`

const NewCompleteCheckIcon = styled(CompleteCheckIcon)`
  margin-right: 10px;
`

const NewValidatorLabel = styled(ValidatorLabel)`
  position: absolute;
  top: 1.4rem;
  left: 102px;
`

const ButtonWrapper = styled.div`
  position: relative;
`

export default AuthLoginForm
