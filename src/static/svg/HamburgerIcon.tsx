import * as React from 'react'

function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <path
        d="M3.906 12.5h17.188M3.906 6.25h17.188M3.906 18.75h17.188"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoHamburgerIcon = React.memo(HamburgerIcon)
export default MemoHamburgerIcon
