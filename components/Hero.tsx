interface HeroProps {
  title?: string | null;
  subtitle?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  image?: string | null;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, image }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <div className="hero-badge">SOLUSI DIGITAL UNTUK BISNIS ANDA</div>
        <h1
          dangerouslySetInnerHTML={{
            __html: title
              ? title.replace(/\n/g, "<br/>")
                  .replace(/Digital/g, "<span>Digital</span>")
                  .replace(/Magnus System/g, "<span>Magnus System</span>")
              : "Bangun <span>Digital</span><br/>Bersama<br/><span>Magnus System</span>",
          }}
        />
        <p className="hero-desc">
          {subtitle || "Partner digital untuk website, aplikasi, dan sistem bisnis yang membantu Anda berkembang."}
        </p>
        <div className="hero-buttons">
          <a href={ctaLink || "#contact-section"} className="btn btn-primary">
            {ctaText || "Mulai Konsultasi"} <span>→</span>
          </a>
          <a href="#portfolio-section" className="btn btn-outline">
            Lihat Portfolio <span>→</span>
          </a>
        </div>
      </div>

      <div className="hero-mockup">
        {image ? (
          <div>
            <img src={image} alt="Hero" style={{ width: "100%", display: "block" }} />
          </div>
        ) : (
          <>
            <div className="hero-handwritten">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: "-40px", right: "10px", transform: "rotate(-10deg)" }}>
                <path d="M5 50 C20 15, 40 10, 75 8" stroke="#0D9488" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M65 5 L75 8 L68 15" stroke="#0D9488" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <span style={{ position: "absolute", top: "-60px", right: "-20px", fontSize: "14px", fontWeight: 600, color: "#0D9488", fontStyle: "italic", transform: "rotate(-15deg)", whiteSpace: "nowrap" }}>
                Dari ide<br/>menjadi solusi nyata
              </span>
            </div>

            <div className="hero-laptop">
              <div className="hero-laptop-bar">
                <div className="hero-laptop-dot" style={{ background: "#ef4444" }} />
                <div className="hero-laptop-dot" style={{ background: "#f59e0b" }} />
                <div className="hero-laptop-dot" style={{ background: "#22c55e" }} />
              </div>
              <div className="hero-laptop-screen">
                <div style={{ padding: "12px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "24px", height: "24px", background: "#0D9488", borderRadius: "6px", display: "grid", placeItems: "center", color: "white", fontSize: "10px", fontWeight: 900 }}>M</div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A" }}>Magnus System</span>
                </div>
                <div style={{ padding: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div style={{ background: "#F0FDFA", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "8px", color: "#64748B", marginBottom: "4px" }}>Total Pendapatan</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>Rp 125.450.000</div>
                  </div>
                  <div style={{ background: "#F0FDFA", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "8px", color: "#64748B", marginBottom: "4px" }}>Proyek Aktif</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>24</div>
                  </div>
                  <div style={{ background: "#F0FDFA", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "8px", color: "#64748B", marginBottom: "4px" }}>Tim Size</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>12 Orang</div>
                  </div>
                  <div style={{ background: "#F0FDFA", borderRadius: "8px", padding: "10px" }}>
                    <div style={{ fontSize: "8px", color: "#64748B", marginBottom: "4px" }}>Client Satisfaction</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>98%</div>
                  </div>
                </div>
                <div style={{ padding: "8px 12px" }}>
                  <div style={{ background: "#F0FDFA", borderRadius: "6px", padding: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "20px", height: "20px", background: "#0D9488", borderRadius: "4px", display: "grid", placeItems: "center", color: "white", fontSize: "8px" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: "4px", background: "#0D9488", borderRadius: "2px", width: "75%" }} />
                      <div style={{ height: "3px", background: "#99F6E4", borderRadius: "2px", width: "45%", marginTop: "3px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-phone">
              <div className="hero-phone-notch" />
              <div className="hero-phone-screen">
                <div style={{ textAlign: "center", marginBottom: "12px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#0D9488", borderRadius: "10px", display: "grid", placeItems: "center", color: "white", fontWeight: 900, fontSize: "16px", margin: "0 auto 6px" }}>M</div>
                  <div style={{ fontSize: "9px", fontWeight: 700, color: "#0F172A" }}>Magnus System</div>
                  <div style={{ fontSize: "7px", color: "#64748B" }}>Selamat Datang, Admin</div>
                </div>
                <div className="hero-phone-card">
                  <div style={{ fontSize: "7px", color: "#64748B" }}>Total Pendapatan</div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A" }}>Rp 125.450.000</div>
                </div>
                <div className="hero-phone-card">
                  <div style={{ fontSize: "7px", color: "#64748B" }}>Proyek Aktif</div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A" }}>24</div>
                </div>
                <div className="hero-phone-card">
                  <div style={{ fontSize: "7px", color: "#64748B" }}>Tim</div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A" }}>12 Orang</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <div className="hero-stat-value">50+</div>
            <div className="hero-stat-label">Proyek Selesai</div>
          </div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div className="hero-stat-value">30+</div>
            <div className="hero-stat-label">Klien</div>
          </div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Tahun Pengalaman</div>
          </div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          </div>
          <div>
            <div className="hero-stat-value">24/7</div>
            <div className="hero-stat-label">Dukungan Teknis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
