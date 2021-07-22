import * as React from 'react'

function CloseIconGrey(props: any) {
  return (
    <svg width={10} height={10} fill="none" {...props}>
      <path
        d="M1.25 0L5 3.75 8.75 0 10 1.25 6.25 5 10 8.75 8.75 10 5 6.25 1.25 10 0 8.75 3.75 5 0 1.25 1.25 0z"
        fill="#E0E0E0"
      />
    </svg>
  )
}

const MemoCloseIconGrey = React.memo(CloseIconGrey)
export default MemoCloseIconGrey
