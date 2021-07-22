import * as React from 'react'

function CalendarIcon(props: any) {
  return (
    <svg width={20} height={17} fill="none" {...props}>
      <path
        d="M16.25 2.656H3.75c-.345 0-.625.238-.625.531v10.626c0 .293.28.53.625.53h12.5c.345 0 .625-.237.625-.53V3.187c0-.293-.28-.53-.625-.53zM13.75 1.594v2.125M6.25 1.594v2.125M3.125 5.844h13.75"
        stroke="#9E9E9E"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoCalendarIcon = React.memo(CalendarIcon)
export default MemoCalendarIcon
