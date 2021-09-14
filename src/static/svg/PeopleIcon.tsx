import * as React from 'react'

function PeopleIcon(props: any) {
  return (
    <svg width={14} height={16} fill="none" {...props}>
      <g clipPath="url(#PeopleIcon0)" fill="#fff">
        <path d="M6.114 14s-.874 0-.874-1 .874-4 4.367-4 4.367 3 4.367 4-.874 1-.874 1H6.114zm3.493-6c.695 0 1.361-.316 1.853-.879.49-.562.767-1.325.767-2.121s-.276-1.559-.768-2.121C10.97 2.316 10.303 2 9.607 2c-.695 0-1.361.316-1.853.879-.491.562-.767 1.325-.767 2.121s.276 1.559.767 2.121C8.246 7.684 8.912 8 9.607 8z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.555 14a2.515 2.515 0 01-.188-1c0-1.355.594-2.75 1.69-3.72A4.879 4.879 0 004.367 9C.873 9 0 12 0 13s.873 1 .873 1h3.682z"
        />
        <path d="M3.93 8c.58 0 1.135-.263 1.544-.732.41-.47.64-1.105.64-1.768s-.23-1.299-.64-1.768C5.064 3.263 4.51 3 3.93 3c-.579 0-1.134.263-1.543.732a2.695 2.695 0 00-.64 1.768c0 .663.23 1.299.64 1.768.409.469.964.732 1.543.732z" />
      </g>
      <defs>
        <clipPath id="PeopleIcon0">
          <path fill="#fff" d="M0 0h13.973v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

const MemoPeopleIcon = React.memo(PeopleIcon)
export default MemoPeopleIcon
