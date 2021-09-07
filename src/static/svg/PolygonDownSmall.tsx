import * as React from 'react'

function PolygonDownSmall(props: any) {
  return (
    <svg width={10} height={8} fill="none" {...props}>
      <path d="M5 8L0 0h10L5 8z" fill="#3082F5" />
    </svg>
  )
}

const MemoPolygonDownSmall = React.memo(PolygonDownSmall)
export default MemoPolygonDownSmall
