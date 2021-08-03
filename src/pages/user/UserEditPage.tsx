import React from 'react'
import { useRootState } from '../../components/common/hooks/useRootState'
import MainTemplate from '../../components/main/MainTemPlate'
import UserEdit from '../../components/user/UserEdit'

export default function UserEditPage() {
  const user = useRootState((state) => state.user)

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
