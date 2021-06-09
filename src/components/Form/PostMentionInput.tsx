import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import { Mention, MentionsInput, SuggestionDataItem } from 'react-mentions'
import { useDispatch } from 'react-redux'
import { grey020, grey060, grey080 } from '../../mds/styled/colors'
import useElementSize from '../../hooks/useElementSize'
import postSearchStock from '../../api/stock/postSearchStock'
import viewSlice from '../../reducers/Slices/view'
import { useRootState } from '../../hooks/useRootState'
import postSlice from '../../reducers/Slices/post'
import getSearchUser from '../../api/user/getSearchUser'

const dynamicStyle = (props: { isfocus: string; scrollheight: number }) => css`
  height: ${props.isfocus === 'true' ? `76px` : '22px'};
  min-height: ${props.isfocus === 'true' ? `${props.scrollheight}px` : '22px'};
`

const MentionInput = styled(MentionsInput)`
  align-self: center;
  width: 100%;
  font-size: 16px;
  line-height: 1.3;

  div.suggestions {
    margin-top: 16px;
  }

  ${dynamicStyle}
  padding: 0;

  textarea {
    font-size: 16px;
    line-height: 2.2rem;
    outline: none;
    border: none;
    resize: none;

    color: #202020;
    background-color: #fff;

    &::placeholder {
      color: #aeaeae;
      font-size: 16px;
    }
  }
`
const PostMention = styled(Mention)`
  font-size: 16px;

  background-color: #d6e6fd;
`

const MentionItem = styled.div<{ focus: boolean }>`
  width: 264px;
  padding: 10px 12px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${grey080};
  background-color: ${(p) => (p.focus ? grey020 : '#fff')};

  border-bottom: 0.225872px solid #e0e0e0;
  border-right: 0.225872px solid #e0e0e0;
  border-left: 0.225872px solid #e0e0e0;
`

const Margin = styled.div`
  margin-top: 12px;

  border-bottom: 0.225872px solid #e0e0e0;
`

const SuggestionWrapper = styled.div``

const MentionSubItem = styled.div`
  font-size: 11px;
  line-height: 13px;
  margin-top: 3px;

  color: ${grey060};
`

const UserAvatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;

  margin-right: 14px;

  background-color: blue;
`

export default function PostMentionInput() {
  const { setIsFocusPostInput } = viewSlice.actions
  const { setBody } = postSlice.actions
  const {
    view: { isFocusPostInput },
    post: {
      sumitData: { body },
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
        id="postBody"
        onChange={(e) => {
          dispatch(setBody(e.target.value))
        }}
        value={body}
        placeholder={
          '당신의 생각을 공유해주세요! ($ 태그 사용 후, 종목  입력) '
        }
        autoComplete="off"
        onFocus={() => {
          dispatch(setIsFocusPostInput(true))
        }}
        isfocus={isFocusPostInput.toString()}
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
