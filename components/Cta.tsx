interface CtaProps {
  title?: string | null;
  subtitle?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
}

export default function Cta({ title, subtitle, buttonText, buttonLink }: CtaProps) {
  return (
    <section className="cta">
      <div className="cta-text">
        <h2>{title || "Punya Ide Digital untuk Bisnis Anda?"}</h2>
        <p>{subtitle || "Mari wujudkan bersama Magnus System."}</p>
      </div>
      <a href={buttonLink || "#contact-section"} className="btn btn-white" style={{ fontSize: "14px", padding: "14px 32px", borderRadius: "10px", fontWeight: 700, whiteSpace: "nowrap" }}>
        {buttonText || "Konsultasi Gratis"} <span>→</span>
      </a>
    </section>
  );
}
