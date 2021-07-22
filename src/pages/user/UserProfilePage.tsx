import React from 'react'
import MainTemplate from '../../components/main/MainTemPlate'
import UserLikeFeedPage from './UserLikeFeedPage'
import UserAllFeedPage from './UserAllFeedPage'
import { Route, useParams } from 'react-router-dom'
import useGetUserProfile from './hooks/useGetUserProfile'
import ProfileUserInfo from '../../components/user/UserInfo'
import ProfileTab from '../../components/user/UserTab'

export default function UserProfilePage() {
  const { nickname } = useParams<{ nickname: string }>()
  const { user } = useGetUserProfile(nickname)

  if (!user) return <></>

  return (
    <MainTemplate
      children={
        <>
          <ProfileUserInfo user={user} />
          <ProfileTab user={user} />
          <Route
            path={['/user/:nickname/profile', '/user/:nickname/profile/all']}
            component={() => <UserAllFeedPage user={user} />}
            exact
          />
          <Route
            path={['/user/:nickname/profile/like']}
            component={() => <UserLikeFeedPage user={user} />}
          />
        </>
      }
    />
  )
}
