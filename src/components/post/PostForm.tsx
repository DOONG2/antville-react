import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../static/svg/GifUploadButton'
import PictureUploadButton from '../../static/svg/PictureUploadButton'
import StockDownButton from '../../static/svg/StockDownButton'
import StockUpButton from '../../static/svg/StockUpButton'
import UserIcon from '../../static/svg/UserIcon'
import { useRootState } from '../common/hooks/useRootState'
import StockUpButtonClicked from '../../static/svg/StockUpButtonClicked'
import StockDownButtonClicked from '../../static/svg/StockDownButtonClicked'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
import PreviewImage from './PreviewImage'
import {
  BodyLengthView,
  ButtonWrapper,
  Form,
  FormInner,
  InputWrapper,
  LockedLabel,
  PostInnerButtonsWrapper,
  PostItem,
  SubmitButton,
  UserIconWrapper,
} from '../../lib/styles/post'
import { GifDto } from '../../types/post'
import PostEditor from './PostEditor'
import postSlice from '../../reducers/Slices/post'
import formSlice from '../../reducers/Slices/form'
import usePostMutation from './hooks/usePostMutation'
import postFormData from '../../lib/api/post/postFormData'
import { useParams } from 'react-router-dom'

const PostForm = () => {
  const user = useRootState((state) => state.user)
  const { body, isFocusInput, bodyLength } = useRootState((state) => state.post)
  const { previewUrl } = useRootState((state) => state.form)
  const { setIsOpenLoginForm } = viewSlice.actions
  const { setBody, setIsFocusInput } = postSlice.actions
  const { setPreviewUrl } = formSlice.actions
  const [uploadImage, setUploadImage] = useState<File>()
  const [gifDto, setGifDto] = useState<GifDto>()
  const { ticker } = useParams<{ ticker: string }>()

  const [isOnUp, setIsOnUp] = useState(false)
  const [isOnDown, setIsOnDown] = useState(false)
  const [sentiment, setSentiment] = useState<string>()

  const dispatch = useDispatch()

  const { mutation } = usePostMutation({
    callback: (formData: FormData) => postFormData(formData),
  })

  useEffect(() => {
    if (previewUrl !== undefined) dispatch(setIsFocusInput(true))
  }, [previewUrl])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate({ body, sentiment, gifDto, uploadImage })
    setUploadImage(undefined)
    dispatch(setIsFocusInput(false))
    setGifDto(undefined)
    dispatch(setBody(''))
    dispatch(setPreviewUrl(undefined))
    setIsOnUp(false)
    setIsOnDown(false)
  }

  useEffect(() => {
    dispatch(setBody(''))
  }, [ticker])

  return (
    <Form onSubmit={onSubmit}>
      <FormInner>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusInput}>
          {user ? (
            <>
              {/* {user.isEmailVerified ? (
                <> */}
              <PostEditor />
              <PreviewImage
                previewUrl={previewUrl}
                setPreviewUrl={(value) => dispatch(setPreviewUrl(value))}
                setGifDto={setGifDto}
                setUploadImage={setUploadImage}
              />
              <PostInnerButtonsWrapper>
                <PostItem
                  onClick={() => {
                    setIsOnUp(!isOnUp)
                    if (!isOnUp) {
                      setIsOnDown(false)
                      setSentiment('UP')
                    }
                  }}
                >
                  {isOnUp ? <StockUpButtonClicked /> : <StockUpButton />}
                </PostItem>
                <PostItem
                  onClick={() => {
                    setIsOnDown(!isOnDown)
                    if (!isOnDown) {
                      setIsOnUp(false)
                      setSentiment('DOWN')
                    }
                  }}
                >
                  {isOnDown ? <StockDownButtonClicked /> : <StockDownButton />}
                </PostItem>
                <PostItem>
                  <ImageUpload
                    setUploadImage={setUploadImage}
                    setGifDto={setGifDto}
                    setPreviewUrl={(value) => dispatch(setPreviewUrl(value))}
                  />
                </PostItem>
                <PostItem>
                  <GifUpload
                    setUploadImage={setUploadImage}
                    setGifDto={setGifDto}
                    setPreviewUrl={(value) => dispatch(setPreviewUrl(value))}
                  />
                </PostItem>
              </PostInnerButtonsWrapper>
            </>
          ) : (
            //   ) : (
            //     <EmailCheck>
            //       게시글 작성을 위해 이메일 인증을 완료해주세요.{' '}
            //       <NewFontBlue>이메일 인증 요청하기</NewFontBlue>
            //     </EmailCheck>
            //   )}
            // </>
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
        <ButtonWrapper>
          <SubmitButton
            type="submit"
            disabled={
              body.length < 1 || body === '<p><br></p>' || bodyLength > 1000
            }
          >
            게시
          </SubmitButton>
          {isFocusInput && (
            <BodyLengthView isLimited={bodyLength > 1000}>
              {1000 - bodyLength}
            </BodyLengthView>
          )}
        </ButtonWrapper>
      </FormInner>
    </Form>
  )
}

export default PostForm
