import * as React from 'react'

function PolygonDownTest(props: any) {
  return (
    <svg width={7} height={7} fill="none" {...props}>
      <path d="M3.15 6.82L0 0h6.3L3.15 6.82z" fill="#3082F5" />
    </svg>
  )
}

const MemoPolygonDownTest = React.memo(PolygonDownTest)
export default MemoPolygonDownTest
