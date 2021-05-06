import styled from '@emotion/styled'
import { grey040, grey050 } from '../../mds/theme/colors'
import NoticeIconLarge from '../../assets/svg/NoticeIconLarge'

const Group = styled.div`
  width: 337px;
`

const NoticeEmpty = styled.div`
  width: 337px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 55px;
`

const EmptyLabel = styled.div`
  font-family: Roboto;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin-top: 22px;

  color: ${grey050};
`

const SmallEmptyLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 150%;
  margin-top: 17px;

  text-align: center;
  color: ${grey040};
`

const NoticeDropDown = () => {
  return false ? (
    <Group>d</Group>
  ) : (
    <NoticeEmpty>
      <NoticeIconLarge />
      <EmptyLabel>아직 알림이 없어요.</EmptyLabel>
      <SmallEmptyLabel>
        앤트빌이 처음이신가요?
        <br />
        먼저, 게시글과 댓글을 남겨보세요!
      </SmallEmptyLabel>
    </NoticeEmpty>
  )
}

export default NoticeDropDown
