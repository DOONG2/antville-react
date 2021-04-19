import styled from '@emotion/styled'
import { Formik } from 'formik'
import { LoginButton } from '../../mds/theme/buttons'
import { FontBlue, SubDescription, ValidatorLabel } from '../../mds/theme/fonts'
import { navy040 } from '../../mds/theme/colors'
import CompleteCheckIcon from '../../assets/svg/CompleteCheckIcon'

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
  background: #1942e0;
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

const LoginForm = () => {
  return (
    <>
      <Title>로그인</Title>
      <Formik
        initialValues={{ userId: '', password: '', saveId: false }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          console.log(data)
          setSubmitting(false)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Item>
              <Input
                name="userId"
                value={values.userId}
                onChange={handleChange}
                placeholder={'아이디 (이메일 형식)'}
                onClick={(e) => {
                  e.preventDefault()
                }}
              />
              {true ? (
                <NewCompleteCheckIcon />
              ) : (
                <ValidatorLabel>이메일 형식이 아닙니다.</ValidatorLabel>
              )}
            </Item>
            <Item>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder={'비밀번호'}
              />
              <ValidatorLabel>올바른 비밀번호가 아닙니다.</ValidatorLabel>
            </Item>
            <CheckBoxWrapper>
              <SaveIdCheckBox
                name="saveId"
                type="checkbox"
                checked={values.saveId}
                onChange={handleChange}
              />
              <CheckBoxLabel>계정 정보 기억하기</CheckBoxLabel>
            </CheckBoxWrapper>

            <ButtonWrapper>
              <NewLoginButton type="submit" disabled={isSubmitting}>
                로그인
              </NewLoginButton>
              <NewValidatorLabel>
                가입되지 않은 아이디거나, 잘못된 비밀번호 입니다.
              </NewValidatorLabel>
            </ButtonWrapper>
          </form>
        )}
      </Formik>
      <NewSubDescription>
        비밀번호를 잊으셨나요? <NewFontBlue>비밀번호 찾기</NewFontBlue>
      </NewSubDescription>
    </>
  )
}

export default LoginForm
