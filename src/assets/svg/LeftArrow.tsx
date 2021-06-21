import * as React from 'react'

function LeftArrow(props: any) {
  return (
    <svg width={10} height={20} fill="none" {...props}>
      <path
        d="M1.708 10L9.79 1.278a.754.754 0 00.208-.535.782.782 0 00-.216-.53A.71.71 0 009.27 0a.685.685 0 00-.504.233L.202 9.477A.77.77 0 000 10a.77.77 0 00.202.523l8.564 9.244a.685.685 0 001.015.02.753.753 0 00.216-.53.783.783 0 00-.208-.535L1.708 10z"
        fill="#202020"
      />
    </svg>
  )
}

const MemoLeftArrow = React.memo(LeftArrow)
export default MemoLeftArrow
