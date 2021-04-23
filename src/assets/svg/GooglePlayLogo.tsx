import * as React from 'react'

function GooglePlayLogo(props: any) {
  return (
    <svg width={18} height={19} fill="none" {...props}>
      <g filter="url(#GooglePlayLogo0)">
        <path
          d="M.34.292C.128.519 0 .871 0 1.326v16.282c0 .457.127.808.34 1.034l.055.053 9.121-9.12V9.36L.396.238.34.292z"
          fill="url(#GooglePlayLogo0paint)"
        />
        <path
          d="M12.56 12.617L9.52 9.576V9.36l3.04-3.04.069.038 3.602 2.047c1.028.585 1.028 1.54 0 2.126l-3.603 2.047-.069.038z"
          fill="url(#GooglePlayLogo1paint)"
        />
        <g filter="url(#GooglePlayLogo1filter)">
          <path
            d="M12.628 12.576l-3.11-3.11-9.174 9.176c.338.36.899.404 1.53.046l10.754-6.111z"
            fill="url(#GooglePlayLogo2paint)"
          />
        </g>
        <path
          d="M12.628 6.358L1.874.248C1.243-.113.682-.067.344.292l9.175 9.175 3.109-3.11z"
          fill="url(#GooglePlayLogo3paint)"
        />
      </g>
      <defs>
        <linearGradient
          id="GooglePlayLogo0paint"
          x1={8.708}
          y1={1.154}
          x2={-3.647}
          y2={13.509}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset={0.007} stopColor="#00A1FF" />
          <stop offset={0.26} stopColor="#00BEFF" />
          <stop offset={0.512} stopColor="#00D2FF" />
          <stop offset={0.76} stopColor="#00DFFF" />
          <stop offset={1} stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="GooglePlayLogo1paint"
          x1={17.57}
          y1={9.468}
          x2={-0.243}
          y2={9.468}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset={0.409} stopColor="#FFBD00" />
          <stop offset={0.775} stopColor="orange" />
          <stop offset={1} stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="GooglePlayLogo2paint"
          x1={10.939}
          y1={11.156}
          x2={-5.816}
          y2={27.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset={1} stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="GooglePlayLogo3paint"
          x1={-1.967}
          y1={-5.127}
          x2={5.515}
          y2={2.354}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset={0.069} stopColor="#2DA771" />
          <stop offset={0.476} stopColor="#15CF74" />
          <stop offset={0.801} stopColor="#06E775" />
          <stop offset={1} stopColor="#00F076" />
        </linearGradient>
        <filter
          id="GooglePlayLogo0"
          x={0}
          y={0}
          width={17.002}
          height={18.935}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-0.15} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={0.15} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id="GooglePlayLogo1filter"
          x={0.344}
          y={9.467}
          width={12.284}
          height={9.468}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-0.15} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  )
}

const MemoGooglePlayLogo = React.memo(GooglePlayLogo)
export default MemoGooglePlayLogo
