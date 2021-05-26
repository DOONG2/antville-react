import * as React from 'react'

function PictureUploadButtonGrey(props: any) {
  return (
    <svg width={28} height={28} fill="none" {...props}>
      <g opacity={0.2}>
        <path
          d="M23.625 5.25H4.375a.875.875 0 00-.875.875v15.75c0 .483.392.875.875.875h19.25a.875.875 0 00.875-.875V6.125a.875.875 0 00-.875-.875z"
          stroke="#1942E0"
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 18.376l5.506-5.506a.875.875 0 011.238 0l4.887 4.887a.875.875 0 001.238 0l2.262-2.262a.875.875 0 011.238 0l4.631 4.63"
          stroke="#1942E0"
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M17 12a1 1 0 100-2 1 1 0 000 2z" fill="#1942E0" />
      </g>
    </svg>
  )
}

const MemoPictureUploadButtonGrey = React.memo(PictureUploadButtonGrey)
export default MemoPictureUploadButtonGrey
