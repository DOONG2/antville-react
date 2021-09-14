import React from 'react'
import usePageView from '../../components/common/hooks/usePageView'
import { useRootState } from '../../components/common/hooks/useRootState'
import MainTemplate from '../../components/main/MainTemPlate'
import UserEdit from '../../components/user/UserEdit'
import { Wrapper } from '../../lib/styles/feed'

export default function UserEditPage() {
  const user = useRootState((state) => state.user)
  usePageView('프로필_편집')
  if (!user) return <></>

  return (
    <MainTemplate
      children={
        <>
          <Wrapper>
            <UserEdit user={user} />
          </Wrapper>
        </>
      }
    />
  )
}
