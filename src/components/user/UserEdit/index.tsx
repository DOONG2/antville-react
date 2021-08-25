import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import {
  antblue050,
  grey010,
  grey020,
  grey040,
  grey050,
  grey060,
} from '../../../lib/styles/colors'
import { FeedText, FeedTitle, TitleIconWrapper } from '../../../lib/styles/feed'
import LeftArrow from '../../../static/svg/LeftArrow'
import UserIcon66 from '../../../static/svg/UserIcon66'
import useUserEditFormik from './hooks/useUserEditFormik'
import NickNameRuleLabel from '../../auth/AuthNicknameRule'
import { useEffect, useRef } from 'react'
import useImageUpload from './hooks/useUserImageUpload'
import { User } from '../../../lib/api/types'
import { useRootState } from '../../common/hooks/useRootState'
import userEditSlice from '../../../reducers/Slices/userEdit'
import { useDispatch } from 'react-redux'
import optimizeImage from '../../../lib/utils/optimizeImage'

type Props = {
  user: User
}

export default function UserEdit({ user }: Props) {
  const history = useHistory()
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const { uploadFileUrl } = useRootState((state) => state.userEdit)
  const { setUploadFileUrl } = userEditSlice.actions
  const dispatch = useDispatch()

  const { handleClick } = useImageUpload({
    hiddenFileInput,
  })

  const {
    values,
    dirty,
    isValid,
    initialValues,
    touched,
    isSubmitting,
    handleSubmit,
    isNicknameValid,
    nicknameError,
    isUploadFileValid,
    uploadFileError,
    getFieldProps,
    onChangeNickanme,
    onChangeUpload,
  } = useUserEditFormik({
    initialBio: user.bio,
    initialNickname: user.nickname,
  })

  useEffect(() => {
    dispatch(setUploadFileUrl(user.profileImg))
  }, [])

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
            {uploadFileUrl ? (
              <img
                src={optimizeImage(uploadFileUrl, 120)}
                alt="profile_edit_image"
              />
            ) : (
              <UserIcon66 />
            )}
          </ProfileAvatar>
          <EditButton onClick={handleClick}>
            프로필 사진 변경하기
            <NewWarningLabel>{uploadFileError}</NewWarningLabel>
          </EditButton>
        </Profile>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <HiddenInput
              ref={hiddenFileInput}
              id="editFile"
              type="file"
              onChange={onChangeUpload}
              accept="image/png,image/jpg,image/jpeg"
            />

            <Item>
              <Span>닉네임</Span>
              <NicknameWrapper>
                <NonBorderInput
                  id="editNickname"
                  type="text"
                  {...getFieldProps('editNickname')}
                  onChange={onChangeNickanme}
                  placeholder={user.nickname}
                />
                <NickNameRuleLabel />
                {(touched.editNickname ||
                  values.editNickname !== initialValues.editNickname) && (
                  <>
                    {nicknameError ? (
                      <WarningLabel>{nicknameError}</WarningLabel>
                    ) : (
                      values.editNickname !== initialValues.editNickname &&
                      isNicknameValid && (
                        <CompleteLabel>올바른 닉네임입니다</CompleteLabel>
                      )
                    )}
                  </>
                )}
              </NicknameWrapper>
            </Item>
            {/* <Item>
              <Span>웹사이트</Span>
              <Input
                id="editWebSite"
                type="url"
                {...getFieldProps('editWebSite')}
                placeholder={'링크를 입력해주세요.'}
              />
              {touched.editWebSite
                ? errors.editWebSite && (
                    <WarningLabel>{errors.editWebSite}</WarningLabel>
                  )
                : ''}
            </Item> */}
            <Item>
              <Span>자기소개</Span>
              <IntroductionInput
                id="editIntroduction"
                {...getFieldProps('editIntroduction')}
                placeholder={user.bio}
              />
              <Description>
                자기소개는 200자까지 가능합니다. 못다한 이야기는 타임라인에서
                해주세요 :)
              </Description>
            </Item>
            <ButtonWrapper>
              <Button
                type="submit"
                disabled={
                  !(dirty && isValid) ||
                  isSubmitting ||
                  (!isUploadFileValid &&
                    values.editFile !== initialValues.editFile) ||
                  (!isNicknameValid &&
                    values.editNickname !== initialValues.editNickname)
                }
              >
                완료
              </Button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </Main>
    </Block>
  )
}

const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${grey040};
  box-sizing: border-box;
  border-radius: 3px;
`

const Input = styled.input`
  background: #ffffff;
  width: 386px;

  border: 1px solid ${grey040};
  box-sizing: border-box;
  border-radius: 3px;
  padding: 4px 10px;

  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  outline: none;

  color: #000000;
  ::placeholder {
    color: ${grey050};
  }
`

const NonBorderInput = styled(Input)`
  border: none;
  width: 357px;
`

const Item = styled.div`
  position: relative;
  display: flex;
  column-gap: 24px;
  justify-content: flex-end;
`

const WarningLabel = styled.div`
  position: absolute;
  font-size: 11px;
  line-height: 15px;

  left: 94px;
  bottom: -15px;

  color: #fa4a61;
`

const NewWarningLabel = styled(WarningLabel)`
  left: 0;
  top: 40px;
`

const CompleteLabel = styled(WarningLabel)`
  color: ${antblue050};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  margin-top: 13px;
  padding: 5px 23px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  background: ${(p) => (p.disabled ? grey050 : antblue050)};
  color: ${grey010};
  border: ${(props) =>
    props.disabled ? `1px solid ${grey050}` : `1px solid ${antblue050}`};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: 5px;
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
  outline: none;
  padding: 10px;

  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
  & > ::placeholder {
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

const Span = styled.span`
  font-size: 16px;
  line-height: 22px;

  color: #000000;
`

const FormWrapper = styled.div`
  margin-left: 60px;

  & > form {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
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
  position: relative;
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

const HiddenInput = styled.input`
  display: none;
`
