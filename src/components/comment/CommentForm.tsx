import React, { RefObject, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../static/svg/GifUploadButton'
import PictureUploadButton from '../../static/svg/PictureUploadButton'
import UserIcon50 from '../../static/svg/UserIcon50'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
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
import { useParams } from 'react-router-dom'
import PreviewImage from '../post/PreviewImage'
import commentSlice from '../../reducers/Slices/comment'
import CommentEditor from './CommentEditor'
import useCommentMutation from './hooks/useCommentMutation'
import postCommentFormData from '../../lib/api/comment/postCommentFormData'
import { commentEvent } from '../../lib/utils/ga'
import optimizeImage from '../../lib/utils/optimizeImage'

interface Props {
  parentCommentId?: number
  inputRef?: RefObject<any>
}

function CommentForm({ parentCommentId, inputRef }: Props) {
  const user = useRootState((state) => state.user)
  const { isFocusInput, body, bodyLength } = useRootState(
    (state) => state.comment
  )
  const { setIsFocusInput, setBody } = commentSlice.actions
  const { setIsOpenLoginForm } = viewSlice.actions
  const [uploadImage, setUploadImage] = useState<File>()
  const [gifDto, setGifDto] = useState<GifDto>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer>()

  const { id: postId } = useParams<{ id: string }>()

  const dispatch = useDispatch()

  const { mutation } = useCommentMutation({
    callback: (formData: FormData) => postCommentFormData(formData),
  })

  const reset = () => {
    setUploadImage(undefined)
    dispatch(setIsFocusInput(false))
    setGifDto(undefined)
    dispatch(setBody(''))
    setPreviewUrl(undefined)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate({ body, postId, gifDto, uploadImage, parentCommentId })
    reset()
    commentEvent()
  }

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    if (previewUrl !== undefined) dispatch(setIsFocusInput(true))
  }, [previewUrl])

  return (
    <Form onSubmit={onSubmit}>
      <FormInner>
        <UserIconWrapper>
          {user?.profileImg ? (
            <AvatarImage
              src={optimizeImage(user.profileImg, 120)}
              alt="comment_form_avatar"
            />
          ) : (
            <UserIcon50 />
          )}
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusInput}>
          {user ? (
            <>
              <CommentEditor inputRef={inputRef} />
              <PreviewImage
                previewUrl={previewUrl}
                setPreviewUrl={setPreviewUrl}
                setUploadImage={setUploadImage}
                setGifDto={setGifDto}
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
                          setPreviewUrl={setPreviewUrl}
                        />
                      </PostItem>
                    </PostInnerButtonsWrapper>
                    <PostInnerButtonsWrapper>
                      <PostItem>
                        <GifUpload
                          setUploadImage={setUploadImage}
                          setGifDto={setGifDto}
                          setPreviewUrl={setPreviewUrl}
                        />
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
                댓글을 입력해주세요.
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
              </PostInnerButtonsWrapper>
            </>
          )}
        </InputWrapper>
      </FormInner>
    </Form>
  )
}

export default CommentForm
