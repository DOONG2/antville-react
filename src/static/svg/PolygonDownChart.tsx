import * as React from 'react'

function PolygonDownChart(props: any) {
  return (
    <svg width={15} height={12} fill="none" {...props}>
      <path
        d="M13.875.54H1.125a.71.71 0 00-.583 1.112l6.375 9.208c.264.382.9.382 1.165 0l6.375-9.208A.707.707 0 0013.875.54z"
        fill="#3082F5"
      />
    </svg>
  )
}

const MemoPolygonDownChart = React.memo(PolygonDownChart)
export default MemoPolygonDownChart
