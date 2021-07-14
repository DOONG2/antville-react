import * as React from 'react'

function ProfileLikeEmpty(props: any) {
  return (
    <svg width={200} height={184} fill="none" {...props}>
      <path
        d="M144.264 0c-19.055 0-35.337 14.301-44.282 24.16C91.036 14.302 74.79 0 55.746 0 22.917 0 0 24.094 0 58.583c0 38.002 28.464 62.565 56 86.323 13 11.229 26.455 22.831 36.773 35.696 1.736 2.154 4.282 3.398 6.954 3.398h.528c2.681 0 5.218-1.254 6.945-3.398 10.336-12.865 23.782-24.477 36.791-35.696C171.518 121.157 200 96.595 200 58.583 200 24.093 177.082 0 144.264 0z"
        fill="#E0E0E0"
      />
    </svg>
  )
}

const MemoProfileLikeEmpty = React.memo(ProfileLikeEmpty)
export default MemoProfileLikeEmpty
