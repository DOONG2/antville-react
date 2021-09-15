import * as React from 'react'

function HeaderSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="2.6rem"
      height="2.6rem"
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <path
        d="M25.57 23.53l-4.89-4.89a11.553 11.553 0 10-2.041 2.04l4.89 4.89a1.44 1.44 0 002.049.008 1.443 1.443 0 00-.009-2.049zM2.91 11.565a8.655 8.655 0 118.655 8.655 8.665 8.665 0 01-8.655-8.655z"
        fill="#757575"
      />
    </svg>
  )
}

const MemoVector = React.memo(HeaderSearchIcon)
export default MemoVector
