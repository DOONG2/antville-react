import * as React from 'react'

function PolygonUpSmall(props: any) {
  return (
    <svg width={10} height={8} fill="none" {...props}>
      <path d="M5 0l5 8H0l5-8z" fill="#FF3F3E" />
    </svg>
  )
}

const MemoPolygonUpSmall = React.memo(PolygonUpSmall)
export default MemoPolygonUpSmall
