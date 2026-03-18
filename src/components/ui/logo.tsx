interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className = "", height = 48 }: LogoProps) {
  const scale = height / 70;
  const width = Math.round(280 * scale);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 70"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Up To Marketing"
      role="img"
    >
      {/* UP */}
      <text
        x="6"
        y="55"
        fill="white"
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "58px",
          fontWeight: 400,
        }}
      >
        UP
      </text>

      {/* Blue triangle accent */}
      <polygon points="82,8 74,24 90,24" fill="#C8956C" />

      {/* Vertical separator line */}
      <line
        x1="100"
        y1="10"
        x2="100"
        y2="62"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.8"
      />

      {/* to */}
      <text
        x="112"
        y="28"
        fill="rgba(255,255,255,0.7)"
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          fontStyle: "italic",
        }}
      >
        to
      </text>

      {/* MARKETING */}
      <text
        x="110"
        y="52"
        fill="white"
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        MARKETING
      </text>

      {/* Underline accent */}
      <line
        x1="110"
        y1="57"
        x2="272"
        y2="57"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.8"
      />
    </svg>
  );
}
