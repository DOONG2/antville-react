import * as React from 'react'

function StockUpIcon(props: any) {
  return (
    <svg width={28} height={15} fill="none" {...props}>
      <path fill="#FFF8F8" d="M0 0h28v15H0z" />
      <path
        d="M12.475 7.162l2.842 3.075L19.37 5.85 21 7.613V3h-4.262l1.628 1.763-3.05 3.3-2.84-3.075L7 10.913 8.005 12l4.47-4.838z"
        fill="#FF3F3E"
      />
    </svg>
  )
}

const MemoStockUpIcon = React.memo(StockUpIcon)
export default MemoStockUpIcon
