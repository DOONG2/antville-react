import * as React from 'react'

function HeartIconRed(props: any) {
  return (
    <svg width={15} height={14} fill="none" {...props}>
      <path
        d="M7.5 3.4A3.666 3.666 0 018.693.933a3.594 3.594 0 012.557-.93c2.724 0 3.75 2.616 3.75 4.74C15 8.14 12.797 11.145 7.5 14 2.203 11.214 0 8.14 0 4.81 0 2.687 1.026.07 3.75.07a3.594 3.594 0 012.557.931c.7.635 1.128 1.52 1.193 2.467V3.4z"
        fill="#FA1D65"
        strokeWidth={1.1}
      />
    </svg>
  )
}

const MemoHeartIconRed = React.memo(HeartIconRed)
export default MemoHeartIconRed
