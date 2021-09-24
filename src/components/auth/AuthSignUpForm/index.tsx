import styled from '@emotion/styled'
import {
  FontBlue,
  SubDescription,
  ValidatorLabel,
} from '../../../lib/styles/texts'
import { SignUpButton } from '../../../lib/styles/buttons'
import {
  grey030,
  grey050,
  grey080,
  navy040,
  red050,
} from '../../../lib/styles/colors'
import CompleteCheckIcon from '../../../static/svg/CompleteCheckIcon'
import useSignUpFormik from './hooks/useSignUpFormik'
import { useRootState } from '../../common/hooks/useRootState'
import { useEffect } from 'react'
import NickNameRuleLabel from '../AuthNicknameRule'
import { useDispatch } from 'react-redux'
import viewSlice from '../../../reducers/Slices/view'
import useAutoFocus from '../../common/hooks/useAutoFocus'

function AuthSignUpForm() {
  const {
    dirty,
    isValid,
    initialValues,
    isSubmitting,
    emailError,
    isEmailValid,
    onChangeEmail,
    nicknameError,
    isNicknameValid,
    onChangeNickname,
    values,
    errors,
    touched,
    handleSubmit,
    resetForm,
    getFieldProps,
  } = useSignUpFormik()

  const { isOpenSignUpForm } = useRootState((state) => state.view)
  const { setIsOpenLoginForm } = viewSlice.actions

  const dispatch = useDispatch()

  useEffect(() => {
    resetForm()
  }, [isOpenSignUpForm])

  const ref = useAutoFocus({ watcher: isOpenSignUpForm })

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <Item
          style={{
            borderBottomColor:
              (touched.emailSignup ||
                values.emailSignup !== initialValues.emailSignup) &&
              emailError
                ? red050
                : grey030,
          }}
        >
          <Input
            id="emailSignup"
            type="email"
            {...getFieldProps('emailSignup')}
            onChange={onChangeEmail}
            placeholder={'아이디 (이메일 형식)'}
            ref={ref}
          />
          {(touched.emailSignup ||
            values.emailSignup !== initialValues.emailSignup) && (
            <>
              {emailError ? (
                <NewValidatorLabel>{emailError}</NewValidatorLabel>
              ) : (
                isEmailValid && (
                  <ValidatorLabel>
                    <NewCompleteCheckIcon />
                  </ValidatorLabel>
                )
              )}
            </>
          )}
        </Item>
        <Item
          style={{
            borderBottomColor:
              (touched.passwordSignup ||
                values.passwordSignup !== initialValues.passwordSignup) &&
              errors.passwordSignup
                ? red050
                : grey030,
          }}
        >
          <Input
            id="passwordSignup"
            type="password"
            {...getFieldProps('passwordSignup')}
            placeholder={'비밀번호'}
          />
          {(touched.passwordSignup ||
            values.passwordSignup !== initialValues.passwordSignup) && (
            <>
              {errors.passwordSignup ? (
                <NewValidatorLabel>{errors.passwordSignup}</NewValidatorLabel>
              ) : (
                <ValidatorLabel>
                  <NewCompleteCheckIcon />
                </ValidatorLabel>
              )}
            </>
          )}
        </Item>
        <Item
          style={{
            borderBottomColor:
              (touched.passwordCheckSignup ||
                values.passwordCheckSignup !==
                  initialValues.passwordCheckSignup) &&
              errors.passwordCheckSignup
                ? red050
                : grey030,
          }}
        >
          <Input
            id="passwordCheckSignup"
            type="password"
            {...getFieldProps('passwordCheckSignup')}
            placeholder={'비밀번호 확인'}
          />
          {(touched.passwordCheckSignup ||
            values.passwordCheckSignup !==
              initialValues.passwordCheckSignup) && (
            <>
              {errors.passwordCheckSignup ? (
                <NewValidatorLabel>
                  {errors.passwordCheckSignup}
                </NewValidatorLabel>
              ) : (
                <ValidatorLabel>
                  <NewCompleteCheckIcon />
                </ValidatorLabel>
              )}
            </>
          )}
        </Item>
        <Item
          style={{
            borderBottomColor:
              (touched.nicknameSignup ||
                values.nicknameSignup !== initialValues.nicknameSignup) &&
              nicknameError &&
              isNicknameValid
                ? red050
                : grey030,
          }}
        >
          <Input
            id="nicknameSignup"
            type="text"
            {...getFieldProps('nicknameSignup')}
            onChange={onChangeNickname}
            placeholder={'닉네임'}
          />
          {(touched.nicknameSignup ||
            values.nicknameSignup !== initialValues.nicknameSignup) && (
            <>
              {nicknameError ? (
                <>
                  <NickNameRuleLabel />
                  <NewValidatorLabel>{nicknameError}</NewValidatorLabel>
                </>
              ) : (
                isNicknameValid && (
                  <ValidatorLabel>
                    <NewCompleteCheckIcon />
                  </ValidatorLabel>
                )
              )}
            </>
          )}
        </Item>
        <CheckBoxWrapper>
          <SaveIdCheckBox
            id="subscribeNewsLetterSignup"
            type="checkbox"
            {...getFieldProps('subscribeNewsLetterSignup')}
            checked={values.subscribeNewsLetterSignup}
          />
          <CheckBoxLabel>앤트빌 뉴스레터 수신 동의 (선택)</CheckBoxLabel>
        </CheckBoxWrapper>
        <ButtonWrapper>
          <NewSignUpButton
            type="submit"
            disabled={
              !(dirty && isValid) ||
              isSubmitting ||
              !(isEmailValid && isNicknameValid)
            }
          >
            가입하기
          </NewSignUpButton>
        </ButtonWrapper>
      </form>
      <NewSubDescription>
        이미 계정이 있으신가요?{' '}
        <NewFontBlue onClick={() => dispatch(setIsOpenLoginForm(true))}>
          로그인하기
        </NewFontBlue>
      </NewSubDescription>
      <WarningLabel>
        회원가입 시, 앤트빌 <FontBlack>운영정책</FontBlack>과{' '}
        <FontBlack>개인정보처리방침</FontBlack>에 동의한 것으로 간주합니다.
      </WarningLabel>
    </Wrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FontBlack = styled.div`
  display: inline;
  color: ${grey080};
  font-weight: 500;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-top: 47px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: left;

  color: #202020;
`

const Item = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid ${grey030};
`

const CheckBoxWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: center;
`

const NewSignUpButton = styled(SignUpButton)<{ disabled: boolean }>`
  border: ${(props) =>
    props.disabled ? `1px solid ${grey050}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey050}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: #fff;
  padding: 10px 131px;
  margin: 30px auto 0 auto;
  align-self: center;
`

const NewFontBlue = styled(FontBlue)`
  cursor: pointer;
`

const CheckBoxLabel = styled.div`
  font-size: 12px;
  line-height: 22px;
  margin-left: 6px;

  color: #424242;
  display: inline;
`

const NewSubDescription = styled(SubDescription)`
  margin-top: 24px;
  font-size: 14px;
  line-height: 18px;
  align-self: center;
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  outline: none;
  border: none;

  color: #202020;

  &::placeholder {
    color: #aeaeae;
  }
`

const SaveIdCheckBox = styled.input`
  width: 19px;
  height: 19px;

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

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${grey050};
`

const NewCompleteCheckIcon = styled(CompleteCheckIcon)`
  margin-right: 10px;
`

const NewValidatorLabel = styled(ValidatorLabel)`
  position: absolute;
  left: 0;
  bottom: -5px;
  transform: translate3d(0, 100%, 0);
`

export default AuthSignUpForm
