import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import StockDownButton from '../../assets/svg/StockDownButton'
import StockUpButton from '../../assets/svg/StockUpButton'
import UserIcon from '../../assets/svg/UserIcon'
import { useRootState } from '../../hooks/useRootState'
import postSlice from '../../reducers/Slices/post'
import StockUpButtonClicked from '../../assets/svg/StockUpButtonClicked'
import StockDownButtonClicked from '../../assets/svg/StockDownButtonClicked'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../Upload/ImageUpload'
import GifUpload from '../Upload/GifUpload'
import PreviewImage from './PreviewImage'
import PostMentionInput from './PostMentionInput'
import {
  EmailCheck,
  Form,
  FormInner,
  InputWrapper,
  LockedLabel,
  NewFontBlue,
  PostInnerButtonsWrapper,
  PostItem,
  SubmitButton,
  UserIconWrapper,
} from '../../mds/styled/post'
import usePostData from '../../hooks/usePostData'
import { GifDto } from '../../types/post'
import { Post } from '../../api/types'

interface Props {
  addPost?: (value?: Post) => void
}

const PostForm = ({ addPost }: Props) => {
  const {
    user,
    post: {
      isUp,
      isDown,
      submitData: { body, sentiment },
    },
    view: { isFocusPostInput },
  } = useRootState((state) => state)
  const { setIsUp, setIsDown, setSentiment } = postSlice.actions
  const { setIsOpenLoginForm, setIsFocusPostInput } = viewSlice.actions
  const [uploadImage, setUploadImage] = useState<File | undefined>()
  const [gifDto, setGifDto] = useState<GifDto | undefined>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  )

  const { postDataApi } = usePostData({ addPost })
  const dispatch = useDispatch()

  useEffect(() => {
    if (previewUrl !== null) dispatch(setIsFocusPostInput(true))
  }, [previewUrl])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        postDataApi({ body, sentiment, gifDto, uploadImage })
        setUploadImage(undefined)
        setIsFocusPostInput(false)
        setGifDto(undefined)
        setPreviewUrl(null)
      }}
    >
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
                  <PreviewImage
                    setPreviewUrl={setPreviewUrl}
                    previewUrl={previewUrl}
                  />
                  <PostInnerButtonsWrapper>
                    <PostItem
                      onClick={() => {
                        dispatch(setIsUp(true))
                        dispatch(setSentiment('UP'))
                      }}
                    >
                      {isUp ? <StockUpButtonClicked /> : <StockUpButton />}
                    </PostItem>
                    <PostItem
                      onClick={() => {
                        dispatch(setIsDown(true))
                        dispatch(setSentiment('DOWN'))
                      }}
                    >
                      {isDown ? (
                        <StockDownButtonClicked />
                      ) : (
                        <StockDownButton />
                      )}
                    </PostItem>
                    <PostItem>
                      <ImageUpload
                        setUploadImage={setUploadImage}
                        setGifDto={setGifDto}
                        setPreviewUrl={setPreviewUrl}
                      />
                    </PostItem>
                    <PostItem>
                      <GifUpload
                        setUploadImage={setUploadImage}
                        setGifDto={setGifDto}
                        setPreviewUrl={setPreviewUrl}
                      />
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
