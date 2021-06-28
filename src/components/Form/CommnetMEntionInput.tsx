import React, { useRef } from 'react'
import { SuggestionDataItem } from 'react-mentions'
import useElementSize from '../../hooks/useElementSize'
import postSearchStock from '../../api/stock/postSearchStock'
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
  setCommentBody: (value: string) => void
  body: string
}
export default function PostMentionInput({
  isFocusCommentInput,
  setIsFocusCommentInput,
  setCommentBody,
  body,
}: Props) {
  const textRef = useRef<any>(null)
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
          setCommentBody(e.target.value)
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
