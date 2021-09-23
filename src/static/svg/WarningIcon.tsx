import * as React from 'react'

function WarningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={10} height={10} fill="none" {...props}>
      <path
        d="M4.583 0a4.583 4.583 0 100 9.166 4.583 4.583 0 000-9.166zm.459 6.875h-.917v-.917h.917v.917zm0-1.833h-.917l-.23-2.75h1.376l-.23 2.75z"
        fill="#fff"
      />
    </svg>
  )
}

const MemoWarningIcon = React.memo(WarningIcon)
export default MemoWarningIcon
