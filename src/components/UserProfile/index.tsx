import styled from '@emotion/styled'
import React from 'react'
import { useParams } from 'react-router-dom'
import getPostsByUser from '../../api/post/getPostsByUser'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import FeedSection from '../Feed/FeedSection'
import ProfileEmpty from '../Feed/ProfileEmpty'
import SideBar from '../SideBar'
import ProfileTab from './ProfileTab'
import UserSection from './UserSection'

export default function UserProfile() {
  const { id } = useParams<{ id: string }>()

  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <UserSection />
          <ProfileTab />
          <ProfileEmpty />
          <FeedSection callback={(cursor) => getPostsByUser(id, cursor)} />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}
