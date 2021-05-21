import * as React from 'react'

function CloseIconSmall(props: any) {
  return (
    <svg width={23} height={23} fill="none" {...props}>
      <path
        d="M17.969 5.031L5.03 17.97M17.969 17.969L5.03 5.03"
        stroke="#202020"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoCloseIconSmall = React.memo(CloseIconSmall)
export default MemoCloseIconSmall
