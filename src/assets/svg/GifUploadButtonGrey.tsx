import * as React from 'react'

function GifUploadButtonGrey(props: any) {
  return (
    <svg width={28} height={28} fill="none" {...props}>
      <path
        d="M23.625 5.25H4.375a.875.875 0 00-.875.875v15.75c0 .483.392.875.875.875h19.25a.875.875 0 00.875-.875V6.125a.875.875 0 00-.875-.875z"
        stroke="#1942E0"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoGifUploadButtonGrey = React.memo(GifUploadButtonGrey)
export default MemoGifUploadButtonGrey
