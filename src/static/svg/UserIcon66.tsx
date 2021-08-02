import * as React from 'react'

function UserIcon66(props: any) {
  return (
    <svg width={66} height={66} fill="none" {...props}>
      <circle cx={33} cy={33} r={33} fill="#F4F4F4" />
      <path
        d="M33 32.86a8.876 8.876 0 100-17.753 8.876 8.876 0 000 17.753z"
        stroke="#BDBDBD"
        strokeWidth={4}
      />
      <path
        d="M41.877 36.41h.624a5.325 5.325 0 015.284 4.666l.694 5.545a3.55 3.55 0 01-3.524 3.991h-23.91a3.55 3.55 0 01-3.524-3.99l.693-5.546A5.326 5.326 0 0123.5 36.41h.623"
        stroke="#BDBDBD"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUserIcon66 = React.memo(UserIcon66)
export default MemoUserIcon66
