import * as React from 'react'

function PlusIcon(props: any) {
  return (
    <svg width={10} height={10} fill="none" {...props}>
      <path d="M5.07 0v10M10 5.07H0" stroke="#fff" strokeWidth={2} />
    </svg>
  )
}

const MemoPlusIcon = React.memo(PlusIcon)
export default MemoPlusIcon
