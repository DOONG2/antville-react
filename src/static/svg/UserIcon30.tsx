import * as React from 'react'

function UserIcon30(props: any) {
  return (
    <svg width={30} height={30} fill="none" {...props}>
      <circle cx={15} cy={15} r={15} fill="#F4F4F4" />
      <path
        d="M15.004 14.937a4.035 4.035 0 100-8.07 4.035 4.035 0 000 8.07z"
        stroke="#757575"
        strokeWidth={1.5}
      />
      <path
        d="M19.036 16.55h.284a2.42 2.42 0 012.401 2.121l.316 2.521a1.615 1.615 0 01-1.602 1.814H9.567a1.614 1.614 0 01-1.601-1.814l.314-2.52a2.42 2.42 0 012.403-2.121h.284"
        stroke="#757575"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUserIcon30 = React.memo(UserIcon30)
export default MemoUserIcon30
