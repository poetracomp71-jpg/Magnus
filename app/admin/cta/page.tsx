"use client";

import { useEffect, useState } from "react";

const FONT_OPTIONS = ["Plus Jakarta Sans", "Space Grotesk", "Inter", "Poppins"];

export default function CtaPage() {
  const [settings, setSettings] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

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

  const fieldStyle = { marginBottom: "1.25rem" };
  const labelStyle = { display: "block", fontSize: "0.85rem", color: "#657789", marginBottom: "0.5rem" };
  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "#f5f7f8", border: "1px solid #d9e1e9", borderRadius: "8px", color: "#102638", fontSize: "0.95rem", outline: "none" };
  const cardStyle = { background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" };

  const ColorField = ({ label, field, defaultVal }: { label: string; field: string; defaultVal: string }) => (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label}</label>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input type="color" value={settings[field] || defaultVal} onChange={(e) => setSettings({ ...settings, [field]: e.target.value })} style={{ width: "40px", height: "34px", border: "none", borderRadius: "6px", cursor: "pointer", background: "transparent" }} />
        <input style={{ ...inputStyle, flex: 1 }} value={settings[field] || defaultVal} onChange={(e) => setSettings({ ...settings, [field]: e.target.value })} />
      </div>
    </div>
  );

  const FontField = ({ label, field }: { label: string; field: string }) => (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label}</label>
      <select style={inputStyle} value={settings[field] || "Plus Jakarta Sans"} onChange={(e) => setSettings({ ...settings, [field]: e.target.value })}>
        {FONT_OPTIONS.map((f) => (
          <option key={f} value={f} style={{ fontFamily: `'${f}', sans-serif` }}>{f}</option>
        ))}
      </select>
    </div>
  );

  const isActive = settings.ctaActive !== false;
  const bg = settings.ctaColor || "#0D9488";
  const previewBg = settings.ctaGradient
    ? `linear-gradient(135deg, ${bg}, ${settings.ctaGradientTo || "#14B8A6"})`
    : bg;

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>CTA Section</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola teks, background, dan font CTA</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "1100px" }}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>📢 Teks CTA</h2>
          <div style={{ ...fieldStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontSize: "0.85rem", color: "#102638" }}>Tampilkan Section</span>
            <button
              onClick={() => setSettings({ ...settings, ctaActive: !isActive })}
              style={{ width: "44px", height: "24px", borderRadius: "12px", border: "none", cursor: "pointer", background: isActive ? "#0D9488" : "#d9e1e9", position: "relative" }}
            >
              <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#fff", position: "absolute", top: "3px", left: isActive ? "23px" : "3px", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
            </button>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Judul</label>
            <input style={inputStyle} value={settings.ctaTitle || ""} onChange={(e) => setSettings({ ...settings, ctaTitle: e.target.value })} placeholder="Punya Ide Digital untuk Bisnis Anda?" />
          </div>
          <FontField label="Font Judul" field="ctaTitleFont" />
          <div style={fieldStyle}>
            <label style={labelStyle}>Subtitle</label>
            <input style={inputStyle} value={settings.ctaSubtitle || ""} onChange={(e) => setSettings({ ...settings, ctaSubtitle: e.target.value })} placeholder="Mari wujudkan bersama Magnus System." />
          </div>
          <FontField label="Font Subtitle" field="ctaSubtitleFont" />
          <div style={fieldStyle}>
            <label style={labelStyle}>Teks Tombol</label>
            <input style={inputStyle} value={settings.ctaButtonText || ""} onChange={(e) => setSettings({ ...settings, ctaButtonText: e.target.value })} placeholder="Konsultasi Gratis" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Link Tombol</label>
            <input style={inputStyle} value={settings.ctaButtonLink || ""} onChange={(e) => setSettings({ ...settings, ctaButtonLink: e.target.value })} placeholder="#contact-section" />
          </div>
        </div>

        <div>
          <div style={{ ...cardStyle, marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>🎨 Background CTA</h2>
            <ColorField label="Warna Background" field="ctaColor" defaultVal="#0D9488" />
            <ColorField label="Warna Teks" field="ctaTextColor" defaultVal="#ffffff" />
            <div style={{ ...fieldStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0" }}>
              <span style={{ fontSize: "0.85rem", color: "#102638" }}>Aktifkan Gradasi</span>
              <button
                onClick={() => setSettings({ ...settings, ctaGradient: !settings.ctaGradient })}
                style={{ width: "44px", height: "24px", borderRadius: "12px", border: "none", cursor: "pointer", background: settings.ctaGradient ? "#0D9488" : "#d9e1e9", position: "relative" }}
              >
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#fff", position: "absolute", top: "3px", left: settings.ctaGradient ? "23px" : "3px", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
              </button>
            </div>
            {settings.ctaGradient && (
              <ColorField label="Warna Gradasi Ke" field="ctaGradientTo" defaultVal="#14B8A6" />
            )}
          </div>

          <div style={cardStyle}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>👁️ Preview</h2>
            <div style={{ background: previewBg, borderRadius: "16px", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: settings.ctaTextColor || "#ffffff", marginBottom: "6px", fontFamily: `'${settings.ctaTitleFont || "Plus Jakarta Sans"}', sans-serif` }}>{settings.ctaTitle || "Punya Ide Digital untuk Bisnis Anda?"}</h3>
                <p style={{ fontSize: "14px", color: settings.ctaTextColor || "#ffffff", opacity: 0.9, fontFamily: `'${settings.ctaSubtitleFont || "Plus Jakarta Sans"}', sans-serif` }}>{settings.ctaSubtitle || "Mari wujudkan bersama Magnus System."}</p>
              </div>
              <a href="#" style={{ padding: "12px 28px", background: "white", color: "#0D9488", borderRadius: "10px", fontWeight: 700, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>
                {settings.ctaButtonText || "Konsultasi Gratis"} →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#0D9488", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
