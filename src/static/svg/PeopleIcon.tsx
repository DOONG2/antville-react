import * as React from 'react'

function PeopleIcon(props: any) {
  return (
    <svg width={12} height={12} fill="none" {...props}>
      <path
        d="M1 6.5h5.5a1 1 0 01.997.926L7.5 7.5v1.25c0 2.1-2.144 2.75-3.75 2.75-1.575 0-3.664-.624-3.747-2.626L0 8.75V7.5a1 1 0 01.925-.997L1 6.5zm6.61 0H11a1 1 0 01.997.925L12 7.5v1c0 1.88-1.715 2.5-3 2.5a3.87 3.87 0 01-1.654-.363c.375-.447.62-1.016.65-1.732L8 8.75V7.5c0-.35-.125-.67-.327-.925L7.61 6.5H11 7.61zM3.75 0a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm5.5 1a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"
        fill="#757575"
      />
    </svg>
  )
}

const MemoPeopleIcon = React.memo(PeopleIcon)
export default MemoPeopleIcon
