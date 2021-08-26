import * as React from 'react'

function HeaderLogo(props: any) {
  return (
    <svg data-name="\uB808\uC774\uC5B4 1" viewBox="0 0 861.2 158.73" {...props}>
      <defs>
        <linearGradient
          id="HeaderLogo_a"
          x1={67.52}
          y1={169.75}
          x2={67.52}
          y2={-21.43}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffa99d" />
          <stop offset={0.07} stopColor="#fe9093" />
          <stop offset={0.19} stopColor="#fd6d85" />
          <stop offset={0.32} stopColor="#fc5079" />
          <stop offset={0.46} stopColor="#fb3970" />
          <stop offset={0.61} stopColor="#fa296a" />
          <stop offset={0.77} stopColor="#fa2066" />
          <stop offset={1} stopColor="#fa1d65" />
        </linearGradient>
        <linearGradient
          id="HeaderLogo_b"
          x1={201.88}
          y1={-36.59}
          x2={203.95}
          y2={212.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b1acff" />
          <stop offset={0.05} stopColor="#a0a0fb" />
          <stop offset={0.2} stopColor="#7784f3" />
          <stop offset={0.35} stopColor="#556cec" />
          <stop offset={0.51} stopColor="#3b59e6" />
          <stop offset={0.66} stopColor="#284ce2" />
          <stop offset={0.82} stopColor="#1d45e0" />
          <stop offset={1} stopColor="#1942df" />
        </linearGradient>
      </defs>
      <path
        d="M334.63 138.75l45.28-115.51a49.64 49.64 0 006.17 2.17c4.94.84 9.74 1.89 11.82 7.24 13.36 33.53 28.52 72.57 41.87 106.1h-17.52l-11.54-29.76h-48.12l-11.13 29.75zm51.74-93.19l-17.94 47.7h36.3zM489.99 56.9c18.36 0 30.32 13.22 30.32 34.94v46.91h-15.3V97.83c0-17-6.12-26.14-16.41-26.14-13.5 0-20.31 12.28-20.31 29.91v37.15h-15.3V58.47c6.68-.94 14.88-.16 14.88 7.71 5.56-6.29 14.05-9.28 22.12-9.28zM584.15 121.6l.55 9.6c.28 3.15-1 6-4.17 7.24a26.73 26.73 0 01-8.2 1.1c-13.78 0-24.35-7.71-24.35-24.56V72.79h-16.13v-14.8h16.13V34.86h15.3v23.13h20c.56 6.77-.83 15.11-7.65 15.11h-12.35v38.72c0 8.82 4.73 12.44 11.13 12.44a16.64 16.64 0 009.74-2.66zM647.71 67.91c2.22-6.92 6.26-9.44 11.82-9.44h7.23l-28.37 80.28h-16.41l-29.07-80.28h8.48c4.59 0 7.93.94 10.43 6.45l18.64 54.31zM689.02 23.05c5.28 0 9.73 5 9.73 11 0 6.14-4.45 11-9.73 11s-9.74-4.88-9.74-11c0-5.96 4.45-11 9.74-11zm7.65 115.7h-15.3V58.47c6.25-1.26 15.3.31 15.3 9.76zM734.22 138.75h-15.3V18.52c6.26-1.26 15.3 6.82 15.3 16.27zM770.38 138.75h-15.3V18.52c6.26-1.26 15.3 6.82 15.3 16.27zM852.44 127.58c.14 3.15.14 5.51-2.23 7.24-7 5-14.88 5.51-22.25 5.51-25.45 0-38.81-16.53-38.81-42.5 0-23.78 14.19-40.93 35.47-40.93 24.76 0 34.08 20.78 34.08 47.22h-54.11c1 13.07 9.88 21.41 23.37 21.41 7.65 0 15.58-3.15 23.09-7.71zm-9.36-37.47c-1-9.92-7.93-18.42-18.5-18.42-11.54 0-18.22 9.45-19.89 18.42z"
        fill="#2d2d2d"
        stroke="#2d2d2d"
        strokeMiterlimit={10}
        strokeWidth={5}
      />
      <path
        d="M67.52 0A67.52 67.52 0 01135 67.52v91.2H0v-91.2A67.52 67.52 0 0167.52 0z"
        fill="url(#HeaderLogo_a)"
      />
      <path
        d="M135 0h135v91.2a67.52 67.52 0 01-67.52 67.52A67.52 67.52 0 01135 91.2V0z"
        fill="url(#HeaderLogo_b)"
      />
    </svg>
  )
}

const MemoHeaderLogo = React.memo(HeaderLogo)
export default MemoHeaderLogo
