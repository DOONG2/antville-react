import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import UserIcon from '../../assets/svg/UserIcon'
import { useRootState } from '../../hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../Upload/ImageUpload'
import GifUpload from '../Upload/GifUpload'
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
import styled from '@emotion/styled'
import CommnetMEntionInput from './CommnetMEntionInput'
import { GifDto } from '../../types/post'
import useCommentData from '../../hooks/useCommentData'
import { useParams } from 'react-router-dom'
import PreviewImage from './PreviewImage'

interface Props {
  parentCommentId?: string
}

const NewPostInnerButtonsWrapper = styled(PostInnerButtonsWrapper)`
  column-gap: 12px;
`

const CommentForm = ({ parentCommentId }: Props) => {
  const { user } = useRootState((state) => state)

  const [isFocusCommentInput, setIsFocusCommentInput] = useState<boolean>(false)
  const [uploadImage, setUploadImage] = useState<File | undefined>()
  const [gifDto, setGifDto] = useState<GifDto | undefined>()
  const [body, setCommentBody] = useState<string>('')
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  )
  const { id: postId } = useParams<{ id: string }>()

  const { setIsOpenLoginForm } = viewSlice.actions

  const dispatch = useDispatch()

  const { postDataApi } = useCommentData()

  useEffect(() => {
    if (previewUrl !== null) setIsFocusCommentInput(true)
  }, [previewUrl])

  return (
    <Form
      onSubmit={(e) => {
        postDataApi({ body, gifDto, uploadImage, postId, parentCommentId })
      }}
    >
      <FormInner>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusCommentInput}>
          {user ? (
            <>
              {user.isEmailVerified ? (
                <>
                  <CommnetMEntionInput
                    isFocusCommentInput={isFocusCommentInput}
                    setIsFocusCommentInput={setIsFocusCommentInput}
                    setCommentBody={setCommentBody}
                    body={body}
                  />
                  <PreviewImage
                    previewUrl={previewUrl}
                    setPreviewUrl={setPreviewUrl}
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
                <EmailCheck>
                  게시글 작성을 위해 이메일 인증을 완료해주세요.{' '}
                  <NewFontBlue>이메일 인증 요청하기</NewFontBlue>
                </EmailCheck>
              )}
            </>
          ) : (
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

        <SubmitButton type="submit" disabled={body.length < 1}>
          게시
        </SubmitButton>
      </FormInner>
    </Form>
  )
}

export default CommentForm
