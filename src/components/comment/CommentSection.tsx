import styled from '@emotion/styled'
import { useHistory } from 'react-router'
import { CommentObject } from '../../lib/api/comment/types'
import {
  FeedAvatar,
  FeedWrapper,
  LeftItem,
  GifImage,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../lib/styles/feed'
import { Image } from '../../lib/styles/post'
import FeedBody from '../feed2/FeedBody'
import MomentDateChange from '../common/MomentDateChange'
import SubCommentSection from './SubCommentSection'
import UserIcon50 from '../../static/svg/UserIcon50'

interface Props {
  comments: CommentObject[]
  loading?: boolean
}

export default function CommentSection({ comments, loading }: Props) {
  const history = useHistory()

  return (
    <>
      {comments?.map((comment) => (
        <NewFeedWrapper key={`${comment.id}-feed-comment`}>
          <TopWrapper>
            <LeftItem>
              <FeedAvatar
                onClick={() =>
                  history.push(`/user/${comment.author.nickname}/profile`)
                }
              >
                {comment.author.profileImg ? (
                  <img src={comment.author.profileImg} alt="profile_image" />
                ) : (
                  <UserIcon50 />
                )}
              </FeedAvatar>
              <NickNameWrapper
                onClick={() =>
                  history.push(`/user/${comment.author.nickname}/profile`)
                }
              >
                {comment.author.nickname}
              </NickNameWrapper>
              <PostTime>
                <MomentDateChange time={comment.createdAt} />
              </PostTime>
            </LeftItem>
          </TopWrapper>
          <MiddleWrapper>
            <FeedBody body={comment.body} isDetail={true} />
            {comment.commentImgs[0] && (
              <Image
                src={comment.commentImgs[0].image.toString()}
                alt={`${comment.id}-comment-image`}
              />
            )}
            {comment.gifImage?.gifUrl && (
              <GifImage
                src={comment.gifImage.gifUrl}
                alt={`${comment.id}-comment-gif-image`}
              />
            )}
          </MiddleWrapper>
          <SubCommentSection comment={comment} />
        </NewFeedWrapper>
      ))}
    </>
  )
}

const NewFeedWrapper = styled(FeedWrapper)`
  border: none;
`
