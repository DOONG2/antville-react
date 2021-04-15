import { Formik } from 'formik'
import styled from '@emotion/styled'
import { FontBlue, SubDescription } from '../../mds/theme/fonts'
import { SignUpButton } from '../../mds/theme/buttons'
import { grey050, navy040 } from '../../mds/theme/colors'

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
  margin-top: 5rem;

  border-bottom: 0.5px solid #e0e0e0;
`

const CheckBoxWrapper = styled.div`
  margin-top: 4.4rem;
  display: flex;
  align-items: center;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-top: 1.4rem;
  border: 1px solid ${grey050};
  background: ${grey050};
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

const SignUpForm = () => {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Formik
        initialValues={{
          userId: '',
          password: '',
          saveId: false,
          passwordCheck: '',
          nickname: '',
        }}
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
            </Item>
            <Item>
              <Input
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder={'비밀번호'}
              />
            </Item>
            <Item>
              <Input
                name="passwordCheck"
                value={values.passwordCheck}
                onChange={handleChange}
                placeholder={'비밀번호 확인'}
              />
            </Item>
            <Item>
              <Input
                name="nickname"
                value={values.nickname}
                onChange={handleChange}
                placeholder={'닉네임'}
              />
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
            <NewSignUpButton type="submit" disabled={isSubmitting}>
              가입하기
            </NewSignUpButton>
          </form>
        )}
      </Formik>
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
