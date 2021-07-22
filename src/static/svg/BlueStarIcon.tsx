import * as React from 'react'

function BlueStarIcon(props: any) {
  return (
    <svg width={16} height={15} fill="none" {...props}>
      <path
        d="M1.037 5.207L5.5 4.56 7.495.514a.565.565 0 011.009 0L10.5 4.56l4.464.648a.562.562 0 01.31.96l-3.228 3.148.762 4.446a.561.561 0 01-.815.592L8 12.255l-3.992 2.098a.562.562 0 01-.816-.592l.763-4.446L.726 6.167a.561.561 0 01.311-.96z"
        fill="#1942E0"
      />
    </svg>
  )
}

const MemoStarblue = React.memo(BlueStarIcon)
export default MemoStarblue
