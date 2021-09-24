import * as React from "react";

function Pencil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={23} height={20} fill="none" {...props}>
      <path
        d="M19.596 4.8a1.044 1.044 0 000-1.512L17.113.804a1.044 1.044 0 00-1.512 0l-1.945 1.944 4.104 4.104L19.596 4.8zM.48 15.817v4.104h4.104l11.88-11.989-3.995-4.104L.48 15.817zm19.2-5.005v3.24h3.24v2.16h-3.24v3.24h-2.16v-3.24h-3.24v-2.16h3.24v-3.24h2.16z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPencil = React.memo(Pencil);
export default MemoPencil;
