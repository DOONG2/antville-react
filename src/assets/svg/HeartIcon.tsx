import * as React from 'react'

function HeartIcon(props: any) {
  return (
    <svg width={17} height={16} fill="none" {...props}>
      <path
        d="M8.5 4.4a3.666 3.666 0 011.193-2.467 3.594 3.594 0 012.557-.93c2.724 0 3.75 2.616 3.75 4.74C16 9.14 13.797 12.145 8.5 15 3.203 12.214 1 9.14 1 5.81c0-2.123 1.026-4.74 3.75-4.74a3.594 3.594 0 012.557.931c.7.635 1.128 1.52 1.193 2.467V4.4z"
        fill={props.color}
        stroke={props.stroke}
        strokeMiterlimit={10}
        strokeWidth={1.1}
      />
    </svg>
  )
}

const MemoHeartIcon = React.memo(HeartIcon)
export default MemoHeartIcon
