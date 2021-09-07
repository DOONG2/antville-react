import * as React from 'react'

function PolygonUpChart(props: any) {
  return (
    <svg width={15} height={12} fill="none" {...props}>
      <path
        d="M1.125 11.458h12.75a.71.71 0 00.583-1.112L8.083 1.138c-.264-.382-.9-.382-1.165 0L.543 10.346a.708.708 0 00.582 1.112z"
        fill="#FF3F3E"
      />
    </svg>
  )
}

const MemoPolygonUpChart = React.memo(PolygonUpChart)
export default MemoPolygonUpChart
