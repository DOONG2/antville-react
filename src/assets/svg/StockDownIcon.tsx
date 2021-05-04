import * as React from 'react'

function StockDownIcon(props: any) {
  return (
    <svg width={28} height={15} fill="none" {...props}>
      <path fill="#F7FBFF" d="M0 0h28v15H0z" />
      <path
        d="M12.475 7.838l2.842-3.075L19.37 9.15 21 7.387V12h-4.262l1.628-1.763-3.05-3.3-2.84 3.075L7 4.087 8.005 3l4.47 4.838z"
        fill="#3082F5"
      />
    </svg>
  )
}

const MemoStockDownIcon = React.memo(StockDownIcon)
export default MemoStockDownIcon
