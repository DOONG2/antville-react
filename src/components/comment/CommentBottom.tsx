import { useRef, useState } from 'react'
import { BottomItem, BottomWrapper, Count } from '../../lib/styles/feed'
import LikeComponent from '../feed/LikeComponent'
import TalkIcon from '../../static/svg/TalkIcon'
import { Comment } from '../../lib/api/comment/types'
import SubCommentComponent from './SubCommentComponent'

type Props = {
  comment: Comment
}

export default function CommentBottom({ comment }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenCommentForm, setIsOpenCommentForm] = useState<boolean>(false)

  const inputRef = useRef<any>(null)

  return (
    <>
      <BottomWrapper>
        <BottomItem>
          <LikeComponent
            count={comment.commentCount.likeCount}
            isLiked={comment.isLikedSelf}
            id={comment.id}
          />
        </BottomItem>
        <BottomItem
          onClick={() => {
            setIsOpenCommentForm(true)
            setIsOpen(true)
            inputRef.current?.focus()
          }}
        >
          <TalkIcon cursor={'pointer'} />
          <Count>답글 달기</Count>
        </BottomItem>
      </BottomWrapper>
      <SubCommentComponent
        comment={comment}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isOpenCommentForm={isOpenCommentForm}
        setIsOpenCommentForm={setIsOpenCommentForm}
        inputRef={inputRef}
      />
    </>
  )
}
