import * as React from 'react'

function Drowdown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={10} fill="none" {...props}>
      <path d="M1 1l7.5 7L16 1" stroke="#202020" strokeWidth={2} />
    </svg>
  )
}

const MemoDrowdown = React.memo(Drowdown)
export default MemoDrowdown
