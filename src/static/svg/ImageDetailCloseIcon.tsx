import * as React from 'react'

function ImageDetailCloseIcon(props: any) {
  return (
    <svg width={60} height={60} fill="none" {...props}>
      <circle cx={30} cy={30} r={20} fill="#fff" />
      <path
        d="M60 30a30 30 0 11-60 0 30 30 0 0160 0zM20.078 17.422a1.877 1.877 0 10-2.655 2.655L27.349 30l-9.927 9.922a1.878 1.878 0 002.655 2.656L30 32.65l4.961 4.963 4.962 4.964a1.878 1.878 0 002.654-2.656L32.651 30l9.926-9.922a1.878 1.878 0 00-2.654-2.655L30 27.349l-9.922-9.927z"
        fill="#757575"
      />
    </svg>
  )
}

const MemoImageDetailCloseIcon = React.memo(ImageDetailCloseIcon)
export default MemoImageDetailCloseIcon
