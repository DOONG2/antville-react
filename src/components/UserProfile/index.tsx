import React from 'react'
import { useParams } from 'react-router-dom'
import getPostsByUser from '../../api/post/getPostsByUser'
import getPostsByUserLike from '../../api/post/getPostsByUserLike'
import useGetUserProfile from '../../hooks/useGetUserProfile'
import { useRootState } from '../../hooks/useRootState'
import { activated_user_like } from '../../lib/variable'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import FeedUserSection from '../Feed/FeedUserSection'
import SideBar from '../SideBar'
import ProfileTab from './ProfileTab'
import UserSection from './UserSection'

export default function UserProfile() {
  const { nickname } = useParams<{ nickname: string }>()
  const {
    feed: { activatedUseTab },
  } = useRootState((state) => state)

  const { user } = useGetUserProfile(nickname)

  if (!user) return <></>

  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <UserSection user={user} />
          <ProfileTab user={user} />
          <FeedUserSection
            callback={(cursor) => {
              if (activatedUseTab === activated_user_like) {
                return getPostsByUserLike(user.id, cursor)
              } else {
                return getPostsByUser(user.id, cursor)
              }
            }}
          />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}
