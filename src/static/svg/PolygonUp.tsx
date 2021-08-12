import * as React from 'react'

function PolygonUp(props: any) {
  return (
    <svg fill="none" {...props}>
      <path d="M5 0l5 10.825H0L5 0z" fill="#FF3F3E" />
    </svg>
  )
}

const MemoPolygonUp = React.memo(PolygonUp)
export default MemoPolygonUp
