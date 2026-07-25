import { companyConfig } from "../site-config";

type LogoProps = {
  variant?: "light-background" | "dark-background";
  className?: string;
  showTagline?: boolean;
};

export function Logo({
  variant = "light-background",
  className,
  showTagline = true,
}: LogoProps) {
  const textColor = variant === "dark-background" ? "#F6F2E9" : "#20201E";
  const frameColor = variant === "dark-background" ? "#C2A46F" : "#AD9160";
  const viewBox = showTagline ? "0 0 320 256" : "0 0 320 205";

  return (
    <svg
      className={className}
      viewBox={viewBox}
      role="img"
      aria-label={companyConfig.brandName}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 18H188V83M22 18V194H90"
        fill="none"
        stroke={frameColor}
        strokeWidth="4.5"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="86"
        y="126"
        fill={textColor}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="64"
        fontWeight="400"
        letterSpacing="-2.5"
      >
        ДеПа
      </text>
      <text
        x="86"
        y="194"
        fill={textColor}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="64"
        fontWeight="300"
        letterSpacing="-2.5"
      >
        Строй
      </text>
      {showTagline && (
        <text
          x="6"
          y="244"
          fill={frameColor}
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontSize="11"
          fontWeight="400"
          letterSpacing="6.4"
        >
          РЕМОНТ КВАРТИР ПОД КЛЮЧ
        </text>
      )}
    </svg>
  );
}
