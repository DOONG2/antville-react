import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import {
  antblue050,
  grey010,
  grey020,
  grey030,
  grey050,
  grey060,
  grey080,
  red050,
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
import { AvatarImage } from '../../../lib/styles/post'

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
      <NewFeedTitle>
        <TitleIconWrapper
          onClick={() => {
            history.goBack()
          }}
        >
          <LeftArrow />
        </TitleIconWrapper>
        <FeedText>프로필 편집</FeedText>
      </NewFeedTitle>
      <Main>
        <Profile>
          <ProfileAvatar>
            {uploadFileUrl ? (
              <AvatarImage
                src={optimizeImage(uploadFileUrl, 120)}
                alt="profile_edit_image"
              />
            ) : (
              <UserIcon66 />
            )}
          </ProfileAvatar>
          <EditButton onClick={handleClick}>
            프로필 사진 변경
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
              accept=".png, .jpg, .jpeg"
            />
            <Item>
              <Span>
                <TitleLabel>닉네임</TitleLabel>
                <WarningWrapper>
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
                </WarningWrapper>
              </Span>
              <RuleWrapper>
                <NicknameWrapper>
                  <NonBorderInput
                    id="editNickname"
                    type="text"
                    {...getFieldProps('editNickname')}
                    onChange={onChangeNickanme}
                    placeholder={user.nickname}
                  />
                  <NickNameRuleLabel />
                </NicknameWrapper>
              </RuleWrapper>
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
              <Span>
                <TitleLabel>자기소개 (200자 제한)</TitleLabel>
                <BioDescription>*사이트 링크 추가 가능</BioDescription>
              </Span>
              <IntroductionInput
                id="editIntroduction"
                {...getFieldProps('editIntroduction')}
                placeholder={user.bio}
              />
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

const BioDescription = styled.div`
  font-size: 14px;

  font-weight: normal;
  line-height: 160%;
  color: ${grey060};
`

const TitleLabel = styled.div``

const WarningWrapper = styled.div``

const RuleWrapper = styled.div`
  position: relative;
`

const NewFeedTitle = styled(FeedTitle)`
  padding: 28px 24px 17px 24px;
`

const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid ${grey030};
  border-radius: 8px;

  overflow: hidden;
`

const Input = styled.input`
  background: #ffffff;
  width: 100%;
  height: 45px;

  padding: 10px 22px;

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
  width: 100%;
`

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const WarningLabel = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;

  color: ${red050};
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
  padding: 14px 42px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  border-radius: 7px;

  background: ${(p) => (p.disabled ? grey050 : antblue050)};
  color: ${grey010};
  border: ${(props) =>
    props.disabled ? `1px solid ${grey050}` : `1px solid ${antblue050}`};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`

const IntroductionInput = styled.textarea`
  width: 100%;
  height: 170px;
  background: #ffffff;

  border: 1px solid ${grey030};
  border-radius: 8px;
  resize: none;
  outline: none;
  padding: 14px 22px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
  & > ::placeholder {
    color: ${grey050};
    font-size: 15px;
  }
`

const Block = styled.div`
  padding-bottom: 30px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  padding: 0 14px;
  border-top: 1px solid ${grey020};
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-top: 19px;
`

const Span = styled.span`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;

  color: ${grey080};
`

const FormWrapper = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    row-gap: 34px;
  }
`

const ProfileAvatar = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid ${grey030};

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  cursor: pointer;
`

const EditButton = styled.div`
  padding: 6px 11px;
  position: relative;

  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${grey050};
  border: 1px solid ${grey050};
  box-sizing: border-box;
  border-radius: 3px;

  cursor: pointer;
`

const HiddenInput = styled.input`
  display: none;
`
