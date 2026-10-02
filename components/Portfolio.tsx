interface PortfolioProps {
  items: { id: number; title: string; description: string | null; image: string | null; category: string | null }[];
  sectionTitle?: string | null;
  sectionSubtitle?: string | null;
  sectionDescription?: string | null;
}

export default function Portfolio({ items, sectionTitle, sectionSubtitle }: PortfolioProps) {
  return (
    <section className="portfolio" id="portfolio-section">
      <div className="portfolio-header">
        <div>
          <div className="section-badge">{sectionSubtitle || "PORTFOLIO"}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{
            __html: sectionTitle || "Beberapa Proyek Kami",
          }} />
        </div>
        <a href="#contact-section" className="btn btn-outline">
          Lihat Semua Portfolio <span>→</span>
        </a>
      </div>
      <div className="portfolio-grid">
        {items.map((p) => (
          <div key={p.id} className="portfolio-card">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
            )}
            <div className="portfolio-card-overlay">
              <span className="portfolio-card-tag">{p.category || "Proyek"}</span>
              <h3>{p.title}</h3>
              {p.description && <p>{p.description}</p>}
              <span className="portfolio-card-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
