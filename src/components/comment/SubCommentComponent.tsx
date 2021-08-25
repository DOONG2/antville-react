import styled from '@emotion/styled'
import { RefObject, useState } from 'react'
import ReactQuill from 'react-quill'
import getSubCommentsById from '../../lib/api/comment/getSubCommentsById'
import { Comment } from '../../lib/api/comment/types'
import { grey060 } from '../../lib/styles/colors'
import { sub_comment_query_key } from '../../lib/variable'
import CommentArrow from '../../static/svg/CommentArrow'
import useInfiniteSubComment from './hooks/useInfiniteSubComment'
import SubCommentForm from './SubCommentForm'
import SubCommentSection from './SubCommentSection'

type Props = {
  comment: Comment
  setIsOpen: (value: boolean) => void
  isOpen: boolean
  inputRef: RefObject<ReactQuill>
}

export default function SubCommentComponent({
  comment,
  setIsOpen,
  isOpen,
  inputRef,
}: Props) {
  const { subComments, hasNextPage, onLoadMore } = useInfiniteSubComment({
    key: [sub_comment_query_key, comment.id],
    callback: (cursor) => getSubCommentsById(comment.id, cursor),
    isOpen,
  })
  const [body, setBody] = useState('')

  return (
    <>
      <SubCommentWrapper>
        {' '}
        {comment.commentCount.nextCommentCount > 0 && (
          <ExtendWrapper>
            <CommentArrow />
            <ExtendButton
              onClick={() => {
                if (!isOpen) return setIsOpen(true)
                if (!hasNextPage) return setIsOpen(false)
                onLoadMore()
              }}
            >
              {!isOpen
                ? `답글 ${comment.commentCount.nextCommentCount}개 보기`
                : subComments && (
                    <IsLoadedWrapper isLoaded={true}>
                      {!hasNextPage
                        ? '답글 숨기기'
                        : `이전 답글 ${
                            comment.commentCount.nextCommentCount -
                            subComments.length
                          }개 보기`}
                    </IsLoadedWrapper>
                  )}
            </ExtendButton>
          </ExtendWrapper>
        )}
      </SubCommentWrapper>
      <SubCommentSection
        subComments={subComments}
        isOpen={isOpen}
        inputRef={inputRef}
        setBody={setBody}
        body={body}
      />
      <BottomWrapper>
        <CommentFormWrapper isOpen={isOpen}>
          <SubCommentForm
            parentCommentId={comment.id}
            inputRef={inputRef}
            setBody={setBody}
            body={body}
          />
        </CommentFormWrapper>
      </BottomWrapper>
    </>
  )
}

const BottomWrapper = styled.div`
  margin-left: 97px;
`

const SubCommentWrapper = styled.div`
  margin-left: 97px;
`

const IsLoadedWrapper = styled.div<{ isLoaded: boolean }>`
  display: ${(p) => (p.isLoaded ? 'block' : 'none')};
`

const ExtendWrapper = styled.div`
  padding-top: 7px;
  display: flex;
  align-items: center;

  padding-bottom: 12px;
`

const ExtendButton = styled.div`
  padding-left: 10px;
  font-size: 12px;
  line-height: 14px;

  color: ${grey060};

  cursor: pointer;
`

const CommentFormWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? 'block' : 'none')};
  margin-top: 20px;
`
