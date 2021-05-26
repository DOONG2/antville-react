import * as React from 'react'

function NoticeIconLarge(props: any) {
  return (
    <svg width={129} height={129} fill="none" {...props}>
      <path
        d="M112.875 102.125v5.375h-96.75v-5.375l10.75-10.75v-32.25c0-16.663 10.911-31.336 26.875-36.066V21.5a10.75 10.75 0 1121.5 0v1.559c15.964 4.73 26.875 19.403 26.875 36.066v32.25l10.75 10.75zm-37.625 10.75a10.75 10.75 0 01-21.5 0"
        fill="#BDBDBD"
      />
    </svg>
  )
}

const MemoNoticeIconLarge = React.memo(NoticeIconLarge)
export default MemoNoticeIconLarge
