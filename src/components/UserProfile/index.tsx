import React from 'react'
import { useParams } from 'react-router-dom'
import getPostsByUser from '../../api/post/getPostsByUser'
import getPostsByUserLike from '../../api/post/getPostsByUserLike'
import { useRootState } from '../../hooks/useRootState'
import { activated_user_like } from '../../lib/variable'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import FeedUserSection from '../Feed/FeedUserSection'
import SideBar from '../SideBar'
import ProfileTab from './ProfileTab'
import UserSection from './UserSection'

export default function UserProfile() {
  const { id } = useParams<{ id: string }>()
  const {
    feed: { activatedUseTab },
  } = useRootState((state) => state)

  console.log(activatedUseTab)

  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <UserSection />
          <ProfileTab />
          <FeedUserSection
            callback={(cursor) => {
              if (activatedUseTab === activated_user_like) {
                return getPostsByUserLike(id, cursor)
              } else {
                return getPostsByUser(id, cursor)
              }
            }}
          />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}
