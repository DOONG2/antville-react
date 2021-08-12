import * as React from 'react'

function PolygonDown(props: any) {
  return (
    <svg fill="none" {...props}>
      <path d="M5 10.826L0 .001h10L5 10.826z" fill="#3082F5" />
    </svg>
  )
}

const MemoPolygonDown = React.memo(PolygonDown)
export default MemoPolygonDown
