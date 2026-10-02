export default function Keunggulan() {
  const items = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        </svg>
      ),
      title: "Memahami Bisnis",
      desc: "Solusi disesuaikan dengan kebutuhan Anda.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Custom Development",
      desc: "Sistem dirancang khusus sesuai kebutuhan.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Desain Modern",
      desc: "Tampilan profesional dan responsif di semua perangkat.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Support Berkelanjutan",
      desc: "Pendampingan teknis setelah project selesai.",
    },
  ];

  return (
    <section className="keunggulan" id="keunggulan-section">
      <div className="keunggulan-grid">
        <div>
          <div className="section-badge">KEUNGGULAN KAMI</div>
          <h2 className="section-title">Mengapa Memilih Magnus System?</h2>
          <p className="section-desc">
            Kami tidak hanya membuat website, tetapi membangun solusi digital yang benar-benar memberi nilai untuk bisnis Anda.
          </p>
        </div>
        <div className="keunggulan-items">
          {items.map((item, i) => (
            <div key={i} className="keunggulan-item">
              <div className="keunggulan-item-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
