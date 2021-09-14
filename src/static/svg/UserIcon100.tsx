import * as React from 'react'

function UserIcon100(props: any) {
  return (
    <svg width={100} height={100} fill="none" {...props}>
      <circle cx={50} cy={50} r={50} fill="#F4F4F4" />
      <path
        d="M50.008 49.787c7.427 0 13.449-6.022 13.449-13.45 0-7.427-6.022-13.448-13.45-13.448-7.427 0-13.448 6.021-13.448 13.449 0 7.427 6.02 13.449 13.449 13.449z"
        stroke="#757575"
        strokeWidth={3.6}
      />
      <path
        d="M63.455 55.17h.947a8.07 8.07 0 018.004 7.069l1.052 8.403a5.38 5.38 0 01-5.34 6.046H31.894a5.379 5.379 0 01-5.34-6.046l1.05-8.403a8.07 8.07 0 018.01-7.07h.944"
        stroke="#757575"
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUserIcon100 = React.memo(UserIcon100)
export default MemoUserIcon100
