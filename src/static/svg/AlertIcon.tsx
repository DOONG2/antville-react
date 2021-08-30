import * as React from 'react'

function AlertIcon(props: any) {
  return (
    <svg width={18} height={19} fill="none" {...props}>
      <path
        d="M9 1.709a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm.75 11.25h-1.5v-1.5h1.5v1.5zm0-3h-1.5l-.375-4.5h2.25l-.375 4.5z"
        fill="#fff"
      />
    </svg>
  )
}

const MemoAlertIcon = React.memo(AlertIcon)
export default MemoAlertIcon
