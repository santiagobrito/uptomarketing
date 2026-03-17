interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className = "", height = 48 }: LogoProps) {
  const scale = height / 190;
  const width = Math.round(480 * scale);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 190"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Up To Marketing — Despachos & B2B"
      role="img"
    >
      {/* UP */}
      <text
        x="20"
        y="135"
        fill="white"
        style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "110px",
          fontWeight: 400,
        }}
      >
        UP
      </text>

      {/* Blue triangle accent */}
      <polygon points="164,22 150,54 178,54" fill="#185FA5" />

      {/* Vertical separator line */}
      <line
        x1="196"
        y1="26"
        x2="196"
        y2="170"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.8"
      />

      {/* to */}
      <text
        x="212"
        y="78"
        fill="rgba(255,255,255,0.7)"
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "13px",
          fontWeight: 300,
          fontStyle: "italic",
        }}
      >
        to
      </text>

      {/* MARKETING */}
      <text
        x="210"
        y="123"
        fill="white"
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        MARKETING
      </text>

      {/* Underline */}
      <line
        x1="210"
        y1="134"
        x2="390"
        y2="134"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.6"
      />

      {/* DESPACHOS & B2B */}
      <text
        x="210"
        y="152"
        fill="rgba(255,255,255,0.6)"
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "11px",
          fontWeight: 300,
        }}
      >
        DESPACHOS &amp; B2B
      </text>
    </svg>
  );
}
