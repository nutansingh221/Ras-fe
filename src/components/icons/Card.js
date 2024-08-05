function Card() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        ry="2"
        stroke="#B9B9B9"
        strokeWidth="2"
        fill="none"
      />
      <line x1="1" y1="10" x2="23" y2="10" stroke="#B9B9B9" strokeWidth="2" />
      <rect x="3" y="14" width="6" height="4" fill="#B9B9B9" />
    </svg>
  );
}

export default Card;
