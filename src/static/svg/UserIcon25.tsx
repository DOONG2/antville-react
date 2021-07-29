import * as React from 'react'

function UserIcon25(props: any) {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <circle cx={12.5} cy={12.5} r={12.5} fill="#F4F4F4" />
      <path
        d="M12.499 12.447a3.362 3.362 0 100-6.724 3.362 3.362 0 000 6.724z"
        stroke="#757575"
        strokeWidth={1.4}
      />
      <path
        d="M15.86 13.793h.238a2.017 2.017 0 012 1.767l.264 2.1a1.344 1.344 0 01-1.335 1.513H7.97a1.346 1.346 0 01-1.335-1.512l.263-2.1A2.017 2.017 0 018.9 13.792h.236"
        stroke="#757575"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUserIcon25 = React.memo(UserIcon25)
export default MemoUserIcon25
