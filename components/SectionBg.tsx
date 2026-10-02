import { ReactNode } from "react";

interface SectionBgProps {
  children: ReactNode;
  bgColor?: string | null;
  bgImage?: string | null;
  bgOpacity?: number | null;
  textColor?: string | null;
  className?: string;
  id?: string;
}

export default function SectionBg({ children, bgColor, bgImage, bgOpacity, textColor, className, id }: SectionBgProps) {
  const hasBg = bgImage && bgOpacity && bgOpacity > 0;

  return (
    <div
      id={id}
      className={className}
      style={{
        position: "relative",
        color: textColor || undefined,
      }}
    >
      {hasBg && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: bgOpacity,
            zIndex: 0,
          }}
        />
      )}
      {hasBg && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: bgColor || "#000",
            zIndex: 1,
          }}
        />
      )}
      {!hasBg && bgColor && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: bgColor,
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
