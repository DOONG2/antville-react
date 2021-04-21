import styled from '@emotion/styled/macro'
import { FontBlue, SubDescription, ValidatorLabel } from '../../mds/theme/texts'
import { SignUpButton } from '../../mds/theme/buttons'
import { grey050, navy040 } from '../../mds/theme/colors'
import CompleteCheckIcon from '../../assets/svg/CompleteCheckIcon'
import useSignUpFormik from '../../hooks/useSignUpFormik'
import { useRootState } from '../../hooks/useRootState'
import { useEffect } from 'react'
import NickNameRuleLabel from './NickNameRuleLabel'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.7rem;
  text-align: left;
  margin-top: 6.5rem;

  color: #202020;
`

const Item = styled.div`
  position: relative;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #e0e0e0;
`

const CheckBoxWrapper = styled.div`
  margin-top: 4.4rem;
  display: flex;
  align-items: center;
`

const NewSignUpButton = styled(SignUpButton)<{ disabled: boolean }>`
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

  ::placeholder {
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

const WarningLabel = styled(SubDescription)`
  align-self: center;
  margin-top: auto;
  font-weight: 400;
`

const NewCompleteCheckIcon = styled(CompleteCheckIcon)`
  margin-right: 10px;
`

const NewValidatorLabel = styled(ValidatorLabel)`
  position: absolute;
  right: 0;
  top: 30px;
`

const SignUpForm = () => {
  const formik = useSignUpFormik()
  const {
    isValid,
    dirty,
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    resetForm,
  } = formik

  const { isOpenSignUpForm } = useRootState((state) => state.view)

  useEffect(() => {
    resetForm()
  }, [isOpenSignUpForm, resetForm])

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <Item>
          <Input
            id="userId"
            {...getFieldProps('userId')}
            placeholder={'아이디 (이메일 형식)'}
          />
          {touched.userId && (
            <ValidatorLabel>
              {errors.userId ? errors.userId : <NewCompleteCheckIcon />}
            </ValidatorLabel>
          )}
        </Item>
        <Item>
          <Input
            type="password"
            id="password"
            {...getFieldProps('password')}
            placeholder={'비밀번호'}
          />
          {touched.password && (
            <ValidatorLabel>
              {errors.password ? errors.password : <NewCompleteCheckIcon />}
            </ValidatorLabel>
          )}
        </Item>
        <Item>
          <Input
            type="password"
            id="passwordCheck"
            {...getFieldProps('passwordCheck')}
            placeholder={'비밀번호 확인'}
          />

          {touched.passwordCheck && (
            <ValidatorLabel>
              {errors.passwordCheck ? (
                errors.passwordCheck
              ) : (
                <NewCompleteCheckIcon />
              )}
            </ValidatorLabel>
          )}
        </Item>
        <Item>
          <Input
            id="nickname"
            {...getFieldProps('nickname')}
            placeholder={'닉네임'}
          />

          {touched.nickname && (
            <>
              <ValidatorLabel>
                {errors.nickname ? (
                  <NickNameRuleLabel />
                ) : (
                  <NewCompleteCheckIcon />
                )}
              </ValidatorLabel>
              <NewValidatorLabel>{errors.nickname}</NewValidatorLabel>{' '}
            </>
          )}
        </Item>
        <CheckBoxWrapper>
          <SaveIdCheckBox
            name="saveId"
            type="checkbox"
            checked={values.saveId}
            onChange={handleChange}
          />
          <CheckBoxLabel>앤트빌 뉴스레터 수신 동의 (선택)</CheckBoxLabel>
        </CheckBoxWrapper>
        <NewSignUpButton type="submit" disabled={!(dirty && isValid)}>
          가입하기
        </NewSignUpButton>
      </form>
      <NewSubDescription>
        이미 계정이 있으신가요? <NewFontBlue>로그인하기</NewFontBlue>
      </NewSubDescription>
      <WarningLabel>
        회원가입 시, 앤트빌 <FontBlue>운영정책</FontBlue>과{' '}
        <FontBlue>개인정보처리방침</FontBlue>에 동의한 것으로 간주합니다.
      </WarningLabel>
    </Wrapper>
  )
}

export default SignUpForm
