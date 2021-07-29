import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import searchStorage from '../../lib/searchStorage'
import {
  EmptyWrapper,
  FeedAvatar,
  Icon,
  Inner,
  Item,
  Nickname,
  Wrapper,
} from '../../lib/styles/search'
import searchSlice from '../../reducers/Slices/search'
import viewSlice from '../../reducers/Slices/view'
import CloseIconGrey from '../../static/svg/CloseIconGrey'
import UserIcon30 from '../../static/svg/UserIcon30'
import { useRootState } from '../common/hooks/useRootState'

export default function SearchUserHistory() {
  const { users } = useRootState((state) => state.search.history)
  const { setHistoryUsers } = searchSlice.actions
  const { setIsFocusSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()
  const { setHistoryUsers: set, getHistoryUsers: get } = searchStorage
  return (
    <>
      {users ? (
        users.slice(0, 5).map((user) => (
          <Wrapper
            key={'user-search-history-' + user.id}
            onClick={() => {
              dispatch(setIsFocusSearchBar(false))
              set(user)
              dispatch(setHistoryUsers(get()))
              history.push(`/user/${user.nickname}/profile`)
            }}
          >
            <Inner>
              <Item>
                <FeedAvatar>
                  {user.profileImg ? (
                    <img src={user.profileImg} alt="profile_image" />
                  ) : (
                    <UserIcon30 />
                  )}
                </FeedAvatar>
                <Nickname>{user.nickname}</Nickname>
              </Item>
              <Icon
                onClick={(e) => {
                  e.stopPropagation()
                  searchStorage.deleteUser(user.nickname)
                  dispatch(setHistoryUsers(get()))
                }}
              >
                <CloseIconGrey />
              </Icon>
            </Inner>
          </Wrapper>
        ))
      ) : (
        <EmptyWrapper>최근 검색 유저가 없습니다.</EmptyWrapper>
      )}
    </>
  )
}
