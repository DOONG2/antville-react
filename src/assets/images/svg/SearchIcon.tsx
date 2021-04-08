import * as React from 'react'

function Search(props: any) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M15.735 14.48l-3.01-3.01a7.11 7.11 0 10-1.255 1.256l3.01 3.009a.888.888 0 101.255-1.255zM1.79 7.117a5.326 5.326 0 1110.653 0 5.326 5.326 0 01-10.653 0z"
        fill="#AEAEAE"
      />
    </svg>
  )
}

const MemoSearch = React.memo(Search)
export default MemoSearch
