import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import {
  antblue050,
  blue050,
  grey010,
  grey020,
  grey040,
  grey050,
  grey060,
} from '../../lib/styles/colors'
import { FeedText, FeedTitle, TitleIconWrapper } from '../../lib/styles/feed'
import LeftArrow from '../../static/svg/LeftArrow'
import UserIcon66 from '../../static/svg/UserIcon66'
import { useRootState } from '../common/hooks/useRootState'
import useUserEditFormik from './hooks/useUserEditFormik'

export default function UserEdit() {
  const history = useHistory()
  const user = useRootState((state) => state.user)

  const {
    dirty,
    isValid,
    values,
    errors,
    touched,
    handleSubmit,
    resetForm,
    getFieldProps,
  } = useUserEditFormik()

  if (!user) return <></>

  return (
    <Block>
      <FeedTitle>
        <TitleIconWrapper
          onClick={() => {
            history.goBack()
          }}
        >
          <LeftArrow />
        </TitleIconWrapper>
        <FeedText>프로필 편집</FeedText>
      </FeedTitle>
      <Main>
        <Profile>
          <ProfileAvatar>
            {user.profileImg ? (
              <img src={user.profileImg} alt="profile_edit_image" />
            ) : (
              <UserIcon66 />
            )}
          </ProfileAvatar>
          <EditButton>프로필 사진 변경하기</EditButton>
        </Profile>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <Item>
              <span>닉네임</span>
              <input placeholder={'닉네임을 입력해주세요.'}></input>
              <WarningLabel>이미 존재하는 닉네임 입니다.</WarningLabel>
            </Item>
            <Item>
              <span>웹사이트</span>
              <input placeholder={'링크를 입력해주세요.'}></input>
              <WarningLabel>
                올바르지 않은 주소입니다. 주소를 다시 입력해주세요.
              </WarningLabel>
            </Item>
            <IntroductionWrapper>
              <span>자기소개</span>
              <IntroductionInput placeholder={'자기소개를 입력해주세요.'} />
              <Description>
                자기소개는 200자까지 가능합니다. 못다한 이야기는 타임라인에서
                해주세요 :)
              </Description>
            </IntroductionWrapper>
            <ButtonWrapper>
              <Button>완료</Button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </Main>
    </Block>
  )
}

const Item = styled.div`
  position: relative;
`

const WarningLabel = styled.div`
  position: absolute;
  font-size: 11px;
  line-height: 15px;

  left: 82px;
  bottom: -15px;

  color: #fa4a61;
`

const ButtonWrapper = styled.div``

const Button = styled.div`
  margin-top: 13px;
  padding: 5px 23px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${grey010};
  background: ${antblue050};
  border-radius: 5px;

  cursor: pointer;
`

const IntroductionWrapper = styled.div`
  position: relative;
`

const Description = styled.div`
  position: absolute;
  left: 82px;
  bottom: -23px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;

  color: ${grey060};
`

const IntroductionInput = styled.textarea`
  width: 386px;
  height: 152px;
  background: #ffffff;

  border: 1px solid ${grey040};
  box-sizing: border-box;
  border-radius: 3px;
  resize: none;
  padding: 10px;

  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
  ::placeholder {
    color: ${grey050};
    font-size: 15px;
  }
`

const Block = styled.div``

const Main = styled.div`
  padding-left: 19px;
  border-top: 1px solid ${grey020};
  padding-top: 39px;
  display: flex;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const FormWrapper = styled.div`
  margin-left: 60px;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
    div {
      display: flex;
      column-gap: 24px;
      justify-content: flex-end;
      span {
        font-size: 16px;
        line-height: 22px;

        color: #000000;
      }
      input {
        background: #ffffff;
        width: 386px;

        border: 1px solid ${grey040};
        box-sizing: border-box;
        border-radius: 3px;
        padding: 4px 10px;

        font-weight: 400;
        font-size: 15px;
        line-height: 20px;

        color: #000000;
        ::placeholder {
          color: ${grey050};
        }
      }
    }
  }
`

const ProfileAvatar = styled.div`
  margin: 0 auto;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 0.5px solid ${grey020};

  img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }

  cursor: pointer;
`

const EditButton = styled.div`
  padding: 11px;
  background: ${grey010};

  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${antblue050};
  border: 1px solid ${antblue050};
  box-sizing: border-box;
  border-radius: 3px;

  cursor: pointer;
`
