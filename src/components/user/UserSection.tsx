import { User } from '../../lib/api/types'
import { Item, Nickname, Wrapper } from '../../lib/styles/user'
import { useHistory } from 'react-router-dom'
import { FeedAvatar } from '../../lib/styles/feed'
import UserIcon50 from '../../static/svg/UserIcon50'
import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'

type Prop = {
  users: User[]
  isLoading: boolean
  elementKey: string
  emptyComponent?: React.ReactNode
  setUsers(users: User[] | undefined): void
}

export default function UserSection({
  users,
  isLoading,
  emptyComponent,
  elementKey,
  setUsers,
}: Prop) {
  const { setIsOpenFollwerModal, setIsOpenFollowingModal } = viewSlice.actions
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <Wrapper>
      {users.map((user) => (
        <Item
          key={elementKey + user.id}
          onClick={() => {
            dispatch(setIsOpenFollwerModal(false))
            dispatch(setIsOpenFollowingModal(false))
            setUsers(undefined)
            history.push(`/user/${user.nickname}/profile`)
          }}
        >
          <FeedAvatar
            onClick={() => {
              dispatch(setIsOpenFollwerModal(false))
              dispatch(setIsOpenFollowingModal(false))
              setUsers(undefined)
              history.push(`/user/${user.nickname}/profile`)
            }}
          >
            {user.profileImg ? (
              <img src={user.profileImg} alt="profile_image" />
            ) : (
              <UserIcon50 />
            )}
          </FeedAvatar>
          <Nickname>{user.nickname}</Nickname>
        </Item>
      ))}
    </Wrapper>
  )
}
