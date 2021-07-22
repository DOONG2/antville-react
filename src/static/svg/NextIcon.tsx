import * as React from 'react'

function NextIcon(props: any) {
  return (
    <svg width={15} height={12} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.406.406a.469.469 0 00-.468.469v4.5A2.344 2.344 0 003.28 7.719h9.181l-3.138 3.137a.47.47 0 00.664.663l3.938-3.937a.468.468 0 000-.664l-3.75-3.75a.47.47 0 10-.664.664l2.95 2.95h-9.18a1.406 1.406 0 01-1.407-1.407v-4.5a.469.469 0 00-.469-.469z"
        fill="#757575"
      />
    </svg>
  )
}

const MemoNextIcon = React.memo(NextIcon)
export default MemoNextIcon
