"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  logoUrl?: string | null;
  navbarCaption?: string | null;
  navbarCaptionColor?: string | null;
  navbarCaptionGradient?: boolean | null;
  navbarCaptionGradientTo?: string | null;
}

export default function Navbar({ logoUrl, navbarCaption, navbarCaptionColor, navbarCaptionGradient, navbarCaptionGradientTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const captionColor = navbarCaptionColor || "#0D9488";
  const captionStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    lineHeight: "1.2",
    marginTop: "2px",
    transition: "all 0.3s ease",
    ...(navbarCaptionGradient
      ? {
          background: `linear-gradient(135deg, ${captionColor}, ${navbarCaptionGradientTo || "#14B8A6"})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }
      : { color: captionColor }
    ),
  };

  return (
    <header className={`nav ${scrolled ? "nav-solid" : "nav-transparent"}`}>
      <a href="#hero" className="brand">
        {logoUrl ? (
          <img src={logoUrl} alt="Logo" style={{ height: "36px", objectFit: "contain" }} />
        ) : (
          <>
            <div className="brand-icon">M</div>
            <div>
              MAGNUS<br />
              <span>SYSTEM</span>
            </div>
          </>
        )}
        {navbarCaption && (
          <span style={captionStyle}>{navbarCaption}</span>
        )}
      </a>
      <div className="nav-links">
        <a href="#hero" className="active">Beranda</a>
        <a href="#about-section">Tentang Kami</a>
        <a href="#services-section">Layanan</a>
        <a href="#portfolio-section">Portfolio</a>
        <a href="#proses-section">Proses</a>
        <a href="#contact-section">Kontak</a>
      </div>
      <a href="#contact-section" className="nav-cta">
        Konsultasi Gratis <span>→</span>
      </a>
    </header>
  );
}
