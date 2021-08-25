import * as React from 'react'

function PauseIcon(props: any) {
  return (
    <svg width={12} height={17} fill="none" {...props}>
      <rect width={3} height={16.5} rx={1.5} fill="#757575" />
      <rect x={9} width={3} height={16.5} rx={1.5} fill="#757575" />
    </svg>
  )
}

const MemoPauseIcon = React.memo(PauseIcon)
export default MemoPauseIcon
