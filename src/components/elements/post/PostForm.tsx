import React from 'react'
import { useDispatch } from 'react-redux'
import { useRootState } from 'src/components/common/hooks/useRootState'
import { setFeedBody } from 'src/features/Feed/FeedSlice'
import { setPostBody } from 'src/features/Post/PostSlice'
import useParsePost from './hooks/useParsePost'
import PostEditor from './PostEditor'

import * as Styled from './Styled'

export default function PostForm() {
  const { body } = useRootState((state) => state.Post)

  const { getBodyOnlyText } = useParsePost()

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const bodyOnlyText = getBodyOnlyText(body)
    dispatch(setFeedBody(bodyOnlyText))
    dispatch(setPostBody(''))
  }

  const dispatch = useDispatch()

  return (
    <Styled.Form>
      <Styled.FormInner>
        <Styled.InputWrapper>
          <PostEditor />
          <Styled.PostInner>
            <Styled.PostInnerButtonsWrapper>
              <Styled.ButtonWrapper>
                <Styled.SubmitButton onClick={onClick}>
                  게시
                </Styled.SubmitButton>
              </Styled.ButtonWrapper>
            </Styled.PostInnerButtonsWrapper>
          </Styled.PostInner>
        </Styled.InputWrapper>
      </Styled.FormInner>
    </Styled.Form>
  )
}
