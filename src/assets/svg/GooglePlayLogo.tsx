import * as React from 'react'

function GooglePlayLogo(props: any) {
  return (
    <svg width={25} height={26} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.156.966a2.416 2.416 0 00-.183.977v22.116c0 .382.065.71.183.977L13.19 13 1.156.966zm.695 24.79c.446.19 1.028.13 1.663-.23L17.67 17.48l-3.774-3.774L1.851 25.755zm16.722-8.787l4.442-2.523c1.397-.795 1.397-2.094 0-2.888L18.57 9.033 14.604 13l3.97 3.97zM17.67 8.52L3.514.477C2.879.117 2.297.056 1.85.247l12.046 12.046L17.67 8.52z"
        fill="#1942E0"
      />
    </svg>
  )
}

const MemoGooglePlayLogo = React.memo(GooglePlayLogo)
export default MemoGooglePlayLogo
