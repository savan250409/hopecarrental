// Lightweight inline icon set (no icon-font dependency). Stroke-based, 24x24.
const paths = {
  fleet: (
    <>
      <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5" />
      <path d="M5 13h14v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H8a2 2 0 0 1-4 0H3a1 1 0 0 1 0-2z" />
      <circle cx="7.5" cy="16.5" r="1.3" />
      <circle cx="16.5" cy="16.5" r="1.3" />
    </>
  ),
  price: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9a2.5 2.5 0 0 0-2.5-1.5c-1.4 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2A2.5 2.5 0 0 1 9.5 15" />
      <path d="M12 6v1.5M12 16.5V18" />
    </>
  ),
  service: (
    <>
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 16.5 7.1 18.2 8 12.7l-4-3.9L9.5 8z" />
    </>
  ),
  maintenance: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1z" />
    </>
  ),
  seat: (
    <>
      <path d="M6 19v-3a3 3 0 0 1 3-3h6" />
      <path d="M7 13V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M15 13h2a2 2 0 0 1 2 2v4" />
    </>
  ),
  bag: (
    <>
      <rect x="6" y="8" width="12" height="12" rx="2" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  gear: (
    <>
      <path d="M12 5v14" />
      <path d="M8 7h8M8 7a4 4 0 0 0 8 0" />
      <circle cx="12" cy="19" r="2" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
      <path d="M8.5 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3-.1.5a5 5 0 0 0 2.6 2.3c.3.1.5 0 .6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5a1.8 1.8 0 0 1-1.2 1.6c-.6.2-1.4.3-3.3-.6a8 8 0 0 1-3.6-3.6c-.5-1-.6-1.9-.1-2.6z" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  star: (
    <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8-4.3-4.1 5.9-.9z" />
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" />,
};

export default function Icon({ name, className = "h-6 w-6", filled = false, ...props }) {
  const node = paths[name];
  if (!node) return null;
  const isFilled = filled || name === "star";
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {node}
    </svg>
  );
}
