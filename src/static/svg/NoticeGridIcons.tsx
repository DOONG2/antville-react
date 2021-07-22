import * as React from 'react'

function NoticeGridIcons(props: any) {
  return (
    <svg width={11} height={11} fill="none" {...props}>
      <path
        d="M5.5.916a4.583 4.583 0 100 9.166 4.583 4.583 0 000-9.166zm.458 6.875H5.04v-.917h.917v.917zm0-1.833H5.04l-.23-2.75h1.376l-.23 2.75z"
        fill="#757575"
      />
    </svg>
  )
}

const MemoNoticeGridIcons = React.memo(NoticeGridIcons)
export default MemoNoticeGridIcons
