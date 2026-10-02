interface Service {
  id: number;
  title: string;
  description: string | null;
  icon: string | null;
}

interface ServicesProps {
  services: Service[];
  sectionTitle?: string | null;
  sectionSubtitle?: string | null;
  sectionDescription?: string | null;
}

const serviceIcons: Record<string, JSX.Element> = {
  "Website Development": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="m8 21 4-4 4 4" /><path d="M12 17V7" /><path d="m17 8-4-4-4 4" />
    </svg>
  ),
  "Mobile Apps": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  "Sistem Bisnis": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  "UI/UX Design": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

function DefaultIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function Services({ services, sectionTitle, sectionSubtitle, sectionDescription }: ServicesProps) {
  return (
    <section className="services" id="services-section">
      <div className="services-header">
        <div className="section-badge">{sectionSubtitle || "LAYANAN KAMI"}</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{
          __html: sectionTitle || "Solusi Digital untuk Kebutuhan Bisnis Anda",
        }} />
        <p className="section-desc">
          {sectionDescription || "Dari Ide hingga Deploy, Kami siap membantu mewujudkan visi digital Anda."}
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div className="service-icon">
              {serviceIcons[s.title] || <DefaultIcon />}
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <a href="#contact-section" className="service-link">
              Selengkapnya <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
