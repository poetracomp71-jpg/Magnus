"use client";

interface ContactProps {
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  whatsapp?: string | null;
  badge?: string | null;
  title?: string | null;
  subtitle?: string | null;
  infoColor?: string | null;
}

function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
}

function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

function MapPinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
}

function SendIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>;
}

function ChatIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>;
}

export default function Contact({ phone, email, address, whatsapp, badge, title, subtitle, infoColor }: ContactProps) {
  const waNumber = (whatsapp || "6285811470226").replace(/[^0-9]/g, "");
  const leftBg = infoColor || "#0D9488";

  return (
    <section className="contact" id="contact-section">
      <div className="contact-grid">
        <div className="contact-info" style={{ background: leftBg }}>
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.15)", color: "white", marginBottom: "16px" }}>{badge || "HUBUNGI KAMI"}</div>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white", marginBottom: "12px" }}>{title || "Mari Berdiskusi"}</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", lineHeight: 1.6 }}>{subtitle || "Ceritakan kebutuhan Anda, kami siap membantu."}</p>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-item-icon" style={{ background: "rgba(255,255,255,0.15)", borderRadius: "50%", width: "40px", height: "40px", display: "grid", placeItems: "center", color: "white" }}>
                <PhoneIcon />
              </div>
              <div>
                <div className="contact-item-value" style={{ fontSize: "15px", fontWeight: 600, color: "white" }}>{phone || "085811470226"}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" style={{ background: "rgba(255,255,255,0.15)", borderRadius: "50%", width: "40px", height: "40px", display: "grid", placeItems: "center", color: "white" }}>
                <MailIcon />
              </div>
              <div>
                <div className="contact-item-value" style={{ fontSize: "15px", fontWeight: 600, color: "white" }}>{email || "padhi39@gmail.com"}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" style={{ background: "rgba(255,255,255,0.15)", borderRadius: "50%", width: "40px", height: "40px", display: "grid", placeItems: "center", color: "white" }}>
                <MapPinIcon />
              </div>
              <div>
                <div className="contact-item-value" style={{ fontSize: "15px", fontWeight: 600, color: "white" }}>{address || "Surabaya, Indonesia"}</div>
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Putra Comp! Saya tertarik dengan layanan Magnus System. Bisa info lebih lanjut?")}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              marginTop: "28px", padding: "14px 28px", borderRadius: "9999px",
              background: "white", color: "#0D9488", fontWeight: 700, fontSize: "14px",
              transition: "all 0.2s", textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChatIcon /> Chat WhatsApp
          </a>
        </div>

        <div className="contact-form" style={{ padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
          <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="form-field" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama Anda" style={{
                padding: "14px 16px", border: "1px solid #E2E8F0", borderRadius: "10px",
                fontSize: "14px", fontFamily: "inherit", outline: "none", background: "#F8FAFC",
                transition: "border-color 0.2s",
              }} onFocus={(e) => e.currentTarget.style.borderColor = "#0D9488"} onBlur={(e) => e.currentTarget.style.borderColor = "#E2E8F0"} />
            </div>
            <div className="form-field" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>Email</label>
              <input type="email" placeholder="Masukkan email Anda" style={{
                padding: "14px 16px", border: "1px solid #E2E8F0", borderRadius: "10px",
                fontSize: "14px", fontFamily: "inherit", outline: "none", background: "#F8FAFC",
                transition: "border-color 0.2s",
              }} onFocus={(e) => e.currentTarget.style.borderColor = "#0D9488"} onBlur={(e) => e.currentTarget.style.borderColor = "#E2E8F0"} />
            </div>
          </div>
          <div className="form-field" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>Pesan</label>
            <textarea
              placeholder="Ceritakan kebutuhan proyek Anda..."
              style={{
                padding: "14px 16px", border: "1px solid #E2E8F0", borderRadius: "10px",
                fontSize: "14px", fontFamily: "inherit", outline: "none", background: "#F8FAFC",
                resize: "vertical", minHeight: "100px", transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = "#0D9488"}
              onBlur={(e) => e.currentTarget.style.borderColor = "#E2E8F0"}
            />
          </div>
          <button style={{
            width: "100%", padding: "14px 24px", borderRadius: "10px",
            background: "linear-gradient(135deg, #0D9488, #14B8A6)", color: "white", border: "none",
            fontSize: "15px", fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            transition: "all 0.2s", boxShadow: "0 4px 12px rgba(13,148,136,0.3)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(13,148,136,0.4)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(13,148,136,0.3)"; }}
          >
            <SendIcon /> Kirim Pesan
          </button>
        </div>
      </div>
    </section>
  );
}
