import * as React from 'react'

function UserIcon50(props: any) {
  return (
    <svg width={50} height={50} fill="none" {...props}>
      <circle cx={25} cy={25} r={25} fill="#F4F4F4" />
      <path
        d="M25.002 24.894a6.725 6.725 0 100-13.449 6.725 6.725 0 000 13.45z"
        stroke="#757575"
        strokeWidth={2}
      />
      <path
        d="M31.725 27.586h.474A4.035 4.035 0 0136.2 31.12l.526 4.202a2.689 2.689 0 01-2.67 3.023H15.944a2.69 2.69 0 01-2.67-3.023l.525-4.202a4.035 4.035 0 014.005-3.534h.472"
        stroke="#757575"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUserIcon50 = React.memo(UserIcon50)
export default MemoUserIcon50
