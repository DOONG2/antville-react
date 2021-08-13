import * as React from 'react'

function PolygonUpTest(props: any) {
  return (
    <svg width={7} height={7} fill="none" {...props}>
      <path d="M3.15 0L6.3 6.82H0L3.15 0z" fill="#FF3F3E" />
    </svg>
  )
}

const MemoPolygonUpTest = React.memo(PolygonUpTest)
export default MemoPolygonUpTest
