import React from 'react'
import MainTemplate from '../../components/main/MainTemPlate'
import UserEdit from '../../components/user/UserEdit'

export default function UserEditPage() {
  return (
    <MainTemplate
      children={
        <>
          <UserEdit />
        </>
      }
    />
  )
}
