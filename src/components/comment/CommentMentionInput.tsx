import React, { useRef } from 'react'
import { SuggestionDataItem } from 'react-mentions'
import useElementSize from '../common/hooks/useElementSize'
import postSearchStock from '../../lib/api/stock/postSearchStock'
import getSearchUser from '../../lib/api/user/getSearchUser'
import {
  Margin,
  MentionInput,
  MentionItem,
  MentionSubItem,
  PostMention,
  SuggestionWrapper,
} from '../../lib/styles/post'

interface Props {
  isFocusInput: boolean
  setIsFocusInput: (value: boolean) => void
  setBody: (value: string) => void
  body: string
}
export default function CommnetMentionInput({
  isFocusInput,
  setIsFocusInput,
  setBody,
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
          setBody(e.target.value)
        }}
        value={body}
        placeholder={'댓글을 입력해주세요.'}
        autoComplete="off"
        onFocus={() => {
          setIsFocusInput(true)
        }}
        isfocus={isFocusInput.toString()}
        scrollheight={scrollHeight}
        inputRef={textRef}
      >
        <PostMention
          markup="$[__display__](comment:__id__)"
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
          markup="@[__display__](comment:__id__)"
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
