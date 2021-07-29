import { RefObject } from 'react'
import { User } from '../../lib/api/types'

export type UserListPros = {
  user: User
  modalParentRef: RefObject<HTMLDivElement>
}
