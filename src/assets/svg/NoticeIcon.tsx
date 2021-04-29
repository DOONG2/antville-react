import * as React from 'react'

function NoticeIcon(props: any) {
  return (
    <svg width={28} height={34} fill="none" {...props}>
      <path
        d="M13.692 1v3.65m-9.23 13.387c0-6.084 1.153-13.386 9.23-13.386s9.231 7.302 9.231 13.386c0 6.085 3.462 9.736 3.462 9.736H1s3.462-3.651 3.462-9.736zm13.846 9.736s0 4.868-4.616 4.868c-4.615 0-4.615-4.868-4.615-4.868h9.23z"
        stroke="#757575"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoNoticeIcon = React.memo(NoticeIcon)
export default MemoNoticeIcon
