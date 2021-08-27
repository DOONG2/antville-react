import React, { RefObject, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../static/svg/GifUploadButton'
import PictureUploadButton from '../../static/svg/PictureUploadButton'
import UserIcon from '../../static/svg/UserIcon'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
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
import styled from '@emotion/styled'
import { GifDto } from '../../types/post'
import { useParams } from 'react-router-dom'
import PreviewImage from '../post/PreviewImage'

import SubCommentEditor from './SubCommentEditor'
import postCommentFormData from '../../lib/api/comment/postCommentFormData'
import useCommentMutation from './hooks/useCommentMutation'
import ReactQuill from 'react-quill'

interface Props {
  parentCommentId?: number
  inputRef: RefObject<ReactQuill>
  setBody: (value: string) => void
  body: string
}

function SubCommentForm({ parentCommentId, inputRef, setBody, body }: Props) {
  const user = useRootState((state) => state.user)
  const [isFocusInput, setIsFocusInput] = useState(false)
  const [bodyLength, setBodyLength] = useState(0)
  const { setIsOpenLoginForm } = viewSlice.actions
  const [uploadImage, setUploadImage] = useState<File>()
  const [gifDto, setGifDto] = useState<GifDto>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer>()

  const { id: postId } = useParams<{ id: string }>()

  const dispatch = useDispatch()

  const { mutation } = useCommentMutation({
    callback: (formData: FormData) => postCommentFormData(formData),
  })

  useEffect(() => {
    if (previewUrl !== undefined) setIsFocusInput(true)
  }, [previewUrl])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate({ body, postId, gifDto, uploadImage, parentCommentId })
    setUploadImage(undefined)
    setIsFocusInput(false)
    setGifDto(undefined)
    setBody('')
    setPreviewUrl(undefined)
  }

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
              <SubCommentEditor
                body={body}
                setBody={setBody}
                isFocusInput={isFocusInput}
                setIsFocusInput={setIsFocusInput}
                setBodyLength={setBodyLength}
                inputRef={inputRef}
              />
              <PreviewImage
                previewUrl={previewUrl}
                setPreviewUrl={setPreviewUrl}
                setUploadImage={setUploadImage}
                setGifDto={setGifDto}
              />
              <NewPostInnerButtonsWrapper>
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
              </NewPostInnerButtonsWrapper>
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
                댓글을 입력해주세요.
              </LockedLabel>
              <NewPostInnerButtonsWrapper
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                <PostItem>
                  <PictureUploadButton />
                </PostItem>
                <PostItem>
                  <GifUploadButton />
                </PostItem>
              </NewPostInnerButtonsWrapper>
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

const NewPostInnerButtonsWrapper = styled(PostInnerButtonsWrapper)`
  column-gap: 12px;
`

export default SubCommentForm
