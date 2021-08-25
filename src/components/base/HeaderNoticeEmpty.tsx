import styled from '@emotion/styled'
import { grey040, grey050 } from '../../lib/styles/colors'
import NoticeIconLarge from '../../static/svg/NoticeIconLarge'

export default function HeaderNoticeEmpty() {
  return (
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

const NoticeEmpty = styled.div`
  width: 337px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 55px;

  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
`

const EmptyLabel = styled.div`
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  margin-top: 22px;
  color: ${grey050};
`

const SmallEmptyLabel = styled.div`
  font-size: 16px;
  line-height: 150%;
  margin-top: 17px;

  text-align: center;
  color: ${grey040};
`
