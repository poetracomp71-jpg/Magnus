interface AboutProps {
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  image?: string | null;
  accentColor?: string | null;
}

export default function About({ title, subtitle, description, image }: AboutProps) {
  const values = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 9 6 9z" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 18 9 18 9z" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
      title: "Kompeten",
      desc: "Memberikan hasil terbaik",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Kolaborasi",
      desc: "Bekerja bersama klien",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Inovasi",
      desc: "Selalu berkembang",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Kepercayaan",
      desc: "Menjadi mitra jangka panjang",
    },
  ];

  return (
    <section className="about" id="about-section">
      <div>
        <div className="section-badge">{subtitle || "TENTANG KAMI"}</div>
        <h2 className="section-title"
          dangerouslySetInnerHTML={{
            __html: title || "Magnus System",
          }}
        />
        <p style={{ fontSize: "18px", fontWeight: 600, color: "#1E293B", marginBottom: "16px" }}>
          Solusi Digital untuk Masa Depan Bisnis
        </p>
        <p className="section-desc">
          {description || "Magnus System adalah perusahaan teknologi yang berfokus pada pengembangan website, aplikasi, dan sistem bisnis yang dirancang khusus untuk membantu bisnis tumbuh lebih efisien dan modern."}
        </p>
        <a href="#contact-section" className="btn btn-primary" style={{ marginTop: "24px" }}>
          Lebih Mengenal Kami <span>→</span>
        </a>
      </div>

      <div className="about-right">
        <div className="about-image">
          <img
            src={image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"}
            alt="About Magnus System"
          />
        </div>
        <div className="about-values">
          {values.map((v, i) => (
            <div key={i} className="about-value-card">
              <div className="about-value-icon">{v.icon}</div>
              <div className="about-value-title">{v.title}</div>
              <div className="about-value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
