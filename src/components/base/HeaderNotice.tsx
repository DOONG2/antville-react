import { NoticeObject } from '../../lib/api/notice/types'
import {
  FeedAvatar,
  Inner,
  Item,
  Nickname,
  Wrapper,
} from '../../lib/styles/search'
import UserIcon30 from '../../static/svg/UserIcon30'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TYPE_FOLLOW, TYPE_LIKE, TYPE_TAG } from '../../lib/variable'
import MomentDateChange from '../common/MomentDateChange'
import usePatchNotice from './hooks/usePatchNotice'
import { grey030, grey080 } from '../../lib/styles/colors'
import styled from '@emotion/styled'
import optimizeImage from '../../lib/utils/optimizeImage'

type Props = {
  notice: NoticeObject
}

export default function HeaderNotice({ notice }: Props) {
  const { setIsOpenNoticeDropDown } = viewSlice.actions
  const dispatch = useDispatch()
  const history = useHistory()

  const { mutation } = usePatchNotice({ id: notice.id })

  return (
    <Wrapper
      onClick={() => {
        dispatch(setIsOpenNoticeDropDown(false))
        mutation.mutate()
        if (notice.type === TYPE_FOLLOW)
          return history.push(`/user/${notice.sender.nickname}/profile`)
        else return history.push(`/feed/detail/${notice.param}`)
      }}
    >
      {!notice.isChecked && <NoticePot />}
      <Inner>
        <Item>
          <FeedAvatar>
            {notice.sender.profileImg ? (
              <img
                src={optimizeImage(notice.sender.profileImg, 120)}
                alt="profile_image"
              />
            ) : (
              <UserIcon30 />
            )}
          </FeedAvatar>
          <FlexWrapper>
            <NewNickname>@{notice.sender.nickname}</NewNickname>
            <Text>
              {notice.type === TYPE_LIKE &&
                '님이 회원님의 게시글을 좋아합니다.'}
              {notice.type === TYPE_FOLLOW && '님이 회원님을 팔로우합니다.'}
              {notice.type === TYPE_TAG &&
                '님이 게시글에 회원님을 태그하였습니다.'}
            </Text>
          </FlexWrapper>
        </Item>
      </Inner>
      <TimeWrapper>
        <MomentDateChange time={notice.createdAt} />
      </TimeWrapper>
    </Wrapper>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: 8px;
`

const Text = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  padding-right: 35px;

  color: ${grey080};
`

const NewNickname = styled(Nickname)`
  margin-left: 0;
  margin-right: 2px;
`

const TimeWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: ${grey030};
`

const NoticePot = styled.div`
  position: absolute;
  top: 5px;
  left: 8px;
  width: 4px;
  height: 4px;

  background: #fc6b6b;
  border-radius: 50%;
`
