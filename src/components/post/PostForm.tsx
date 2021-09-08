import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../static/svg/GifUploadButton'
import PictureUploadButton from '../../static/svg/PictureUploadButton'
import StockDownButton from '../../static/svg/StockDownButton'
import StockUpButton from '../../static/svg/StockUpButton'
import { useRootState } from '../common/hooks/useRootState'
import StockUpButtonClicked from '../../static/svg/StockUpButtonClicked'
import StockDownButtonClicked from '../../static/svg/StockDownButtonClicked'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
import PreviewImage from './PreviewImage'
import {
  AvatarImage,
  BodyLengthView,
  ButtonWrapper,
  Form,
  FormInner,
  InputWrapper,
  LockedLabel,
  PostInner,
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
import { postEvent } from '../../lib/utils/ga'
import optimizeImage from '../../lib/utils/optimizeImage'
import UserIcon50 from '../../static/svg/UserIcon50'
import { place_holder_post } from '../../lib/variable'

type Props = {
  extended?: boolean
}

const PostForm = ({ extended }: Props) => {
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
    postEvent()
  }

  useEffect(() => {
    dispatch(setBody(''))
    dispatch(setIsFocusInput(false))
  }, [ticker])

  useEffect(() => {
    extended && dispatch(setIsFocusInput(true))
  }, [])

  return (
    <Form onSubmit={onSubmit}>
      <FormInner>
        <UserIconWrapper>
          {user?.profileImg ? (
            <AvatarImage
              src={optimizeImage(user.profileImg, 120)}
              alt="post_form_avatar"
            />
          ) : (
            <UserIcon50 />
          )}
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusInput}>
          {user ? (
            <>
              <PostEditor />
              <PreviewImage
                previewUrl={previewUrl}
                setPreviewUrl={(value) => dispatch(setPreviewUrl(value))}
                setGifDto={setGifDto}
                setUploadImage={setUploadImage}
              />
              <PostInner>
                {isFocusInput && (
                  <>
                    <PostInnerButtonsWrapper>
                      <BodyLengthView isLimited={bodyLength > 1000}>
                        {1000 - bodyLength}
                      </BodyLengthView>
                    </PostInnerButtonsWrapper>
                    <PostInnerButtonsWrapper>
                      <PostItem>
                        <ImageUpload
                          setUploadImage={setUploadImage}
                          setGifDto={setGifDto}
                          setPreviewUrl={(value) =>
                            dispatch(setPreviewUrl(value))
                          }
                        />
                      </PostItem>
                      <PostItem>
                        <GifUpload
                          setUploadImage={setUploadImage}
                          setGifDto={setGifDto}
                          setPreviewUrl={(value) =>
                            dispatch(setPreviewUrl(value))
                          }
                        />
                      </PostItem>
                    </PostInnerButtonsWrapper>
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
                        {isOnDown ? (
                          <StockDownButtonClicked />
                        ) : (
                          <StockDownButton />
                        )}
                      </PostItem>
                    </PostInnerButtonsWrapper>
                  </>
                )}
                <PostInnerButtonsWrapper>
                  <ButtonWrapper isFocusInput={isFocusInput}>
                    <SubmitButton
                      type="submit"
                      disabled={
                        body.length < 1 ||
                        body === '<p><br></p>' ||
                        bodyLength > 1000
                      }
                    >
                      게시
                    </SubmitButton>
                  </ButtonWrapper>
                </PostInnerButtonsWrapper>
              </PostInner>
            </>
          ) : (
            <>
              <LockedLabel onClick={() => dispatch(setIsOpenLoginForm(true))}>
                {place_holder_post}
              </LockedLabel>
              <PostInnerButtonsWrapper
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                <PostItem>
                  <PictureUploadButton />
                </PostItem>
                <PostItem>
                  <GifUploadButton />
                </PostItem>
                <PostItem>
                  <StockUpButton />
                </PostItem>
                <PostItem>
                  <StockDownButton />
                </PostItem>
              </PostInnerButtonsWrapper>
            </>
          )}
        </InputWrapper>
      </FormInner>
    </Form>
  )
}

export default PostForm
