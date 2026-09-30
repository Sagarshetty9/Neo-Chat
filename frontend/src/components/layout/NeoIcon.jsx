function NeoChatIcon({ size = 50 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Neo Chat"
    >
      {/* hard shadow for the tile */}
      <rect x="11" y="11" width="50" height="50" rx="4" fill="#21201c" />
      {/* tile */}
      <rect
        x="5"
        y="5"
        width="50"
        height="50"
        rx="4"
        fill="#f4f2ed"
        stroke="#21201c"
        strokeWidth="4"
      />

      {/* hard shadow for the bubble */}
      <path d="M17 17H49V41H35L25 50V41H17Z" fill="#21201c" />
      {/* bubble */}
      <path
        d="M14 14H46V38H32L22 47V38H14Z"
        fill="#29acb3"
        stroke="#21201c"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      {/* N */}
      <path
        d="M23 33V19L37 33V19"
        fill="none"
        stroke="#21201c"
        strokeWidth="3.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default NeoChatIcon;
