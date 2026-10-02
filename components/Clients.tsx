interface Customers {
  id: number;
  name: string;
  logoUrl: string | null;
}

interface ClientsProps {
  customers: Customers[];
  sectionTitle?: string | null;
  sectionSubtitle?: string | null;
}

export default function Clients({ customers, sectionSubtitle }: ClientsProps) {
  const defaultLogos = [
    { name: "klapa manis", color: "#0D9488" },
    { name: "CV Digital Solusi", color: "#0D9488" },
    { name: "PT Maju Bersama", color: "#0D9488" },
    { name: "Surya Abadi", color: "#0D9488" },
    { name: "Nusantara Tech", color: "#0D9488" },
  ];

  const displayLogos = customers.length > 0
    ? customers.slice(0, 5).map((c) => ({
        name: c.name,
        color: "#0D9488",
        logo: c.logoUrl,
      }))
    : defaultLogos;

  return (
    <section className="clients" id="clients-section">
      <div className="clients-header">
        <div className="section-badge">{sectionSubtitle || "KLIEN KAMI"}</div>
        <h2 className="section-title">Dipercaya oleh Berbagai Bisnis</h2>
        <p className="section-desc">
          Terima kasih kepada klien yang telah mempercayakan proyek digital mereka kepada Magnus System.
        </p>
      </div>
      <div className="clients-logos">
        {displayLogos.map((logo, i) => (
          <div key={i} className="client-logo-card">
            {logo.logo ? (
              <img src={logo.logo} alt={logo.name} style={{ height: "32px", objectFit: "contain" }} />
            ) : (
              <>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={logo.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "var(--dark)" }}>{logo.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
