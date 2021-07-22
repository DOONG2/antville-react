import * as React from 'react'

function CompleteCheckIcon(props: any) {
  return (
    <svg width={19} height={15} fill="none" {...props}>
      <path
        d="M1.168 7.5l6.25 6.25 10.417-12.5"
        stroke="#4B5FE7"
        strokeWidth={1.917}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoCompleteCheckIcon = React.memo(CompleteCheckIcon)
export default MemoCompleteCheckIcon
