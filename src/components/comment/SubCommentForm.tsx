import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../static/svg/GifUploadButton'
import PictureUploadButton from '../../static/svg/PictureUploadButton'
import UserIcon from '../../static/svg/UserIcon'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../upload/ImageUpload'
import GifUpload from '../upload/GifUpload'
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
} from '../../lib/styles/post'
import styled from '@emotion/styled'
import { GifDto } from '../../types/post'
import useCommentData from './hooks/useCommentData'
import { useParams } from 'react-router-dom'
import PreviewImage from '../post/PreviewImage'
import { CommentObject } from '../../lib/api/comment/types'
import SubCommentEditor from './SubCommentEditor'

interface Props {
  parentCommentId?: string
  addComment?: (value?: CommentObject) => void
}

function SubCommentForm({ parentCommentId, addComment }: Props) {
  const { user } = useRootState((state) => state)
  const [isFocusInput, setIsFocusInput] = useState(false)
  const [body, setBody] = useState('')
  const { setIsOpenLoginForm } = viewSlice.actions
  const [uploadImage, setUploadImage] = useState<File>()
  const [gifDto, setGifDto] = useState<GifDto>()
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  )

  const { id: postId } = useParams<{ id: string }>()

  const dispatch = useDispatch()

  const { postDataApi } = useCommentData({ addComment })

  useEffect(() => {
    if (previewUrl !== null) setIsFocusInput(true)
  }, [previewUrl])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        postDataApi({ body, gifDto, uploadImage, postId, parentCommentId })
        setUploadImage(undefined)
        setIsFocusInput(false)
        setGifDto(undefined)
        setBody('')
        setPreviewUrl(null)
      }}
    >
      <FormInner>
        <UserIconWrapper>
          <UserIcon />
        </UserIconWrapper>
        <InputWrapper isFocus={isFocusInput}>
          {user ? (
            <>
              {user.isEmailVerified ? (
                <>
                  <SubCommentEditor
                    body={body}
                    setBody={setBody}
                    setIsFocusInput={setIsFocusInput}
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

const NewPostInnerButtonsWrapper = styled(PostInnerButtonsWrapper)`
  column-gap: 12px;
`

export default SubCommentForm
