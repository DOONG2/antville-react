import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { grey010, grey030, grey050, grey080 } from '../../mds/styled/colors'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import StockDownButton from '../../assets/svg/StockDownButton'
import StockUpButton from '../../assets/svg/StockUpButton'
import UserIcon from '../../assets/svg/UserIcon'
import { useRootState } from '../../hooks/useRootState'
import { FontBlue } from '../../mds/styled/texts'
import postSlice from '../../reducers/Slices/post'
import StockUpButtonClicked from '../../assets/svg/StockUpButtonClicked'
import StockDownButtonClicked from '../../assets/svg/StockDownButtonClicked'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../Upload/ImageUpload'
import GifUpload from '../Upload/GifUpload'
import PreviewImage from './PreviewImage'
import PostMentionInput from './PostMentionInput'

const Form = styled.form`
  position: relative;
`

const FormInner = styled.div`
  display: flex;
  justify-content: space-between;

  column-gap: 1.4rem;

  margin-bottom: 13px;
`

const InputWrapper = styled.div<{ isFocus: boolean }>`
  width: 56.1rem;

  padding: 12px 10px;

  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: ${(p) => (p.isFocus ? 'column' : 'row')};
`

const PostInnerButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;
`

const PostItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;

  cursor: pointer;
`

const SubmitButton = styled.button`
  width: 55px;
  height: 29px;

  border-radius: 3px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  margin-top: 9px;

  border: ${(props) =>
    props.disabled ? `1px solid ${grey030}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey030}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  color: ${grey010};
`

const UserIconWrapper = styled.div`
  margin-top: 3px;
`

const EmailCheck = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};
`

const NewFontBlue = styled(FontBlue)`
  cursor: pointer;
`

const LockedLabel = styled.div`
  align-self: center;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${grey050};
`

const PostForm = () => {
  const {
    user,
    post: {
      isUp,
      isDown,
      previewUrl,
      sumitData: { body },
    },
    view: { isFocusPostInput },
  } = useRootState((state) => state)
  const { setIsUp, setIsDown } = postSlice.actions
  const { setIsOpenLoginForm, setIsFocusPostInput } = viewSlice.actions

  const dispatch = useDispatch()

  useEffect(() => {
    if (previewUrl !== null) dispatch(setIsFocusPostInput(true))
  }, [previewUrl])

  return (
    <Form onSubmit={() => {}}>
      <FormInner>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusPostInput}>
          {user ? (
            <>
              {user.isEmailVerified ? (
                <>
                  <PostMentionInput />
                  <PreviewImage />
                  <PostInnerButtonsWrapper>
                    <PostItem onClick={() => dispatch(setIsUp(true))}>
                      {isUp ? <StockUpButtonClicked /> : <StockUpButton />}
                    </PostItem>
                    <PostItem onClick={() => dispatch(setIsDown(true))}>
                      {isDown ? (
                        <StockDownButtonClicked />
                      ) : (
                        <StockDownButton />
                      )}
                    </PostItem>
                    <PostItem>
                      <ImageUpload />
                    </PostItem>
                    <PostItem>
                      <GifUpload />
                    </PostItem>
                  </PostInnerButtonsWrapper>
                </>
              ) : (
                <EmailCheck>
                  게시글 작성을 위해 이메일 인증을 완료해주세요.{' '}
                  <NewFontBlue>이메일 인증 요청하기</NewFontBlue>
                </EmailCheck>
              )}
            </>
          ) : (
            <>
              <LockedLabel onClick={() => dispatch(setIsOpenLoginForm(true))}>
                당신의 생각을 공유해주세요! ($ 태그 사용 후, 종목 입력)
              </LockedLabel>
              <PostInnerButtonsWrapper
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                <PostItem>
                  <StockUpButton />
                </PostItem>
                <PostItem>
                  <StockDownButton />
                </PostItem>
                <PostItem>
                  <PictureUploadButton />
                </PostItem>
                <PostItem>
                  <GifUploadButton />
                </PostItem>
              </PostInnerButtonsWrapper>
            </>
          )}
        </InputWrapper>

        <SubmitButton type="submit" disabled={body.length < 1}>
          게시
        </SubmitButton>
      </FormInner>
    </Form>
  )
}

export default PostForm
