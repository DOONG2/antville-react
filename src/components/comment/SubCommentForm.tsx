import React, { RefObject, useEffect, useState } from 'react'
import UserIcon from '../../static/svg/UserIcon'
import { useRootState } from '../common/hooks/useRootState'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
import {
  AvatarImage,
  BodyLengthView,
  ButtonWrapper,
  Form,
  FormInner,
  InputWrapper,
  LoginBlock,
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
import optimizeImage from '../../lib/utils/optimizeImage'
import { grey040 } from '../../lib/styles/colors'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'

interface Props {
  parentCommentId?: number
  inputRef: RefObject<ReactQuill>
  setBody: (value: string) => void
  body: string
}

function SubCommentForm({ parentCommentId, inputRef, setBody, body }: Props) {
  const user = useRootState((state) => state.user)
  const { setIsOpenLoginForm } = viewSlice.actions
  const [isFocusInput, setIsFocusInput] = useState(false)
  const [bodyLength, setBodyLength] = useState(0)
  const [uploadImage, setUploadImage] = useState<File>()
  const [gifDto, setGifDto] = useState<GifDto>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer>()

  const dispatch = useDispatch()

  const { id: postId } = useParams<{ id: string }>()

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
    <NewForm onSubmit={onSubmit}>
      {!user && (
        <LoginBlock
          onClick={() => {
            dispatch(setIsOpenLoginForm(true))
          }}
        />
      )}
      <FormInner>
        <UserIconWrapper>
          {user?.profileImg ? (
            <AvatarImage
              src={optimizeImage(user.profileImg, 120)}
              alt="post_form_avatar"
            />
          ) : (
            <UserIcon />
          )}
        </UserIconWrapper>
        <BorderWrapper>
          <InputWrapper isFocus={isFocusInput}>
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
              {isFocusInput && (
                <>
                  <BodyLengthView isLimited={bodyLength > 1000}>
                    {1000 - bodyLength}
                  </BodyLengthView>
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
                </>
              )}
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
            </NewPostInnerButtonsWrapper>
          </InputWrapper>
        </BorderWrapper>
      </FormInner>
    </NewForm>
  )
}

const NewPostInnerButtonsWrapper = styled(PostInnerButtonsWrapper)`
  column-gap: 12px;
  justify-content: right;
`

const NewForm = styled(Form)`
  border-bottom: none;
`

const BorderWrapper = styled.div`
  display: flex;
  column-gap: 19px;
  padding: 10px;
  width: 530px;
  border: 1px solid ${grey040};
  box-sizing: border-box;
  border-radius: 10px;
`

export default SubCommentForm
