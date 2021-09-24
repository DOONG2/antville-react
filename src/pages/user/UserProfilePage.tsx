import React from 'react'
import MainTemplate from '../../components/main/MainTemPlate'
import UserLikeFeedPage from './UserLikeFeedPage'
import UserAllFeedPage from './UserAllFeedPage'
import { Route, useParams } from 'react-router-dom'
import useGetUserProfile from './hooks/useGetUserProfile'
import ProfileUserInfo from '../../components/user/UserInfo'
import ProfileTab from '../../components/user/UserTab'
import UserNotFound from './UserNotFound'
import { Wrapper } from '../../lib/styles/feed'
import WriteButton from '../../components/common/WriteButton'

export default function UserProfilePage() {
  const { nickname } = useParams<{ nickname: string }>()
  const { user, isLoading } = useGetUserProfile(nickname)

  return (
    <MainTemplate
      children={
        !isLoading &&
        (user ? (
          <>
            <Wrapper>
              <ProfileUserInfo user={user} />
            </Wrapper>
            <Wrapper>
              <ProfileTab user={user} />
              <Route
                path={[
                  '/user/:nickname/profile',
                  '/user/:nickname/profile/all',
                ]}
                component={() => <UserAllFeedPage user={user} />}
                exact
              />
              <Route
                path={['/user/:nickname/profile/like']}
                component={() => <UserLikeFeedPage user={user} />}
              />
            </Wrapper>
            <WriteButton />
          </>
        ) : (
          <Wrapper>
            <UserNotFound />
          </Wrapper>
        ))
      }
    />
  )
}
