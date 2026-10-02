interface CtaProps {
  title?: string | null;
  subtitle?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
  bgColor?: string | null;
  textColor?: string | null;
  gradient?: boolean | null;
  gradientTo?: string | null;
  titleFont?: string | null;
  subtitleFont?: string | null;
}

export default function Cta({ title, subtitle, buttonText, buttonLink, bgColor, textColor, gradient, gradientTo, titleFont, subtitleFont }: CtaProps) {
  const bg = bgColor || "#0D9488";
  const fg = textColor || "#ffffff";
  const background = gradient
    ? `linear-gradient(135deg, ${bg}, ${gradientTo || "#14B8A6"})`
    : bg;

  return (
    <section className="cta" style={{ background, color: fg }}>
      <div className="cta-text">
        <h2 style={{ fontFamily: `'${titleFont || "Plus Jakarta Sans"}', sans-serif`, color: fg }}>{title || "Punya Ide Digital untuk Bisnis Anda?"}</h2>
        <p style={{ fontFamily: `'${subtitleFont || "Plus Jakarta Sans"}', sans-serif`, color: fg }}>{subtitle || "Mari wujudkan bersama Magnus System."}</p>
      </div>
      <a href={buttonLink || "#contact-section"} className="btn btn-white" style={{ fontSize: "14px", padding: "14px 32px", borderRadius: "10px", fontWeight: 700, whiteSpace: "nowrap" }}>
        {buttonText || "Konsultasi Gratis"} <span>→</span>
      </a>
    </section>
  );
}
