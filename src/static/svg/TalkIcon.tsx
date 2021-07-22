import * as React from 'react'

function TalkIcon(props: any) {
  return (
    <svg width={15} height={15} fill="none" {...props}>
      <path
        d="M.59 13.745l.997-2.992C.725 9.478.413 7.969.71 6.505c.296-1.464 1.18-2.782 2.488-3.71 1.307-.927 2.95-1.401 4.62-1.334 1.672.068 3.259.673 4.466 1.703 1.207 1.03 1.953 2.414 2.098 3.895.145 1.482-.32 2.96-1.309 4.16-.989 1.2-2.434 2.039-4.067 2.362a7.668 7.668 0 01-4.81-.604l-3.606.768z"
        stroke="#757575"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.1}
      />
    </svg>
  )
}

const MemoTalkIcon = React.memo(TalkIcon)
export default MemoTalkIcon
