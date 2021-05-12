import * as React from 'react'

function StockDownIconClicked(props: any) {
  return (
    <svg width={35} height={18} fill="none" {...props}>
      <path
        d="M0 2.606A2.606 2.606 0 012.606 0h29.788A2.606 2.606 0 0135 2.606v12.788A2.606 2.606 0 0132.394 18H2.606A2.606 2.606 0 010 15.394V2.606z"
        fill="#3082F5"
      />
      <path
        d="M15.281 9.375l3.45-3.416 4.924 4.875 1.978-1.96V14h-5.176l1.978-1.959-3.703-3.667-3.45 3.417-6.65-6.583L9.853 4l5.43 5.375z"
        fill="#F7FBFF"
      />
    </svg>
  )
}

const MemoStockDownIconClicked = React.memo(StockDownIconClicked)
export default MemoStockDownIconClicked
