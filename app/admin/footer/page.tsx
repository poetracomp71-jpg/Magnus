"use client";

import { useEffect, useState } from "react";

export default function FooterPage() {
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
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem", fontFamily: "'Space Grotesk'" }}>Footer</h1>
      <p style={{ color: "#657789", marginBottom: "2rem" }}>Kelola konten footer dan social media</p>

      <div style={{ background: "#ffffff", border: "1px solid #d9e1e9", borderRadius: "12px", padding: "2rem", maxWidth: "700px" }}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Deskripsi Footer</label>
          <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={settings.footerDescription || ""} onChange={(e) => setSettings({ ...settings, footerDescription: e.target.value })} placeholder="Magnus System — Solusi digital terdepan untuk bisnis Anda." />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Copyright</label>
          <input style={inputStyle} value={settings.footerCopyright || ""} onChange={(e) => setSettings({ ...settings, footerCopyright: e.target.value })} placeholder="© 2026 Putra Comp. All rights reserved." />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Instagram URL</label>
          <input style={inputStyle} value={settings.socialInstagram || ""} onChange={(e) => setSettings({ ...settings, socialInstagram: e.target.value })} placeholder="https://instagram.com/..." />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>LinkedIn URL</label>
          <input style={inputStyle} value={settings.socialLinkedin || ""} onChange={(e) => setSettings({ ...settings, socialLinkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>GitHub URL</label>
          <input style={inputStyle} value={settings.socialGithub || ""} onChange={(e) => setSettings({ ...settings, socialGithub: e.target.value })} placeholder="https://github.com/..." />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>WhatsApp Link</label>
          <input style={inputStyle} value={settings.socialWhatsapp || ""} onChange={(e) => setSettings({ ...settings, socialWhatsapp: e.target.value })} placeholder="https://wa.me/6281234567890" />
        </div>
        <button onClick={handleSave} disabled={saving} style={{ padding: "0.75rem 2rem", background: "#80cbc4", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: 700, cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
          {saved ? "✓ Tersimpan!" : saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
