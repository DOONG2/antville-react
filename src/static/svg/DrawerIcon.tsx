import * as React from 'react'

function DrawerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <path
        d="M21.875 20.313H3.125V4.688"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.313 6.25L12.5 14.063l-3.125-3.126-6.25 6.25"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.316 10.156V6.25H16.41"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoDrawerIcon = React.memo(DrawerIcon)
export default MemoDrawerIcon
