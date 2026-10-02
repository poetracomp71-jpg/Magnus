"use client";

import { useEffect, useState, useRef } from "react";

export default function ProfilePage() {
  const [settings, setSettings] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin?resource=settings").then((r) => r.json()).then(setSettings);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: "settings", data: settings }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        setSettings({ ...settings, logoUrl: data.url });
      }
    } catch (err) {
      console.error("Upload failed:", err);
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const fieldStyle = { marginBottom: "1.25rem" };
  const labelStyle = { display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.5rem" };
  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "8px", color: "#102638", fontSize: "0.95rem", outline: "none" };

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", fontFamily: "'Space Grotesk'" }}>Profil Perusahaan</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola identitas perusahaan, logo, dan favicon</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "1100px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem", fontFamily: "'Space Grotesk'" }}>🏢 Identitas Perusahaan</h2>
          <div style={fieldStyle}>
            <label style={labelStyle}>Nama Perusahaan</label>
            <input style={inputStyle} value={settings.companyName || ""} onChange={(e) => setSettings({ ...settings, companyName: e.target.value })} placeholder="Putra Comp" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Tagline</label>
            <input style={inputStyle} value={settings.tagline || ""} onChange={(e) => setSettings({ ...settings, tagline: e.target.value })} placeholder="Magnus System — Solusi Digital Terdepan" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Telepon</label>
            <input style={inputStyle} value={settings.phone || ""} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} placeholder="+62 812-3456-7890" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" value={settings.email || ""} onChange={(e) => setSettings({ ...settings, email: e.target.value })} placeholder="hello@putracomp.id" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>WhatsApp</label>
            <input style={inputStyle} value={settings.whatsapp || ""} onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })} placeholder="6281234567890" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Alamat</label>
            <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={settings.address || ""} onChange={(e) => setSettings({ ...settings, address: e.target.value })} placeholder="Alamat lengkap kantor" />
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem", fontFamily: "'Space Grotesk'" }}>🎨 Logo & Favicon</h2>
          <div style={fieldStyle}>
            <label style={labelStyle}>Upload Logo</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              style={{
                width: "100%", padding: "0.75rem 1rem", background: "#f5f7f8", border: "2px dashed #d9e1e9",
                borderRadius: "8px", color: "#657789", fontSize: "0.95rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#80cbc4"; e.currentTarget.style.background = "#e0f2f1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#d9e1e9"; e.currentTarget.style.background = "#f5f7f8"; }}
            >
              {uploading ? "⏳ Uploading..." : "📁 Browse File (PNG, JPG, SVG)"}
            </button>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Atau Masukkan URL Logo</label>
            <input style={inputStyle} value={settings.logoUrl || ""} onChange={(e) => setSettings({ ...settings, logoUrl: e.target.value })} placeholder="https://example.com/logo.png" />
          </div>

          <div style={{ borderTop: "1px solid #e8ecf0", paddingTop: "1.25rem", marginTop: "1.25rem" }}>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "1rem", color: "#102638" }}>Caption Navbar</h3>
            <div style={fieldStyle}>
              <label style={labelStyle}>Teks Caption (kosongkan untuk sembunyikan)</label>
              <input style={inputStyle} value={settings.navbarCaption || ""} onChange={(e) => setSettings({ ...settings, navbarCaption: e.target.value })} placeholder="Magnus System" />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Warna Teks</label>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <input type="color" value={settings.navbarCaptionColor || "#0D9488"} onChange={(e) => setSettings({ ...settings, navbarCaptionColor: e.target.value })} style={{ width: "40px", height: "34px", border: "none", borderRadius: "6px", cursor: "pointer", background: "transparent" }} />
                <input style={{ ...inputStyle, flex: 1 }} value={settings.navbarCaptionColor || "#0D9488"} onChange={(e) => setSettings({ ...settings, navbarCaptionColor: e.target.value })} />
              </div>
            </div>
            <div style={{ ...fieldStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0" }}>
              <span style={{ fontSize: "0.85rem", color: "#102638" }}>Aktifkan Gradient</span>
              <button
                onClick={() => setSettings({ ...settings, navbarCaptionGradient: !settings.navbarCaptionGradient })}
                style={{
                  width: "44px", height: "24px", borderRadius: "12px", border: "none", cursor: "pointer",
                  background: settings.navbarCaptionGradient ? "#0D9488" : "#d9e1e9", position: "relative", transition: "background 0.2s",
                }}
              >
                <div style={{
                  width: "18px", height: "18px", borderRadius: "50%", background: "#fff",
                  position: "absolute", top: "3px", left: settings.navbarCaptionGradient ? "23px" : "3px",
                  transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }} />
              </button>
            </div>
            {settings.navbarCaptionGradient && (
              <div style={fieldStyle}>
                <label style={labelStyle}>Warna Gradient Ke</label>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <input type="color" value={settings.navbarCaptionGradientTo || "#14B8A6"} onChange={(e) => setSettings({ ...settings, navbarCaptionGradientTo: e.target.value })} style={{ width: "40px", height: "34px", border: "none", borderRadius: "6px", cursor: "pointer", background: "transparent" }} />
                  <input style={{ ...inputStyle, flex: 1 }} value={settings.navbarCaptionGradientTo || "#14B8A6"} onChange={(e) => setSettings({ ...settings, navbarCaptionGradientTo: e.target.value })} />
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label style={labelStyle}>Preview</label>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", padding: "1rem", background: "#f5f7f8", borderRadius: "10px", border: "1px solid #d9e1e9" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.7rem", color: "#94a2ae", marginBottom: "0.4rem" }}>Favicon</p>
                {settings.logoUrl ? (
                  <img src={settings.logoUrl} alt="Favicon" style={{ width: "32px", height: "32px", borderRadius: "6px", objectFit: "contain", border: "1px solid #d9e1e9" }} />
                ) : (
                  <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "#80cbc4", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: "14px" }}>M</div>
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.7rem", color: "#94a2ae", marginBottom: "0.4rem" }}>Navbar Logo</p>
                {settings.logoUrl ? (
                  <img src={settings.logoUrl} alt="Logo" style={{ height: "40px", objectFit: "contain" }} />
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "14px" }}>
                    <div style={{ background: "#80cbc4", color: "#fff", width: "24px", height: "24px", display: "grid", placeItems: "center", transform: "skew(-10deg)", fontSize: "13px", fontWeight: 900 }}>M</div>
                    <div>Putra Comp<b style={{ display: "block", fontSize: "8px", letterSpacing: "1.6px", fontWeight: 500, opacity: 0.5, marginTop: "2px" }}>MAGNUS SYSTEM</b></div>
                  </div>
                )}
              </div>
              {settings.navbarCaption && (
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "0.7rem", color: "#94a2ae", marginBottom: "0.4rem" }}>Caption</p>
                  <span style={{
                    fontSize: "12px", fontWeight: 700,
                    ...(settings.navbarCaptionGradient
                      ? { background: `linear-gradient(135deg, ${settings.navbarCaptionColor || "#0D9488"}, ${settings.navbarCaptionGradientTo || "#14B8A6"})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }
                      : { color: settings.navbarCaptionColor || "#0D9488" }
                    ),
                  }}>{settings.navbarCaption}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan Semua"}
        </button>
      </div>
    </div>
  );
}
