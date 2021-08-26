import React from 'react'
import usePageView from '../../components/common/hooks/usePageView'
import { useRootState } from '../../components/common/hooks/useRootState'
import MainTemplate from '../../components/main/MainTemPlate'
import UserEdit from '../../components/user/UserEdit'

export default function UserEditPage() {
  const user = useRootState((state) => state.user)
  usePageView('프로필_편집')
  if (!user) return <></>

  return (
    <MainTemplate
      children={
        <>
          <UserEdit user={user} />
        </>
      }
    />
  )
}
