// Self-contained SVG car illustrations, differentiated by body silhouette.
// No external images — fast, reliable, themeable via `accent`.

function Wheels({ cx1 = 95, cx2 = 305, cy = 150, r = 26 }) {
  return (
    <g>
      {[cx1, cx2].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={cy} r={r} fill="#111827" />
          <circle cx={cx} cy={cy} r={r * 0.55} fill="#4b5563" />
          <circle cx={cx} cy={cy} r={r * 0.2} fill="#9ca3af" />
        </g>
      ))}
    </g>
  );
}

const bodies = {
  hatch: (a) => (
    <>
      <path
        d="M40 150 C40 120 55 112 80 108 L120 82 C135 72 150 68 175 68 L250 68 C275 68 292 78 305 100 L345 112 C362 117 370 126 370 150 Z"
        fill={a}
      />
      <path d="M128 92 L170 76 L232 76 L252 96 Z" fill="#dbeafe" opacity="0.92" />
      <path d="M176 76 L176 96 M216 76 L216 96" stroke={a} strokeWidth="3" />
    </>
  ),
  sedan: (a) => (
    <>
      <path
        d="M30 150 C30 124 44 116 70 110 L118 84 C132 74 150 70 180 70 L255 70 C288 70 300 84 318 104 L356 116 C372 121 380 130 380 150 Z"
        fill={a}
      />
      <path d="M126 92 L168 78 L246 78 L270 100 Z" fill="#dbeafe" opacity="0.92" />
      <path d="M186 78 L186 98 M226 78 L226 98" stroke={a} strokeWidth="3" />
    </>
  ),
  suv: (a) => (
    <>
      <path
        d="M34 152 C34 118 48 108 74 102 L112 72 C126 62 142 58 170 58 L262 58 C292 58 306 70 322 96 L360 110 C376 116 384 126 384 152 Z"
        fill={a}
      />
      <path d="M122 84 L160 64 L250 64 L276 92 Z" fill="#dbeafe" opacity="0.92" />
      <path d="M182 64 L182 92 M224 64 L224 92" stroke={a} strokeWidth="3" />
    </>
  ),
  van: (a) => (
    <>
      <path
        d="M34 154 C34 108 46 96 74 92 L132 56 C146 48 160 46 188 46 L300 46 C330 46 346 60 356 96 L372 112 C384 120 388 130 388 154 Z"
        fill={a}
      />
      <path d="M122 72 L162 54 L300 54 L310 92 L122 92 Z" fill="#dbeafe" opacity="0.92" />
      <path d="M176 56 L176 92 M224 56 L224 92 M272 56 L272 92" stroke={a} strokeWidth="3" />
    </>
  ),
  pickup: (a) => (
    <>
      <path
        d="M30 154 C30 120 44 112 70 106 L104 74 C118 64 134 60 160 60 L214 60 C236 60 248 72 256 94 L256 112 L386 112 C390 118 392 132 392 154 Z"
        fill={a}
      />
      <path d="M116 86 L150 66 L206 66 L224 94 Z" fill="#dbeafe" opacity="0.92" />
      <rect x="266" y="92" width="112" height="20" rx="3" fill={a} opacity="0.7" />
    </>
  ),
  luxury: (a) => (
    <>
      <path
        d="M24 150 C24 122 40 114 66 108 L120 80 C136 70 156 66 188 66 L268 66 C300 66 312 82 330 104 L372 118 C388 123 396 132 396 150 Z"
        fill={a}
      />
      <path d="M130 90 L176 74 L256 74 L282 100 Z" fill="#e0e7ff" opacity="0.95" />
      <path d="M194 74 L194 98 M234 74 L234 98" stroke={a} strokeWidth="3" />
      <path d="M40 150 L396 150" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
    </>
  ),
  "luxury-suv": (a) => (
    <>
      <path
        d="M28 152 C28 114 44 104 72 98 L112 68 C126 58 144 54 174 54 L270 54 C302 54 318 68 332 96 L374 110 C392 116 400 126 400 152 Z"
        fill={a}
      />
      <path d="M122 82 L162 62 L258 62 L286 92 Z" fill="#e0e7ff" opacity="0.95" />
      <path d="M186 62 L186 92 M230 62 L230 92" stroke={a} strokeWidth="3" />
      <path d="M44 150 L398 150" stroke="#ffffff" strokeWidth="2" opacity="0.45" />
    </>
  ),
};

export default function CarIllustration({
  body = "sedan",
  accent = "#345a9e",
  className = "h-full w-full",
}) {
  const draw = bodies[body] || bodies.sedan;
  const wheels =
    body === "pickup" || body === "luxury-suv"
      ? { cx1: 92, cx2: 320 }
      : { cx1: 95, cx2: 305 };
  return (
    <svg
      viewBox="0 0 420 200"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* soft ground shadow */}
      <ellipse cx="210" cy="182" rx="180" ry="12" fill="#0d1b33" opacity="0.08" />
      {/* subtle light sweep for depth */}
      <defs>
        <linearGradient id={`sheen-${body}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {draw(accent)}
      <path
        d="M40 150 C40 120 55 112 80 108 L370 108 L370 150 Z"
        fill={`url(#sheen-${body})`}
      />
      <Wheels {...wheels} />
      {/* headlight */}
      <circle cx="372" cy="128" r="6" fill="#fde68a" />
      {/* door handle hint */}
      <path d="M150 118 h26" stroke="#0d1b33" strokeWidth="3" opacity="0.25" strokeLinecap="round" />
    </svg>
  );
}
