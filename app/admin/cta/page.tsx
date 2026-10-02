"use client";

import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>CTA Section</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola teks dan tautan tombol CTA</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "1100px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>📢 Teks CTA</h2>
          <div style={fieldStyle}>
            <label style={labelStyle}>Judul</label>
            <input style={inputStyle} value={settings.ctaTitle || ""} onChange={(e) => setSettings({ ...settings, ctaTitle: e.target.value })} placeholder="Punya Ide Digital untuk Bisnis Anda?" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Subtitle</label>
            <input style={inputStyle} value={settings.ctaSubtitle || ""} onChange={(e) => setSettings({ ...settings, ctaSubtitle: e.target.value })} placeholder="Mari wujudkan bersama Magnus System." />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Teks Tombol</label>
            <input style={inputStyle} value={settings.ctaButtonText || ""} onChange={(e) => setSettings({ ...settings, ctaButtonText: e.target.value })} placeholder="Konsultasi Gratis" />
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Link Tombol</label>
            <input style={inputStyle} value={settings.ctaButtonLink || ""} onChange={(e) => setSettings({ ...settings, ctaButtonLink: e.target.value })} placeholder="#contact-section" />
          </div>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>👁️ Preview</h2>
          <div style={{ background: "linear-gradient(135deg, #0D9488, #14B8A6, #5EEAD4)", borderRadius: "16px", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "white", marginBottom: "6px" }}>{settings.ctaTitle || "Punya Ide Digital untuk Bisnis Anda?"}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>{settings.ctaSubtitle || "Mari wujudkan bersama Magnus System."}</p>
            </div>
            <a href="#" style={{ padding: "12px 28px", background: "white", color: "#0D9488", borderRadius: "10px", fontWeight: 700, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>
              {settings.ctaButtonText || "Konsultasi Gratis"} →
            </a>
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
