// Decorative layered waves — evokes the Mauritius lagoon. Purely presentational.
export default function TropicalWaves({ className = "", flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        fill="currentColor"
        fillOpacity="0.5"
        d="M0 60 C240 110 480 10 720 40 C960 70 1200 120 1440 70 L1440 140 L0 140 Z"
      />
      <path
        fill="currentColor"
        fillOpacity="0.8"
        d="M0 90 C240 50 480 120 720 90 C960 60 1200 110 1440 95 L1440 140 L0 140 Z"
      />
      <path
        fill="currentColor"
        d="M0 115 C320 95 560 130 720 120 C960 105 1200 130 1440 115 L1440 140 L0 140 Z"
      />
    </svg>
  );
}
