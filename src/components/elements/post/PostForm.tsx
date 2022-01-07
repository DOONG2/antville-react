import React from 'react'
import { useDispatch } from 'react-redux'
import { useRootState } from 'src/components/common/hooks/useRootState'
import { setFeedBody } from 'src/features/Feed/FeedSlice'
import { setPostBody } from 'src/features/Post/PostSlice'
import PostEditor from './PostEditor'

import * as Styled from './Styled'

export default function PostForm() {
  const { body } = useRootState((state) => state.Post)
  const dispatch = useDispatch()
  return (
    <Styled.Form>
      <Styled.FormInner>
        <Styled.InputWrapper>
          <PostEditor />
          <Styled.PostInner>
            <Styled.PostInnerButtonsWrapper>
              <Styled.ButtonWrapper>
                <Styled.SubmitButton
                  onClick={(e) => {
                    e.preventDefault()

                    const parser = new DOMParser()
                    const doc = parser.parseFromString(body, 'text/html')
                    const elements = doc.querySelectorAll('p')
                    let bodyOnlyText = ''
                    elements.forEach((el, index) => {
                      if (index === elements.length - 1)
                        return (bodyOnlyText = bodyOnlyText + el.innerText)
                      bodyOnlyText = bodyOnlyText + el.innerText + '\n'
                    })

                    dispatch(setFeedBody(bodyOnlyText))
                    dispatch(setPostBody(''))
                  }}
                >
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
