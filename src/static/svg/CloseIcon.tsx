import * as React from 'react'

function CloseIcon(props: any) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <path
        d="M25 7L7 25M25 25L7 7"
        stroke="#202020"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoCloseIcon = React.memo(CloseIcon)
export default MemoCloseIcon
