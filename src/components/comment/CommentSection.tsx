import styled from '@emotion/styled'
import { useHistory } from 'react-router'
import { CommentObject } from '../../lib/api/comment/types'
import {
  FeedAvatar,
  FeedWrapper,
  LeftItem,
  MiddleWrapper,
  NickNameWrapper,
  PostTime,
  TopWrapper,
} from '../../lib/styles/feed'
import { AvatarImage } from '../../lib/styles/post'
import FeedBody from '../feed/FeedBody'
import MomentDateChange from '../common/MomentDateChange'
import SubCommentSection from './SubCommentSection'
import UserIcon50 from '../../static/svg/UserIcon50'
import ImageComponent from '../feed/ImageComponent'

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
                  <AvatarImage
                    src={comment.author.profileImg}
                    alt="profile_image"
                  />
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
              <ImageComponent url={comment.commentImgs[0].image.toString()} />
            )}
            {comment.gifImage?.gifUrl && (
              <ImageComponent url={comment.gifImage.gifUrl} isGif={true} />
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
