import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import StockDownButton from '../../assets/svg/StockDownButton'
import StockUpButton from '../../assets/svg/StockUpButton'
import UserIcon from '../../assets/svg/UserIcon'
import { useRootState } from '../../hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import ImageUpload from '../Upload/ImageUpload'
import GifUpload from '../Upload/GifUpload'
import PreviewImage from './PreviewImage'
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

const NewPostInnerButtonsWrapper = styled(PostInnerButtonsWrapper)`
  column-gap: 12px;
`

const CommentForm = () => {
  const {
    user,
    post: {
      previewUrl,
      commentSubmitData: { body },
    },
  } = useRootState((state) => state)

  const [isFocusCommentInput, setIsFocusCommentInput] = useState<boolean>(false)
  const [uploadImage, setUploadImage] = useState<File | undefined>()
  const [gifDto, setGifDto] = useState<GifDto | undefined>()
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
        postDataApi({ body, gifDto, uploadImage, postId })
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
                  />
                  <PreviewImage />
                  <NewPostInnerButtonsWrapper>
                    <PostItem>
                      <ImageUpload
                        setUploadImage={setUploadImage}
                        setGifDto={setGifDto}
                      />
                    </PostItem>
                    <PostItem>
                      <GifUpload
                        setUploadImage={setUploadImage}
                        setGifDto={setGifDto}
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
