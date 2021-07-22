import * as React from 'react'

function ThreeDot(props: any) {
  return (
    <svg width={15} height={3} fill="none" {...props}>
      <circle cx={1.5} cy={1.5} r={1.5} fill="#979797" />
      <circle cx={7.5} cy={1.5} r={1.5} fill="#979797" />
      <circle cx={13.5} cy={1.5} r={1.5} fill="#979797" />
    </svg>
  )
}

const MemoThreeDot = React.memo(ThreeDot)
export default MemoThreeDot
