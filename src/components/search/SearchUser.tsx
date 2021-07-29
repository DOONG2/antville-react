import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import searchStorage from '../../lib/searchStorage'
import { grey080 } from '../../lib/styles/colors'
import { EmptyWrapper } from '../../lib/styles/search'
import searchSlice from '../../reducers/Slices/search'
import viewSlice from '../../reducers/Slices/view'
import UserIcon30 from '../../static/svg/UserIcon30'
import { useRootState } from '../common/hooks/useRootState'

export default function SearchUser() {
  const {
    search: { users },
  } = useRootState((state) => state.search)
  const { setHistoryUsers } = searchSlice.actions
  const { setIsFocusSearchBar } = viewSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()
  const { setHistoryUsers: set, getHistoryUsers: get } = searchStorage

  if (!users) return <></>

  return (
    <>
      {users.length >= 1 ? (
        users.map((user) => (
          <Wrapper key={'user-search-' + user.id}>
            <Inner>
              <Item
                onClick={() => {
                  dispatch(setIsFocusSearchBar(false))
                  set(user)
                  dispatch(setHistoryUsers(get()))
                  history.push(`/user/${user.nickname}/profile`)
                }}
              >
                <FeedAvatar>
                  {user.profileImg ? (
                    <img src={user.profileImg} alt="profile_image" />
                  ) : (
                    <UserIcon30 />
                  )}
                </FeedAvatar>
                <Nickname>{user.nickname}</Nickname>
              </Item>
            </Inner>
          </Wrapper>
        ))
      ) : (
        <EmptyWrapper>검색 결과가 없습니다.</EmptyWrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const FeedAvatar = styled.div`
  margin-left: 12px;
  width: 30px;
  height: 30px;

  border-radius: 30px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }

  cursor: pointer;
`

const Nickname = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  color: ${grey080};
  margin-left: 8px;
`
