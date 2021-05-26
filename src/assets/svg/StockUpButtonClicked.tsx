import * as React from 'react'

function StockUpButtonClicked(props: any) {
  return (
    <svg width={35} height={18} fill="none" {...props}>
      <path
        d="M0 2.606A2.606 2.606 0 012.606 0h29.788A2.606 2.606 0 0135 2.606v12.788A2.606 2.606 0 0132.394 18H2.606A2.606 2.606 0 010 15.394V2.606z"
        fill="#FF3F3E"
      />
      <path
        d="M15.648 8.625l3.45 3.416 4.924-4.875L26 9.126V4h-5.176l1.978 1.959L19.1 9.626l-3.45-3.417L9 12.792 10.22 14l5.428-5.375z"
        fill="#FFF8F8"
      />
    </svg>
  )
}

const MemoStockUpButtonClicked = React.memo(StockUpButtonClicked)
export default MemoStockUpButtonClicked
