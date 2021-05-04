import * as React from 'react'

function UserIcon(props: any) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <circle cx={20} cy={20} r={20} fill="#F4F4F4" />
      <path
        d="M20 19.916a5.38 5.38 0 100-10.76 5.38 5.38 0 000 10.76z"
        stroke="#757575"
        strokeWidth={2}
      />
      <path
        d="M25.379 22.068h.378a3.227 3.227 0 013.202 2.828l.421 3.361a2.15 2.15 0 01-2.136 2.419h-14.49a2.152 2.152 0 01-2.136-2.419l.42-3.361a3.228 3.228 0 013.204-2.828h.377"
        stroke="#757575"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUserIcon = React.memo(UserIcon)
export default MemoUserIcon
