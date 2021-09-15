import * as React from 'react'

function MoblieSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="2rem" height="2rem" viewBox="0 0 21 21" fill="none" {...props}>
      <circle cx={9} cy={9} r={8.25} stroke="#202020" strokeWidth={1.5} />
      <rect
        x={14.664}
        y={14.094}
        width={7.694}
        height={1.334}
        rx={0.667}
        transform="rotate(45 14.664 14.094)"
        fill="#202020"
      />
    </svg>
  )
}

const MemoMoblieSearchIcon = React.memo(MoblieSearchIcon)
export default MemoMoblieSearchIcon
