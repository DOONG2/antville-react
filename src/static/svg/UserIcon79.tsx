import * as React from "react";

function UserIcon79(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={79} height={79} fill="none" {...props}>
      <circle cx={39.5} cy={39.5} r={39.5} fill="#F4F4F4" />
      <path
        d="M39.499 39.331c5.868 0 10.624-4.756 10.624-10.624S45.367 18.082 39.5 18.082s-10.625 4.757-10.625 10.625S33.631 39.33 39.499 39.33z"
        stroke="#757575"
        strokeWidth={2}
      />
      <path
        d="M50.124 43.582h.748a6.375 6.375 0 016.324 5.584l.831 6.639a4.248 4.248 0 01-4.218 4.777H25.19a4.25 4.25 0 01-4.218-4.777l.829-6.639a6.375 6.375 0 016.328-5.584h.746"
        stroke="#757575"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoUserIcon79 = React.memo(UserIcon79);
export default MemoUserIcon79;
