import React, { useRef } from 'react'
import { SuggestionDataItem } from 'react-mentions'
import { useDispatch } from 'react-redux'
import useElementSize from '../../hooks/useElementSize'
import postSearchStock from '../../api/stock/postSearchStock'
import viewSlice from '../../reducers/Slices/view'
import { useRootState } from '../../hooks/useRootState'
import postSlice from '../../reducers/Slices/post'
import getSearchUser from '../../api/user/getSearchUser'
import {
  Margin,
  MentionInput,
  MentionItem,
  MentionSubItem,
  PostMention,
  SuggestionWrapper,
} from '../../mds/styled/post'

interface Props {
  isFocusCommentInput: boolean
  setIsFocusCommentInput: (value: boolean) => void
}
export default function PostMentionInput({
  isFocusCommentInput,
  setIsFocusCommentInput,
}: Props) {
  const { setCommentBody } = postSlice.actions
  const {
    post: {
      commentSubmitData: { body },
    },
  } = useRootState((state) => state)
  const textRef = useRef<any>(null)
  const dispatch = useDispatch()
  const { scrollHeight } = useElementSize(textRef)

  const postQueryStock = (
    query: string,
    callback: (data: SuggestionDataItem[]) => void
  ) => {
    if (!query) return
    postSearchStock(query)
      .then((result) =>
        result.map((stock) => ({ display: stock.krName, id: stock.id }))
      )
      .then(callback)
  }

  const getQueryUser = (
    query: string,
    callback: (data: SuggestionDataItem[]) => void
  ) => {
    if (!query) return
    getSearchUser(query)
      .then((result) =>
        result.map((user) => ({ display: user.nickname, id: user.id }))
      )
      .then(callback)
  }

  return (
    <>
      <MentionInput
        id="commnetBody"
        onChange={(e) => {
          dispatch(setCommentBody(e.target.value))
        }}
        value={body}
        placeholder={'댓글을 입력해주세요.'}
        autoComplete="off"
        onFocus={() => {
          setIsFocusCommentInput(true)
        }}
        isfocus={isFocusCommentInput.toString()}
        scrollheight={scrollHeight}
        inputRef={textRef}
      >
        <PostMention
          displayTransform={(id, display) => `$${display}`}
          trigger="$"
          data={postQueryStock}
          renderSuggestion={(
            suggestion,
            search,
            highlightedDisplay,
            index,
            focused
          ) => (
            <>
              {index === 0 && <Margin />}
              <SuggestionWrapper>
                <MentionItem focus={focused}>
                  {highlightedDisplay}
                  <MentionSubItem>BTC/KRW</MentionSubItem>
                </MentionItem>
              </SuggestionWrapper>
            </>
          )}
        />
        <PostMention
          displayTransform={(id, display) => `@${display}`}
          trigger="@"
          data={getQueryUser}
          renderSuggestion={(
            suggestion,
            search,
            highlightedDisplay,
            index,
            focused
          ) => (
            <>
              {index === 0 && <Margin />}
              <SuggestionWrapper>
                <MentionItem focus={focused}>{highlightedDisplay}</MentionItem>
              </SuggestionWrapper>
            </>
          )}
        />
      </MentionInput>
    </>
  )
}
