import * as React from 'react'

function GifUploadButton(props: any) {
  return (
    <svg width={28} height={28} fill="none" {...props}>
      <path
        d="M14.547 10.172v7.656M20.836 10.172h-3.281v7.656M20.016 14h-2.461M10.172 14h1.64v1.64a2.188 2.188 0 01-4.374 0v-3.28a2.188 2.188 0 014.306-.547"
        stroke="#1942E0"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

const MemoGifUploadButton = React.memo(GifUploadButton)
export default MemoGifUploadButton
