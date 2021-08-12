import * as React from 'react'

function Polygon(props: any) {
  return (
    <svg fill="none" {...props}>
      <path
        d="M13.678 7.29c1.284.778 1.284 2.642 0 3.42L3.037 17.16C1.704 17.968 0 17.008 0 15.45V2.55C0 .993 1.704.034 3.037.84l10.64 6.45z"
        fill="#757575"
      />
    </svg>
  )
}

const MemoPolygon = React.memo(Polygon)
export default MemoPolygon
