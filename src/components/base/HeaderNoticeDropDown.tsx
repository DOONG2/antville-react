import useInfiniteNotices from './hooks/useInfiniteNotices'
import getNotification from '../../lib/api/notice/getNotification'
import HeaderNoticeEmpty from './HeaderNoticeEmpty'

import styled from '@emotion/styled'
import { grey080 } from '../../lib/styles/colors'

import { useRef } from 'react'
import HeaderNotice from './HeaderNotice'

type Props = {
  id: number
}

export default function HeaderNoticeDropDown({ id }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { isLoading, notices } = useInfiniteNotices({
    key: `notification-${id}`,
    callback: (cursor) => getNotification(cursor),
    ref: scrollRef,
  })

  if (isLoading) return <></>

  if (!notices) return <></>

  if (notices.length < 1) return <HeaderNoticeEmpty />

  return (
    <Block>
      <NoticeHeader>
        <div>최근 알림</div>
        {/* <Button onClick={() => {}}>전체삭제</Button> */}
      </NoticeHeader>
      <ScrollWrapper ref={scrollRef}>
        {notices.map((notice) => (
          <HeaderNotice key={'notice-' + notice.id} notice={notice} />
        ))}
      </ScrollWrapper>
    </Block>
  )
}

const Block = styled.div`
  width: 337px;
  display: grid;

  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
`

const NoticeHeader = styled.div`
  color: ${grey080};
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const ScrollWrapper = styled.div`
  height: 425px;
  overflow: auto;
`
